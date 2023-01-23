import { screen, act, fireEvent } from '@testing-library/react'
import { renderWithRouterAndAppProvider } from 'utils'
import { LAPSE_TIME_CACHE } from 'constants_'
import { API_DELAY } from 'mock/api'

beforeEach(() => {
    jest.useFakeTimers()
})

afterEach(() => {
    jest.useRealTimers()
})

it('does not use cache on first render, then it uses it on subsequent renders, and refreshes content when cache is expired', async () => {
    renderWithRouterAndAppProvider()
    expect(screen.queryByText(/iphone 14/i)).toBe(null)
    await act(async () => {
        jest.advanceTimersByTime(API_DELAY + 1)
    })
    fireEvent.click(screen.getByText(/iphone 14/i))
    expect(screen.queryByText(/details/i)).not.toBe(null)
    expect(screen.queryByText(/iphone 14/i)).not.toBe(null)
    fireEvent.click(screen.getByText(/products-list/i))
    expect(screen.queryByText(/details/i)).toBe(null)
    expect(screen.queryByText(/iphone 14/i)).not.toBe(null)
    await act(async () => {
        jest.advanceTimersByTime(LAPSE_TIME_CACHE + 1)
    })
    fireEvent.click(screen.getByText(/iphone 14/i))
    expect(screen.queryByText(/details/i)).not.toBe(null)
    expect(screen.queryByText(/iphone 14/i)).toBe(null)
    await act(async () => {
        jest.advanceTimersByTime(API_DELAY + 1)
    })
    expect(screen.queryByText(/iphone 14/i)).not.toBe(null)
})

import { renderHook } from '@testing-library/react'
import { useTime } from 'hooks'
import { useEffect } from 'react'
import AppProvider, { time, useActions } from 'slices'

beforeEach(() => {
    jest.useFakeTimers()
})

afterEach(() => {
    jest.useRealTimers()
})

const useTestUseTime = (isFirstRender, lapse) => {
    const {
        [time]: { set: setTimeValue },
    } = useActions()
    const isValid = useTime(lapse)
    useEffect(() => {
        if (isFirstRender) {
            setTimeValue(new Date().getTime())
        }
    }, [setTimeValue, isFirstRender])
    return isValid
}

it('is valid until it expires', () => {
    const { result, rerender } = renderHook(
        ({ isFirstRender, lapse }) => useTestUseTime(isFirstRender, lapse),
        {
            wrapper: AppProvider,
            initialProps: { isFirstRender: true, lapse: 1000 },
        }
    )

    expect(result.current).toBe(true)

    const later = new Date(new Date().getTime() + 500)

    jest.setSystemTime(later)

    rerender({ isFirstRender: false, lapse: 1000 })

    expect(result.current).toBe(true)

    const evenLater = new Date(later.getTime() + 600)

    jest.setSystemTime(evenLater)

    rerender({ isFirstRender: false, lapse: 1000 })

    expect(result.current).toBe(false)
})

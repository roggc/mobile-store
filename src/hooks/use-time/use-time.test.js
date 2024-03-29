import { renderHook } from '@testing-library/react'
import { useTime } from 'hooks'
import { useEffect } from 'react'
import { useSlice, Provider } from 'slices'

beforeEach(() => {
    jest.useFakeTimers()
})

afterEach(() => {
    jest.useRealTimers()
})

const useTestUseTime = (isFirstRender, lapse) => {
    const [, setTime] = useSlice('time')
    const isValid = useTime(lapse)
    useEffect(() => {
        if (isFirstRender) {
            setTime(new Date().getTime())
        }
    }, [setTime, isFirstRender])
    return isValid
}

it('is valid until it expires', () => {
    const { result, rerender } = renderHook(
        ({ isFirstRender, lapse }) => useTestUseTime(isFirstRender, lapse),
        {
            wrapper: Provider,
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

import { useValues, time } from 'slices'

export const useTime = (lapse) => {
    const { value: timeValue } = useValues(time)
    const isValid = !!timeValue && new Date().getTime() - timeValue < lapse
    return isValid
}

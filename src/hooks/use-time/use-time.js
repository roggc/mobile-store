import { useSlice } from 'slices'

export const useTime = (lapse) => {
    const [time] = useSlice('time')
    const isValid = !!time && new Date().getTime() - time < lapse
    return isValid
}

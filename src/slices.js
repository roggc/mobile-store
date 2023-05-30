import getHookAndProviderFromSlices from 'react-context-slices'

export const { useSlice, Provider } = getHookAndProviderFromSlices({
    count: { initialState: 0 },
    products: { initialState: [] },
    time: { initialState: 0 },
})

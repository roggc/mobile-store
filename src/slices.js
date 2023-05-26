import getHookAndProviderFromSlices from 'react-context-slices'

export const { useSlice, Provider } = getHookAndProviderFromSlices({
    count: 0,
    products: [],
    time: 0,
})

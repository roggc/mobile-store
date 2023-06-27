import getHookAndProviderFromSlices from 'react-context-slices'

export const { useSlice, Provider } = getHookAndProviderFromSlices({
    slices: {
        count: { initialArg: 0 },
        products: { initialArg: [] },
        time: { initialArg: 0 },
    },
})

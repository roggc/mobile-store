import { composeProviders } from 'react-context-slices'
import {
    useValues as useCountValues,
    useActions as useCountActions,
    Provider as CountProvider,
} from './count'
import {
    useValues as useTimeValues,
    useActions as useTimeActions,
    Provider as TimeProvider,
} from './time'
import {
    useValues as useProductsValues,
    useActions as useProductsActions,
    Provider as ProductsProvider,
} from './products'

export { name as count } from './count'
export { name as time } from './time'
export { name as products } from './products'

export const useValues = (slice) => ({
    ...useCountValues(slice),
    ...useTimeValues(slice),
    ...useProductsValues(slice),
})
export const useActions = () => ({
    ...useCountActions(),
    ...useTimeActions(),
    ...useProductsActions(),
})
export default composeProviders([CountProvider, TimeProvider, ProductsProvider])

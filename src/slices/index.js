import { composeProviders } from 'react-context-slices'
import {
    useValues as useCountValues,
    useActions as useCountActions,
    Provider as CountProvider,
} from './count'

export { name as count } from './count'

export const useValues = (slice) => ({ ...useCountValues(slice) })
export const useActions = () => ({ ...useCountActions() })
export default composeProviders([CountProvider])

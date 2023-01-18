import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from 'react-router-dom'
import { Root, ProductDetails, ProductsList } from 'routes'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<ProductsList />} />{' '}
            <Route path="/details" element={<ProductDetails />} />
        </Route>
    )
)

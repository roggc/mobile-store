import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from 'react-router-dom'
import Root from 'components/routes/root'
import ProductsList, {
    loader as productsListLoader,
} from 'components/routes/products-list'
import ProductDetails from 'components/routes/product-details'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route
                index
                element={<ProductsList />}
                loader={productsListLoader}
            />
            <Route path="/details" element={<ProductDetails />} />
        </Route>
    )
)

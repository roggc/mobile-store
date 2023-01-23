import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from 'react-router-dom'
import Root from 'components/routes/root'
import ProductsList from 'components/routes/products-list/products-list'
import ProductDetails from 'components/routes/product-details/product-details'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<ProductsList />} />
            <Route path="/details/:productID" element={<ProductDetails />} />
        </Route>
    )
)

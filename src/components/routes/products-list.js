import { API_URL, PRODUCTS_PATH } from 'constants_'
import { useLoaderData } from 'react-router-dom'

export const loader = async () => {
    const products = await fetch(`${API_URL}${PRODUCTS_PATH}`, {
        headers: {
            'access-control-allow-origin': '*',
        },
    }).then((response) => response.json())
    return { products }
}

const ProductsList = () => {
    const { products } = useLoaderData()
    return (
        <>
            {products?.map((product) => (
                <div key={product.id}>{product.id}</div>
            ))}
        </>
    )
}

export default ProductsList

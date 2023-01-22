import { useLoaderData } from 'react-router-dom'
import { fetchApi, GET_ALL_PRODUCTS } from 'mock/api'
import ProductCard from 'components/product-card/product-card'
import styled from 'styled-components'

export const loader = async () => {
    const products = await fetchApi(GET_ALL_PRODUCTS)
    return { products }
}

const ProductsList = () => {
    const { products } = useLoaderData()
    return (
        <ListContainer>
            {products?.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    width={200}
                    height={200}
                />
            ))}
        </ListContainer>
    )
}

export default ProductsList

const ListContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

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
        <ComponentContainer>
            <SearchBox size={50} />
            <ListContainer>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        width={200}
                        height={200}
                    />
                ))}
            </ListContainer>
        </ComponentContainer>
    )
}

export default ProductsList

const ListContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
`
const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
`

const SearchBox = styled.input`
    border-radius: 10px;
    height: 40px;
    align-self: flex-end;
`

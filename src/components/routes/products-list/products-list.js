import { fetchApi, GET_ALL_PRODUCTS, getFilteredProducts } from 'mock/api'
import ProductCard from 'components/product-card/product-card'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { LAPSE_TIME_CACHE } from 'constants_'
import { useTime } from 'hooks'
import { useSlice } from 'slices'

const ProductsList = () => {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filterText, setFilterText] = useState('')
    const isValid = useTime(LAPSE_TIME_CACHE)
    const [products, setProducts] = useSlice('products')
    const [, setTime] = useSlice('time')

    useEffect(() => {
        if (!isValid) {
            ;(async () => {
                setProducts(await fetchApi(GET_ALL_PRODUCTS, { f: '' }))
                setTime(new Date().getTime())
            })()
        }
    }, [isValid, setProducts, setTime])

    useEffect(() => {
        setFilteredProducts(getFilteredProducts(filterText, products))
    }, [filterText, products])

    const onChangeFilterText = (e) => setFilterText(e.target.value)

    return (
        <ComponentContainer>
            <SearchBox
                size={50}
                value={filterText}
                onChange={onChangeFilterText}
            />
            <ListContainer>
                {filteredProducts.map((product) => (
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

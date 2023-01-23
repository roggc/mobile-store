import { fetchApi, GET_ALL_PRODUCTS, getFilteredProducts } from 'mock/api'
import ProductCard from 'components/product-card/product-card'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { LAPSE_TIME_CACHE } from 'constants_'
import { useTime } from 'hooks'
import { useValues, useActions, products, time } from 'slices'

const ProductsList = () => {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filterText, setFilterText] = useState('')
    const isValid = useTime(LAPSE_TIME_CACHE)
    const { value: productsValue } = useValues(products)
    const {
        [products]: { set: setProductsValue },
        [time]: { set: setTimeValue },
    } = useActions()

    useEffect(() => {
        if (!isValid) {
            ;(async () => {
                setProductsValue(await fetchApi(GET_ALL_PRODUCTS, { f: '' }))
                setTimeValue(new Date().getTime())
            })()
        }
    }, [isValid, setProductsValue, setTimeValue])

    useEffect(() => {
        setFilteredProducts(getFilteredProducts(filterText, productsValue))
    }, [filterText, productsValue])

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

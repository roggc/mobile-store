import { LAPSE_TIME_CACHE } from 'constants_'
import { ADD_PRODUCT_TO_THE_CART, fetchApi, GET_PRODUCT_BY_ID } from 'mock/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useActions, count, useValues, products } from 'slices'
import styled from 'styled-components'
import { useTime } from 'hooks'

const ProductDetails = () => {
    const { productID } = useParams()
    const [
        { imagen, marca, modelo, precio, colores, almacenajes, id },
        setProduct,
    ] = useState({
        imagen: '',
        marca: '',
        modelo: '',
        precio: '',
        colores: [],
        almacenajes: [],
    })
    const {
        [count]: { set: setCountValue },
    } = useActions()
    const { value: productsValue } = useValues(products)
    const isValid = useTime(LAPSE_TIME_CACHE)

    const [colorCode, setColorCode] = useState('')
    const [storageCode, setStorageCode] = useState('')

    useEffect(() => {
        ;(async () => {
            let product_
            if (!isValid) {
                product_ = await fetchApi(GET_PRODUCT_BY_ID, {
                    id: productID,
                })
            } else {
                product_ = productsValue.find(({ id }) => id === productID)
            }
            setProduct(product_)
            setColorCode(product_.colores[0].code)
            setStorageCode(product_.almacenajes[0].code)
        })()
    }, [productID, isValid, productsValue])

    const addToCart = async () => {
        setCountValue(
            (
                await fetchApi(ADD_PRODUCT_TO_THE_CART, {
                    id,
                    colorCode,
                    storageCode,
                })
            ).count
        )
    }

    return (
        <ComponentContainer>
            <ItemsContainer>
                <Image src={imagen} width={200} />
                <DescriptionAndActionsContainer>
                    <DescriptionContainer>
                        <DescriptionItem>
                            <DescriptionItemElement>
                                Brand:
                            </DescriptionItemElement>
                            <DescriptionItemElement>
                                {marca}
                            </DescriptionItemElement>
                        </DescriptionItem>
                        <DescriptionItem>
                            <DescriptionItemElement>
                                Model:
                            </DescriptionItemElement>
                            <DescriptionItemElement>
                                {modelo}
                            </DescriptionItemElement>
                        </DescriptionItem>
                        <DescriptionItem>
                            <DescriptionItemElement>
                                Price:
                            </DescriptionItemElement>
                            <DescriptionItemElement>
                                {precio}
                            </DescriptionItemElement>
                        </DescriptionItem>
                    </DescriptionContainer>
                </DescriptionAndActionsContainer>
                <ActionsContainer>
                    <ActionsItemContainer>
                        <Label>Select a color:</Label>
                        <DropDown
                            width={300}
                            onChange={(e) => setColorCode(e.target.value)}
                        >
                            {colores.map(({ value, code }) => (
                                <Option key={code} value={code}>
                                    {value}
                                </Option>
                            ))}
                        </DropDown>
                    </ActionsItemContainer>
                    <ActionsItemContainer>
                        <Label>Select storage capacity:</Label>
                        <DropDown
                            onChange={(e) => setStorageCode(e.target.value)}
                        >
                            {almacenajes.map(({ value, code }) => (
                                <Option key={code} value={code}>
                                    {value}
                                </Option>
                            ))}
                        </DropDown>
                    </ActionsItemContainer>
                    <ActionsItemContainer>
                        <AcceptButton onClick={addToCart}>
                            Add to cart
                        </AcceptButton>
                    </ActionsItemContainer>
                </ActionsContainer>
            </ItemsContainer>
        </ComponentContainer>
    )
}

export default ProductDetails

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

const Image = styled.img`
    border-radius: 10px;
    border: 1px solid black;
`

const DescriptionAndActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ItemsContainer = styled.div`
    display: flex;
    gap: 30px;
`

const DescriptionContainer = styled.div`
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: stretch;
`

const DescriptionItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`
const DescriptionItemElement = styled.div``

const ActionsContainer = styled.div`
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: stretch;
    gap: 10px;
`
const ActionsItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const DropDown = styled.select`
    border-radius: 10px;
    height: 40px;
    width: 200px;
    padding: 10px;
`
const Option = styled.option``

const Label = styled.div``

const AcceptButton = styled.button`
    border-radius: 10px;
    height: 40px;
    cursor: pointer;
`

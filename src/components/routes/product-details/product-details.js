import { LAPSE_TIME_CACHE } from 'constants_'
import { ADD_PRODUCT_TO_THE_CART, fetchApi, GET_PRODUCT_BY_ID } from 'mock/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSlice } from 'slices'
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
    const [, setCount] = useSlice('count')
    const [products] = useSlice('products')
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
                product_ = products.find(({ id }) => id === productID)
            }
            if (!!product_) {
                setProduct(product_)
                setColorCode(product_.colores[0].code)
                setStorageCode(product_.almacenajes[0].code)
            }
        })()
    }, [productID, isValid, products])

    const addToCart = async () => {
        setCount(
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
                <ImageContainer>
                    <Image src={imagen} width={200} />
                </ImageContainer>
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
                    <ActionsContainer>
                        <ActionsItemContainer>
                            <Label>Select a color:</Label>
                            <DropDown
                                width={300}
                                onChange={(e) => setColorCode(e.target.value)}
                                data-testid="colors"
                            >
                                {colores.map(({ value, code }) => (
                                    <Option
                                        key={code}
                                        value={code}
                                        data-testid="colors-option"
                                    >
                                        {value}
                                    </Option>
                                ))}
                            </DropDown>
                        </ActionsItemContainer>
                        <ActionsItemContainer>
                            <Label>Select storage capacity:</Label>
                            <DropDown
                                onChange={(e) => setStorageCode(e.target.value)}
                                data-testid="storages"
                            >
                                {almacenajes.map(({ value, code }) => (
                                    <Option
                                        key={code}
                                        value={code}
                                        data-testid="storages-option"
                                    >
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
                </DescriptionAndActionsContainer>
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
    max-width: 100%;
    object-fit: contain;
`

const ImageContainer = styled.div`
    border-radius: 10px;
    border: 1px solid black;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

const DescriptionAndActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ItemsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
    align-items: stretch;
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

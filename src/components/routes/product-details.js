import { fetchApi, GET_PRODUCT_BY_ID } from 'mock/api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ProductDetails = () => {
    const { productID } = useParams()
    const [{ imagen, marca, modelo, precio }, setProduct] = useState({
        imagen: '',
        marca: '',
        modelo: '',
        precio: '',
    })

    useEffect(() => {
        ;(async () => {
            setProduct(await fetchApi(GET_PRODUCT_BY_ID, { id: productID }))
        })()
    }, [productID])

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
`
const DescriptionItemElement = styled.div`
    flex: 1;
    white-space: nowrap;
`

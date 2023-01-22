import styled from 'styled-components'

const ProductCard = ({
    product: { marca, modelo, precio, imagen },
    width,
    height,
    ...props
}) => {
    return (
        <ExtraContainer>
            <CardContainer {...props}>
                <Image
                    src={imagen}
                    alt={`${marca}-${modelo}`}
                    width={width}
                    height={height}
                />
                <Item>{marca}</Item>
                <Item>{modelo}</Item>
                <Item>{precio}</Item>
            </CardContainer>
        </ExtraContainer>
    )
}

export default ProductCard

const CardContainer = styled.div`
    border-radius: 10px;
    padding: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Image = styled.img`
    border-radius: 10px;
    border: 1px solid black;
`

const Item = styled.div``

const ExtraContainer = styled.div`
    flex-basis: 24%;
    display: flex;
    justify-content: flex-end;

    --margin-left: auto;
    --border: 1px solid red;
`

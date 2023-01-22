import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { count, useValues } from 'slices'

const BASE_10 = 10
const INDEX_OF_SECOND_ITEM_IN_THE_LIST = 1

const Header = ({ ...props }) => {
    const { pathname, search, hash } = useLocation()
    const navigate = useNavigate()
    const { value: countValue } = useValues(count)

    const splitedPathname = pathname.split('/')
    const isRoot = pathname === '/'
    const indexPageName = 'products-list'

    const goToPage = (index) => {
        const route = splitedPathname.reduce((result, page, index_, array) => {
            const isParam = !isNaN(parseInt(page, BASE_10))
            if ((index_ > index && !isParam) || index === 0) {
                return result
            }
            const isLastIndex = index_ === array.length - 1
            const newResult =
                index_ === INDEX_OF_SECOND_ITEM_IN_THE_LIST
                    ? `${result}${page}`
                    : `${result}/${page}`
            return isLastIndex ? `${newResult}${search}${hash}` : newResult
        }, '')
        navigate(route)
    }

    const goToIndexPage = () => navigate('/')

    const renderBreadCrumbs = () => (
        <BreadCrumbsContainer>
            {isRoot ? (
                <BreadCrumbsItem onClick={goToIndexPage}>
                    >{indexPageName}
                </BreadCrumbsItem>
            ) : (
                splitedPathname.map((page, index) => {
                    const isParam = !isNaN(parseInt(page, BASE_10))
                    return isParam ? null : (
                        <BreadCrumbsItem
                            key={`${page}_${index}`}
                            onClick={() => goToPage(index)}
                        >
                            >{index === 0 ? indexPageName : page}
                        </BreadCrumbsItem>
                    )
                })
            )}
        </BreadCrumbsContainer>
    )

    return (
        <HeaderContainer {...props}>
            <Link to="/">home</Link>
            {renderBreadCrumbs()}
            <Cart>{countValue}</Cart>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    gap: 60px;
    justify-content: space-between;
`
const BreadCrumbsContainer = styled.div`
    display: flex;
    gap: 10px;
`
const BreadCrumbsItem = styled.div`
    cursor: pointer;
`

const Cart = styled.div``

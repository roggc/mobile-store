import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({ ...props }) => {
    const { pathname, search, hash } = useLocation()
    const navigate = useNavigate()
    const splitedPathname = pathname.split('/')
    const isRoot = pathname === '/'
    const indexPageName = 'products-list'

    const goToPage = (index) => {
        const route = splitedPathname.reduce((result, page, index_, array) => {
            if (index_ > index || index === 0) {
                return result
            }
            const isLastIndex = index_ === array.length - 1
            const newResult =
                index === 1 ? `${result}${page}` : `${result}/${page}`
            return isLastIndex ? `${newResult}${search}${hash}` : newResult
        }, '/')
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
                splitedPathname.map((page, index) => (
                    <BreadCrumbsItem
                        key={`${page}_${index}`}
                        onClick={() => goToPage(index)}
                    >
                        >{index === 0 ? indexPageName : page}
                    </BreadCrumbsItem>
                ))
            )}
        </BreadCrumbsContainer>
    )

    return (
        <HeaderContainer {...props}>
            <Link to="/">home</Link>
            {renderBreadCrumbs()}
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    gap: 60px;
`
const BreadCrumbsContainer = styled.div`
    display: flex;
    gap: 10px;
`
const BreadCrumbsItem = styled.div`
    cursor: pointer;
`

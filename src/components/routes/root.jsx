import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Root = () => (
    <>
        <Header>
            <Link to="/">home</Link>
            <Link to="/details">details</Link>
        </Header>
        <Outlet />
    </>
)

const Header = styled.div``

export default Root

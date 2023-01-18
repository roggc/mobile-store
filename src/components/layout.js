import { Link, Outlet } from '@tanstack/react-router'
import styled from 'styled-components'

export const Layout = () => (
    <>
        <Header>
            <Link to="/">home</Link>
            <Link to="/details">details</Link>
        </Header>
        <Outlet />
    </>
)

const Header = styled.div``

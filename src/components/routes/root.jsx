import { Outlet } from 'react-router-dom'
// import styled from 'styled-components'
import Header from 'components/header/header'

const Root = () => (
    <>
        <Header />
        <Outlet />
    </>
)

export default Root

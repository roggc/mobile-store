import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from 'components/header/header'

const Root = () => (
    <PageContainer>
        <Header />
        <Outlet />
    </PageContainer>
)

export default Root

const PageContainer = styled.div`
    padding: 10px;
`

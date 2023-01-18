import { createRouteConfig, createReactRouter } from '@tanstack/react-router'
import { Layout, ProductsListScreen, ProductDetailsScreen } from 'components'

export const getRouter = (isUserLogedIn: boolean) => {
    const rootRoute = createRouteConfig({
        component: Layout,
    })
    const productsListRoute = rootRoute.createRoute({
        path: '/',
        component: ProductsListScreen,
    })
    const productDetailsRoute = rootRoute.createRoute({
        path: '/details',
        component: ProductDetailsScreen,
    })

    const publicRoutes = [productsListRoute, productDetailsRoute]
    const privateRoutes = []
    const routeConfig = rootRoute.addChildren([
        ...publicRoutes,
        ...(isUserLogedIn ? privateRoutes : []),
    ])

    return createReactRouter({ routeConfig })
}

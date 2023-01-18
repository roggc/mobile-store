import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from 'other/router'

export const App = () => <RouterProvider router={getRouter()}></RouterProvider>

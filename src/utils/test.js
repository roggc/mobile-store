import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { router } from 'other'
import { RouterProvider } from 'react-router-dom'
import AppProvider from 'slices'

export const renderWithRouterAndAppProvider = () => ({
    user: userEvent.setup(),
    ...render(null, {
        wrapper: ({ children }) => (
            <AppProvider>
                <RouterProvider router={router}>{children}</RouterProvider>
            </AppProvider>
        ),
    }),
})

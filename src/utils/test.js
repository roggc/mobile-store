import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { router } from 'other'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'slices'

export const renderWithRouterAndAppProvider = () => ({
    user: userEvent.setup(),
    ...render(null, {
        wrapper: ({ children }) => (
            <Provider>
                <RouterProvider router={router}>{children}</RouterProvider>
            </Provider>
        ),
    }),
})

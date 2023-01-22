import { RouterProvider } from 'react-router-dom'
import { router } from 'other'
import AppProvider from 'slices'

const App = () => (
    <AppProvider>
        <RouterProvider router={router}></RouterProvider>
    </AppProvider>
)

export default App

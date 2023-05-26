import { RouterProvider } from 'react-router-dom'
import { router } from 'other'
import { Provider } from 'slices'

const App = () => (
    <Provider>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
)

export default App

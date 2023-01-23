import { screen } from '@testing-library/react'
import { renderWithRouterAndAppProvider } from 'utils'

it('renders options', async () => {
    const { user } = renderWithRouterAndAppProvider()
    await user.click(await screen.findByText(/iphone 14/i))
    const colorsOption = await screen.findAllByTestId('colors-option')
    const storagesOption = screen.getAllByTestId('storages-option')
    expect(colorsOption.length).toBeGreaterThan(0)
    expect(storagesOption.length).toBeGreaterThan(0)
})

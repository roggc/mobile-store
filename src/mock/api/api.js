import { products } from './products'
const API_DELAY = 500

export const GET_ALL_PRODUCTS = 'get-all-products'
export const GET_PRODUCT_BY_ID = 'get-product-by-id'
export const ADD_PRODUCT_TO_THE_CART = 'add-product-to-the-cart'

const cart = []

export const fetchApi = (path, parameters = {}) =>
    new Promise((resolve) => {
        let response
        switch (path) {
            case GET_ALL_PRODUCTS:
                const { f: filterText } = parameters
                const trimmedFilterText = filterText.trim().toLowerCase()
                const filterTextWords = trimmedFilterText.split(' ')
                response = products.filter((product) =>
                    filterTextWords.reduce(
                        (isPass, word) =>
                            isPass &&
                            (product.marca.toLowerCase().includes(word) ||
                                product.modelo.toLowerCase().includes(word)),
                        true
                    )
                )
                break
            case GET_PRODUCT_BY_ID:
                const { id: productID } = parameters
                response = products.filter(
                    (product) => product.id === productID
                )[0]
                break
            case ADD_PRODUCT_TO_THE_CART:
                const addToCart = parameters
                cart.push(addToCart)
                response = { count: cart.length }
                break
            default:
                response = []
                break
        }
        setTimeout(resolve, API_DELAY, response)
    })

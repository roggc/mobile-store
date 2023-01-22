import { products } from './products'
const API_DELAY = 500
export const GET_ALL_PRODUCTS = 'get-all-products'

export const fetchApi = (path) =>
    new Promise((resolve) => {
        let response
        switch (path) {
            case GET_ALL_PRODUCTS:
                response = products
                break
            default:
                response = []
                break
        }
        setTimeout(resolve, API_DELAY, response)
    })

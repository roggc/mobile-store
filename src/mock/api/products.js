import iphone13 from 'assets/iphone-13.jpeg'
import iphone14 from 'assets/iphone-14.jpg'
import oppo from 'assets/oppo.avif'
import samsung from 'assets/samsung.jpg'
import sony from 'assets/sony.webp'

export const products = [
    {
        id: '1',
        marca: 'apple',
        modelo: 'iphone 13',
        precio: 1000,
        imagen: iphone13,
    },
    {
        id: '2',
        marca: 'apple',
        modelo: 'iphone 14',
        precio: 1100,
        imagen: iphone14,
    },
    { id: '3', marca: 'samsung', modelo: 'Galaxy', precio: 900, imagen: oppo },
    { id: '4', marca: 'oppo', modelo: 'A9', precio: 700, imagen: samsung },
    { id: '5', marca: 'sony', modelo: 'Xperia', precio: 600, imagen: sony },
]

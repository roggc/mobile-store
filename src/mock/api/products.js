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
        colores: [
            { value: 'blue', code: '1' },
            { value: 'orange', code: '2' },
        ],
        almacenajes: [
            { value: 100, code: '1' },
            { value: 200, code: '2' },
        ],
    },
    {
        id: '2',
        marca: 'apple',
        modelo: 'iphone 14',
        precio: 1100,
        imagen: iphone14,
        colores: [
            { value: 'red', code: '1' },
            { value: 'white', code: '2' },
        ],
        almacenajes: [
            { value: 100, code: '1' },
            { value: 150, code: '2' },
        ],
    },
    {
        id: '3',
        marca: 'samsung',
        modelo: 'Galaxy',
        precio: 900,
        imagen: oppo,
        colores: [{ value: 'black', code: '1' }],
        almacenajes: [
            { value: 100, code: '1' },
            { value: 300, code: '2' },
        ],
    },
    {
        id: '4',
        marca: 'oppo',
        modelo: 'A9',
        precio: 700,
        imagen: samsung,
        colores: [
            { value: 'white', code: '1' },
            { value: 'blue', code: '2' },
        ],
        almacenajes: [{ value: 100, code: '1' }],
    },
    {
        id: '5',
        marca: 'sony',
        modelo: 'Xperia',
        precio: 600,
        imagen: sony,
        colores: [{ value: 'black', code: '1' }],
        almacenajes: [{ value: 200, code: '1' }],
    },
]

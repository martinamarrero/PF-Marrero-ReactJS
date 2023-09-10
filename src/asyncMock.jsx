const products =[
    {
        id: '1',
        name: 'Camiseta Oficial Away 23',
        price: 3500,
        category: 'camisetas',
        img: 'https://soccershopuy.net/cdn/shop/products/camiseta-alternativa-umbro-nacional-2022-3_1024x1024.jpg?v=1647559045',
        stock: 100,
        description: 'La nueva Camiseta Away 1 Nacional X Umbro, un homenaje a nuestra casa, el Gran Parque Central.'
    },
    {id: '2', name: 'Canguro Stadia Nacional ', price: 2000, category: 'canguros', img: 'https://f.fcdn.app/imgs/c03987/tienda.nacional.uy/tnacuy/2955/webp/catalogo/NU142923_4A9_1/1500-1500/canguro-stadia-nacional-hombre-rojo-arena-blanco.jpg', stock: 60, description: 'Canguro con detalle de cambio de color. 50% poliéster/50% algodón'},
    {id: '3', name: 'Pantalon Vini Nacional', price: 2000, category: 'pantalones', img: 'https://f.fcdn.app/imgs/4220a8/tienda.nacional.uy/tnacuy/c297/webp/catalogo/NU942883_119_1/1500-1500/pantalon-vini-nacional-hombre-azul-marino-azul-marino-blanco.jpg', stock: 50, description: 'Pantalón con detalle de cambio de color en sus laterales inferiores. 65% poliéster/35% algodón'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
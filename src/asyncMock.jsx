const products =[
    {
        id: '1',
        name: 'Camiseta Away 1 2023',
        price: 3900,
        category: 'camisetas',
        img: 'https://f.fcdn.app/imgs/f48d1d/tienda.nacional.uy/tnacuy/38c8/webp/catalogo/NU142940_S41_1/1500-1500/camiseta-away-1-2023-nacional-hombre-skuba-rojo-azul-marino.jpg',
        stock: 100,
        description: 'La nueva Camiseta Away 1 Nacional X Umbro, un homenaje a nuestra casa, el Gran Parque Central.'
    },
    {id: '2', name: 'Canguro Stadia Nacional ', price: 2000, category: 'canguros', img: 'https://f.fcdn.app/imgs/c03987/tienda.nacional.uy/tnacuy/2955/webp/catalogo/NU142923_4A9_1/1500-1500/canguro-stadia-nacional-hombre-rojo-arena-blanco.jpg', stock: 60, description: 'Canguro con detalle de cambio de color. 50% poliéster/50% algodón'},
    {id: '3', name: 'Pantalon Vini Nacional', price: 2000, category: 'pantalones', img: 'https://f.fcdn.app/imgs/4220a8/tienda.nacional.uy/tnacuy/c297/webp/catalogo/NU942883_119_1/1500-1500/pantalon-vini-nacional-hombre-azul-marino-azul-marino-blanco.jpg', stock: 50, description: 'Pantalón con detalle de cambio de color en sus laterales inferiores. 65% poliéster/35% algodón'},
    {id: '4', name: 'Buzo Derman Nacional', price: 1800, category: 'canguros', img: 'https://f.fcdn.app/imgs/ae818b/tienda.nacional.uy/tnacuy/81cb/webp/catalogo/NU142936_014_2/1500-1500/buzo-derman-nacional-hombre-azul-marino-rojo.jpg', stock: 30, description: 'Buzo con capucha y medio cierre. 100 % POLIÉSTER'},
    {id: '5', name: 'Canguro Stitch Nacional', price: 1600, category: 'canguros', img: 'https://f.fcdn.app/imgs/a8500c/tienda.nacional.uy/tnacuy/4174/webp/catalogo/NU942843_4W9_1/1500-1500/canguro-stitch-nacional-hombre-rojo-beige-ordeaux-blanco.jpg', stock: 20, description: 'Canguro con capucha.'},
    {id: '6', name: 'Pantalón Tecnologico Umbro', price: 1000, category: 'pantalones', img: 'https://f.fcdn.app/imgs/f1e705/tienda.nacional.uy/tnacuy/da9f/webp/catalogo/20103290_019_2/1500-1500/pantalon-tecnologico-umbro-hombre-azul-marino-blanco.jpg', stock: 40, description: 'Poly French Terry 215 grs.'},
    {id: '7', name: 'Pantalón Recto Bolso', price: 900, category: 'pantalones', img: 'https://f.fcdn.app/imgs/80f628/tienda.nacional.uy/tnacuy/c058/webp/catalogo/40121542_194_2/1500-1500/pantalon-recto-bolso-licencias-hombre-azul-marino-blanco-rojo.jpg', stock: 20, description: 'Pantalon licencia hombre, 65% poliester/35% algodon'},
    {id: '8', name: 'Camiseta Away 3 2023', price: 3200, category: 'camisetas', img: 'https://f.fcdn.app/imgs/f2dd12/tienda.nacional.uy/tnacuy/bbff/webp/catalogo/NU242931_S79_1/1500-1500/camiseta-away-3-2023-umbro-nacional-junior-skuba-celeste-blanco.jpg', stock: 100, description: 'Camiseta Away 3 2023 Umbro Nacional'},
    {id: '9', name: 'Camiseta Away 2 2023', price: 3900, category: 'camisetas', img: 'https://f.fcdn.app/imgs/d2fa4c/tienda.nacional.uy/tnacuy/8d0d/webp/catalogo/NU142921_S19_1/1500-1500/camiseta-away-2-2023-nacional-hombre-skuba-azul-marino-blanco.jpg', stock: 100, description: 'La Camiseta del Hincha, un homenaje a la mayor movilización de hinchas en la historia del fútbol sudamericano: el Segundo Éxodo del Pueblo Oriental.'},
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
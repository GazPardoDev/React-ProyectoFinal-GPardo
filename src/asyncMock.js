const products = [
    { 
        id: 1, 
        name: 'Smart TV Hitachi', 
        price: 52000, 
        category: 'Televisores', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_926763-MLA48007684848_102021-F.webp', 
        stock: 15, 
        description:'Conecta tu smart por WIFI, disfrutas de las plataformas como Netflix, Youtube, Disney+ y muchas más, gracias al sistema de Android Tv vivirás una gran experiencia. Gracias a sus puertos USB podrás reproducir en tu TV el contenido (fotos, música y videos) almacenado en dispositivos externos como smartphone, tablets o pendrives. También, cuenta con entradas HDMI para que puedas vincular reproductores de audio y video o consolas de juegos.'
    },
    
    {
        id: 2,
        name: 'Parlante Bluetooth Philips',
        price: 37000,
        category: 'Audio',
        img:'https://www.megatone.net/Images/Articulos/zoom2x/259/MCA2206PHI.jpg',
        stock: 22,
        description:'El parlante TAX2206/77 de Philips cuenta con un parlante Woofers que te brinda una excelente experiencia en sonido, optimizado para reproducir sonidos de bajas frecuencias. Con un peso de 4,5 Kilogramos puedes trasladarlo donde quieras.'
    },
    
    {
        id: 3,
        name: 'Cámara Digital Canon Rebel T7',
        price: 252000,
        category: 'Cámaras',
        img:'https://www.megatone.net/images//Articulos/zoom2x/204/MKT0355VIS-1.jpg',
        stock: 8,
        description:'Ideal para usuarios de dispositivos móviles que desean dar el siguiente paso en su fotografía, la cámara EOS Rebel T7 combina fantásticas características con una operación sencilla de uso para obtener imágenes de alta calidad que usted compartirá con orgullo. Aproveche la capacidad del gran sensor CMOS de 24.1 megapíxeles de la EOS Rebel T7 para desarrollar su potencial y obtener excelentes fotografías.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 1500)
    })
}
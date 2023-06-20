const products = [
    {
        "img": "https://chemasport.es/22441-thickbox_default/zapatillas-adidas-sleek-m-blanco.jpg",
        "titulo": "Zapatillas Adidas",
        "id": '1',
        "category": "Zapatillas",
        "marca": "Adidas",
        "color": "Blanco",
        "precio": 40000,
        "modelo": "Low",
        "talla": 42,
        "material": "Cuerina",
        "stock": 7
    },
    {
        "img": "https://tse1.mm.bing.net/th?id=OIP.lfT3x4jkcy1Rcmfl18iwawHaHa&pid=Api&P=0",
        "titulo": "Zapatillas Nike",
        "id": '2',
        "category": "Zapatillas",
        "marca": "Nike",
        "color": "Verde",
        "precio": 52000,
        "modelo": "High",
        "talla": 40,
        "material": "Plasticos",
        "stock": 5
    },
    {
        "img": "https://tse3.mm.bing.net/th?id=OIP.jJUY0xnQmAqNLS6VEnl2GAHaHa&pid=Api&P=0",
        "titulo": "Zapatillas Converse",
        "id": '3',
        "category": "Zapatillas",
        "marca": "Converse",
        "color": "Negro",
        "precio": 37000,
        "modelo": "Original",
        "talla": 43,
        "material": "Tela",
        "stock": 11
    },
    {
        "img": "https://cdn.vnda.com.br/767x/avoid/2020/04/21/21_4_7_721_TNISCONVERSEHIGHCTALLSTARSEASONALFLORESTAVERDE1.jpg?v=1587514707",
        "titulo": "Zapatillas Converse",
        "id": '4',
        "category": "Zapatillas",
        "marca": "Converse",
        "color": "Verde",
        "precio": 37000,
        "modelo": "Original",
        "talla": 39,
        "material": "Tela",
        "stock": 8
    },
    {
        "img": "https://contents.sixshop.com/thumbnails/uploadedFiles/104905/product/image_1611412159885_1000.jpg",
        "titulo": "Zapatillas Nike",
        "id": '5',
        "category": 'Zapatillas',
        "marca": "Nike",
        "color": "Gris",
        "precio": 32000,
        "modelo": "Low",
        "talla": 43,
        "material": "Cuerina",
        "stock": 12
    },
    {
        "img": "https://tse1.mm.bing.net/th?id=OIP.FwL_Sv6CfMMrDk7-kVQ4AgHaIW&pid=Api&P=0",
        "titulo": "Zapatillas Fila",
        "id": '6',
        "category": "Zapatillas",
        "marca": "Fila",
        "color": "Blanco",
        "precio": 24000,
        "modelo": "Low",
        "talla": 39,
        "material": "Plasticos",
        "stock": 9
    },
    {
        "img": "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8f846832/products/FI_LS130007-AVV/FI_LS130007-AVV-1.JPG",
        "titulo": "Buzo Fila",
        "id": '7',
        "category": "Buzo",
        "marca": "Fila",
        "color": "Azul",
        "precio": 17000,
        "modelo": "Oversize",
        "talla": "L",
        "material": "Algodon",
        "stock": 6
    },
    {
        "img": "https://woker.vteximg.com.br/arquivos/ids/168397-1000-1000/4AV8410-072-000.jpg",
        "titulo": "Buzo Nike",
        "id": '8',
        "category": "Buzo",
        "marca": "Nike",
        "color": "Blanco",
        "precio": 18000,
        "modelo": "Canguro",
        "talla": "M",
        "material": "Algodon",
        "stock": 4
    },
    {
        "img": "https://sevensport.vteximg.com.br/arquivos/ids/232787-1000-1000/BUZOADIDASORIGINALSSOLIDPILLARHDEC7322HOMBRE.jpg?v=637006356424300000",
        "titulo": "Buzo adidas",
        "id": '9',
        "category": "Buzo",
        "marca": "Adidas",
        "color": "Negro",
        "precio": 16000,
        "modelo": "Oversized",
        "talla": "S",
        "material": "Tela",
        "stock": 14
    },
    {
        "img": "https://mlstaticquic-a.akamaihd.net/canguro-felpa-sin-cierre-capucha-verde-ingles-D_NQ_NP_647997-MLU40490228261_012020-F.jpg",
        "titulo": "Buzo Gucci",
        "id": '10',
        "category": "Buzo",
        "marca": "Gucci",
        "color": "Verde",
        "precio": 24000,
        "modelo": "Canguro",
        "talla": "XL",
        "material": "Algodon",
        "stock": 13
    },
    {
        "img": "https://essential.vteximg.com.br/arquivos/ids/437436-1000-1000/302-0086_3.jpg?v=637587712196900000",
        "titulo": "Buzo Nike",
        "id": '11',
        "category": "Buzo",
        "marca": "Nike",
        "color": "Azul",
        "precio": 13000,
        "modelo": "Deportivo",
        "talla": "S",
        "material": "tela",
        "stock": 11
    },
    {
        "img": "https://www.stylefile.es/dw/image/v2/BCZD_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdf3e2a5d/hi-res/P.KK15D00005001-z1.jpg?q=80",
        "titulo": "Buzo Lacoste",
        "id": '12',
        "category": "Buzo",
        "marca": "Lacoste",
        "color": "Rojo",
        "precio": 17000,
        "modelo": "Canguro",
        "talla": "XL",
        "material": "Algodon",
        "stock": 10
    },
    {
        "img": "https://tse1.mm.bing.net/th?id=OIP.qiK5ty9VCMA0Xmf1JODifAD6D6&pid=Api&P=0",
        "titulo": "Buzo Lacoste",
        "id": '13',
        "category": "Buzo",
        "marca": "Adidas",
        "color": "Blanco",
        "precio": 23000,
        "modelo": "Deportivo",
        "talla": "M",
        "material": "Tela",
        "stock": 8
    },
    {
        "img": "https://http2.mlstatic.com/D_NP_981225-MLA29114698976_012019-Q.jpg",
        "titulo": "Campera Zara",
        "id": '14',
        "category": "Campera",
        "marca": "Zara",
        "color": "Negro",
        "precio": 27000,
        "modelo": "Jean",
        "talla": "M",
        "material": "Jean",
        "stock": 9
    },
    {
        "img": "https://i.pinimg.com/originals/1d/a3/04/1da30476828bd60676f0c568c295e051.jpg",
        "titulo": "Campera Nike",
        "id": '15',
        "category": "Campera",
        "marca": "Nike",
        "color": "Blanco",
        "precio": 19000,
        "modelo": "Deportivo",
        "talla": "S",
        "material": "Tela",
        "stock": 5
    },
    {
        "img": "https://maspormenos.net/45152-thickbox/pepe-jeans-pantalon-vaquero-spike-denim-medium-blue-used-azul-medio-hombre.jpg",
        "titulo": "Pantalon Zara",
        "id": '16',
        "category": "Pantalon",
        "marca": "Zara",
        "color": "Azul",
        "precio": 22000,
        "modelo": "Jean",
        "talla": "S",
        "material": "Jean",
        "stock": 6
    },
    {
        "img": "https://tse4.mm.bing.net/th?id=OIP.-fJHXglGWgnteWphHxKbsQHaIW&pid=Api&P=0",
        "titulo": "Pantalon Nike",
        "id": '17',
        "category": "Pantalon",
        "marca": "Nike",
        "color": "negro",
        "precio": 12000,
        "modelo": "Deportivo",
        "talla": "L",
        "material": "tela",
        "stock": 12
    },
    {
        "img": "https://www.fivesneakershop.com/uploads/photo/image/3520/gallery_A02486_3.JPG",
        "titulo": "Pantalon Adidas",
        "id": '18',
        "category": "Pantalon",
        "marca": "Adidas",
        "color": "Gris",
        "precio": 13000,
        "modelo": "Deportivo",
        "talla": "M",
        "material": "algodon",
        "stock": 7
    },
    {
        "img": "https://tse1.mm.bing.net/th?id=OIP.BFBxuObWlfogOKnQHAHWIgHaHa&pid=Api&P=0",
        "titulo": "Pantalon Gucci",
        "id": '19',
        "category": "Pantalon",
        "marca": "Gucci",
        "color": "Negro",
        "precio": 26000,
        "modelo": "Oversize",
        "talla": "M",
        "material": "Tela",
        "stock": 4
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 5000)
    })
}
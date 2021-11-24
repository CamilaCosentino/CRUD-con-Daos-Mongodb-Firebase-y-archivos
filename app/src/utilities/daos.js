const  CarritoDaosArchivos = require("../container/ContenedorArchivos")
const ProductosDaosArchivos = require("../container/ContenedorArchivos")

const  CarritoDaosFire =  require("../container/ContenedorFire")
const ProductosDaosFire =  require("../container/ContenedorFire")

const  CarritoDaosMongodb =  require("../container/ContenedorMongoDB")
const  ProductosDaosMongodb= require("../container/ContenedorMongodb")
const productos =  require("../models/Pmongo")
const carrito = require("../models/Cmongo")
let ProductoDaos
let CarritoDaos


const switchDao = () =>{
    switch ("mongodb") {
        case 'json': 
            ProductoDaos = new ProductosDaosArchivos("products.txt")
            CarritoDaos = new CarritoDaosArchivos("carrito.txt")
            
            break;
            case 'firebase':
            ProductoDaos = new ProductosDaosFire("productos")
            CarritoDaos = new CarritoDaosFire("carrito")
            
            break;
            case 'mongodb':
            ProductoDaos = new ProductosDaosMongodb(productos)
            CarritoDaos = new CarritoDaosMongodb(carrito)
            break;
            
    
      
      
    }
    
}
switchDao()
module.exports = {ProductoDaos,CarritoDaos}


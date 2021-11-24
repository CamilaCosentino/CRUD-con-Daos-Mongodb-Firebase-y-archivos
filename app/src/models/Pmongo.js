const {Schema,model} = require("mongoose");



const ProductoSchema = new Schema({

    timestamp: {
        type:Date,
        default: Date.now(),
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    codigo: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true

    },
    stock: {
        type: Number,
        required: true
    }
})
const productos = model("productos",ProductoSchema)
module.exports = productos
const {Schema,model} = require("mongoose");



const CarritoSchema = new Schema({
    timestamp:{
        type:Date,
        default: Date.now(),
        required: true
    },
    producto_id:{
        type:Schema.ObjectId,
        ref: "productos"
    }
  
})
const carrito = model("carrito",CarritoSchema)
module.exports = carrito
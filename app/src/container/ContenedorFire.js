const {admin , db} = require("../config/firebase")


class ContenedorFire_Producto{
    constructor(modelo){
     this.coleccion = db.collection(modelo)
    }
    async listByid(id){
        try{
const doc = await this.coleccion.doc(id).get()
if(!doc.exists){
throw new Error("Error al listar por id: no se encontró")
}else{
    const data = doc.data()
    return {...data,id}
}
        }catch(err){
            throw new Error(`Error al listar por id: ${err}`)
        }
    }
    async listAll(){
try{


    const productos = (await this.coleccion.get()).docs

const response = productos.map(doc =>{
    return{
        id:doc.id,
        timeslamp: doc.data().timeslamp,
        nombre: doc.data().nombre,
        descripcion: doc.data().descripcion,
        codigo: doc.data().codigo,
        img: doc.data().img,
        precio: doc.data().precio,
        stock: doc.data().stock
    }
})
return response

}catch(error){
throw new Error(`Error al listar todo: ${error}`)
}
    }
async save(nuevoE){
try{

    let doc =  await this.coleccion.add(nuevoE)
    
    return {fecha:nuevoE,id: doc.id}


}catch(err){
    throw new Error(`Error al guardar un registro: ${err}`)
}
}
async update(id,updaP){
try{
    const actualizado = await this.coleccion.doc(id).set(updaP)
    return actualizado;
    
}catch(error){
    throw new Error(`Error al actualizar un registro: ${error}`)
}
}
async deletebyId(id){
    try{
const doc =  this.coleccion.doc(`${id}`)
const borrar = await doc.delete()
console.log(borrar)
return borrar
    }catch(error){
        throw new Error(`Error al borrar por id: ${error}`)
    }
}
async deleteAll(){
    try{
const all = await this.coleccion.doc()

const borrartodo = this.coleccion.delete(all)

return borrartodo

}catch(error){
    throw new Error(`Error al borrar por id: ${error}`)
}
}
}

module.exports = ContenedorFire_Producto

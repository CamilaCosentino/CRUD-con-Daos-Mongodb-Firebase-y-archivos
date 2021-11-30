const mongoose = require("mongoose")
//const db = require("../config/mongo")
const config =  require("../config/index")


const db = mongoose.connect("mongodb+srv://cami:cami0503@cluster0.17xc4.mongodb.net/SegundaE?retryWrites=true&w=majority")






class ContenedorMongoDB {
    constructor(modelo) {
        this.modelo = modelo
    }
    async listByid(id) {

        try {
            const produc = await this.modelo.findOne({"_id":id},{"__v": 0}) 
            return produc
            
            
        } catch (error) {
            throw new Error(`Error al traer todos los datos ${error}`)
        }


    }
    async listAll() {
        try {
            const all = await this.modelo.find();
         
            return all
        } catch (err) {
            throw new Error(`Se ha detectado un error al traer todos los registros de la base ${err}`)
        }
    }
    async save(nE) {
       
        try {
            let nuevo = await this.modelo.create(nE)
           
            return nuevo
        } catch (error) {
            throw new Error(`Se ha detectado un error al guardar un nuevo registro en la base ${error}`)
        }


    }
    async update(id,data) {

        try {
            const ids = await this.modelo.findOneAndUpdate({
                "id": id
                
            },data)
            return this.listByid(id)
          
            

        } catch (error) {
            throw new Error(`Se ha detectado un error al actualizar el registro en la base ${error}`)



        }

    }
    async deletebyId(id) {
        
        try {
            const deleteR = this.modelo.deleteOne({
                "_id": id
            })
            return deleteR
        } catch (error) {
            throw new Error(`Se ha detectado un error al borrar  el registro con ese id en la base ${error}`)

        }
    }
    async deleteAll() {
        try {
            const deleteAll = await this.modelo.deleteMany({})
        } catch (error) {
            throw new Error(`Se ha detectado un error al borrar  el registro de la base ${error}`)

        }
    }

}

module.exports = ContenedorMongoDB
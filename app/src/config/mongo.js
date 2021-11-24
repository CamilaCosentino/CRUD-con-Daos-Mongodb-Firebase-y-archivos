const config = require("./index.js")
const mongoose = require("mongoose")




 const db = mongoose.connect(config.mongoDB.cnx)


db.connection.on("open", () => {
    console.log("Base datos conectado ")
})

db.connection.on("error", () => {
   console.log("Base de datos no se pudo conectar")})


module.exports = db



const express = require("express");
const moment = require("moment");
const productos = require("../models/Pmongo");
const {Router} = express
const fs =  require("fs")

const {ProductoDaos,CarritoDaos} = require("../utilities/daos")

const router = new Router();
//RUTAS DE PRODUCTOS ARCHIVOS
router.get("/archivos",async(req,res)=>{
   
const traeraProductos = await ProductoDaos.listAlla()
res.send({mensaje:"Los productos se mostraron exitosamente",traeraProductos})
console.log(traeraProductos)

})
router.get("/archivos/:id",async(req,res)=>{
const idP = req.params.id
const traerporid = await ProductoDaos.listByida(idP)
res.send({mensaje:"Se encontro el producto exitosamente",traerporid})
console.log(traerporid)

})
router.post("/archivos",async(req,res)=>{

    const { nombre,descripcion,codigo,imagen,precio,stock} = req.body
    const newobj = {
    
        nombre,
        descripcion,
        codigo,
        imagen,
        precio,
        stock

    }

   const agregar = await ProductoDaos.savea(newobj)
   
    res.send({mensaje:"Se guardo el producto exitosamente",agregar})
console.log(agregar)
})

router.delete("/archivos",async(req,res)=>{
   
const borrartodo = await ProductoDaos.deleteAlla()
console.log(borrartodo)
const all  = await ProductoDaos.listAlla()
res.send({mensaje: "se ha vaciado el contenedor de los registros",data:all})
})
router.delete("/archivos/:id" ,async(req,res ) =>{
    const idP = req.params.id 
    const all  = await ProductoDaos.listAlla()
    const borrarporID = await ProductoDaos.deletebyIda(idP)
    console.log(all)
    res.send({mensaje: "se ha vaciado el contenedor de los registros",data:all})
} )
router.put("/archivos/:id", async(req,res) =>{
    const all = await ProductoDaos.listAlla()
    const update = all.filter((x) =>{
        return x.id == req.params.id
        
        })
        res.send({mensaje: "se ha actualizaron el contenedor de los registros",data:update})

})
//RUTA DE PRODUCTOS DB
router.get("/data", async(req,res) =>{
    const all = await ProductoDaos.listAll()
    res.send({mensaje:"Los productos se mostraron exitosamente",all})

})
router.get("/data/:id", async(req,res) =>{
    const idp = req.params.id
    const all = await ProductoDaos.listByid(idp)
    res.send({mensaje:"Los productos se mostraron x el id exitosamente",all})
})
router.post("/data", async(req,res)=>{
    const agregar = await ProductoDaos.save(req.body)
    res.send({mensaje:"Los productos se guardaron exitosamente",agregar})
})
router.patch("/data/:id",async(req,res) =>{
    
    const update = await ProductoDaos.update(req.params.id,req.body)
    res.send({mensaje:"Los productos se actualizaron exitosamente",update})
})
router.delete("/data", async(req,res) =>{
    const borrar = await ProductoDaos.deleteAll()
     
   
    res.send({mensaje: "se ha vaciado el contenedor de los registros", data:borrar})
})
router.delete("/data/:id", async(req,res) =>{
    

     await ProductoDaos.deletebyId(req.params.id)
     
    res.send({mensaje: "se ha vaciado el contenedor de los registros"})
})

//RUTAS DE CARRITOS ARCHIVOS
router.get("/cart/archivos",async(req,res)=>{
const traerCarrito = await CarritoDaos.listAlla()
res.send({mensaje:"El carrito  se mostraron exitosamente",traerCarrito})

})
router.get("/cart/archivos/:id",async(req,res) =>{
    
    const traerId = await CarritoDaos.listByida(req.params.id)
    
    res.send({mensaje:"El carrito x id se mostraron exitosamente",traerId})
})
router.post("/cart/archivos/",async(req,res) =>{

    const agregar = await CarritoDaos.savea()
    const id = agregar.id
    res.send({mensaje:"el carrito se guardaron exitosamente",id})
    
})
/*router.post("/cart/archivos/:id/productos/:id_prod",async(req,res) =>{
const id =  req.params.id
const idp =  req.params.id_prod


    const agregar =  await CarritoDaos.saveInto()
console.log(agregar)

  res.send({mensaje:"el carrito se guardaron exitosamente",agregar})
}) */
router.delete("/cart/archivos/delete/:id",async(req,res) =>{
    
    await CarritoDaos.deletebyIda(req.params.id)
    res.send({mensaje:"se ha vaciado y eliminado el carrito seleccionado"})
})
router.delete("/cart/archivos/delete",async(req,res) =>{
    await CarritoDaos.deleteAlla()
    res.send({mensaje:"se ha vaciado y eliminado todos los carritos"})
})
//RUTA DE CARRITO DB
router.get("/cart/data",async(req,res)=>{
    const traerCarrito = await CarritoDaos.listAll()
    res.send({mensaje:"El carrito se mostraron exitosamente",traerCarrito})
    
    })
router.get("/cart/data/:id", async(req,res) =>{
    const traerid = await CarritoDaos.listByid(req.params.id)
    res.send({mensaje:"Se trajo el carrito deseado con exito",traerid})
})
router.post("/cart/data",async(req,res) =>{
    const carrito  =  {
        fecha: Date.now()
    }
  
    const agregar = await CarritoDaos.save(carrito)
 console.log(agregar)
  res.send({mensaje:"El carrito se guardo exitosamente"})
})
router.delete("/cart/data/delete/:id",async(req,res) =>{
    const borrarporID = await CarritoDaos.deletebyId(req.params.id)
    res.send({mensaje:"se elimino correctamente el carrito elegido"})
})
router.delete("/cart/data/delete/",async(req,res) =>{
    const borrarporID = await CarritoDaos.deleteAll()
    res.send({mensaje:"se elimino correctamente el carrito elegido"})
})
/*router.post("/cart/data/:id/productos/:id_prod",async(req,res) =>{
    const p = req.params.id_prod
    const produiID = await ProductoDaos.listByid(p)
  const  c = req.params.id
    const traerid = await CarritoDaos.listByid(c)
    
const agregar = traerid.productos

console.log(traerid)


  res.send({mensaje:"el carrito se guardaron exitosamente",agregar})
})*/

module.exports = router
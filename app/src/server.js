const express  = require("express")
const app = express()
const router = require("./router/main")

app.set("port", process.env.PORT || 8080)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",router)

app.listen(`${app.get("port")}`, () =>{
    console.log(`Server on port ${app.get("port")}`)
})
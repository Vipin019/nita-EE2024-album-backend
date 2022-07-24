const express =require("express")
const mongoose= require("mongoose")
const dotenv=require("dotenv")
const routsurl=require("./routes/routes")
const cors=require("cors")

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("databse connected successfully"))

const app=express()

app.use(express.json())
app.use(cors())
app.use('/app', routsurl)
app.listen(4000,()=>{
    console.log("server is up ans running")
});
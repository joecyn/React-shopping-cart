const express=require("express");
const app=express();
const cors=require("cors")
const products = require("./Routes/productsRoutes");
const checkout  = require("./Routes/checkout/checkOutRoute");
const dotenv=require("dotenv");




//Middlewares
dotenv.config()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

  
app.use(cors())


app.use("/api",products)
app.use("/stripe",checkout)


 

//Port initialization
const Port= process.env.PORT || 5000;

app.listen(Port,()=>{
    console.log(`Server running on port ${Port}`);
})
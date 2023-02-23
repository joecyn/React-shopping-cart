const express=require("express");
const router=express.Router();
const axios =require("axios");



//Home route
router.get("/Home",async(req,res)=>{
    try{
    const response= await axios.get("https://fakestoreapi.com/products")
    const products =  response.data
    //console.log(products)
    //res.send(products)
    res.status(200).json(products)
    }catch(error){
        res.status(500).json(error)
    }   
})



//Get Product Details 
router.get("/product/:id",async(req,res)=>{
    let id =req.params.id

    try {
        const response= await axios.get(`https://fakestoreapi.com/products/${id}`)
        const product =  response.data;
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
    
})
router.get("/Admin",(req,res)=>{
    res.render("pages/Admin")
})

module.exports=router
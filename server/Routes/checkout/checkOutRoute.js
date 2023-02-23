// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_KEY);
const express = require('express');
const router= express.Router();




router.post('/create-checkout-session', async (req, res) => {
const data=req.body
//console.log(data)
let items=data.map((prod)=>{
  //console.log(prod.title)
  return { 
    
    price_data:{
      currency:"usd",
    
      product_data:{
        name:prod.title
     
      }
      ,
      unit_amount:prod.price
      
    },
    quantity:prod.quantity,
    
  }
  

})
//console.log(items)

  try {
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      
      line_items: 
       items
      ,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/Success`,
      cancel_url: `${process.env.CLIENT_URL}/Cart`,
    });
  
    res.status(200).json({"url":session.url});

  } catch (error) {
    res.status(400).json(error)
  }
  
});

module.exports=router;
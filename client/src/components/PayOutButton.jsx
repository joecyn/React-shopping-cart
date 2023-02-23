import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from "axios"
import "./PayOutButton.css"
//import { loadStripe } from "@stripe/stripe-js"; 

 const PayOutButton=({items})=> {
  const Payment=async()=>{
   
      
  
   console.log(items)

    try {
      // const data=[{price:2000,
      //   title:"myPhone",
      //   quantity:1}]
        
      
      const response= await axios.post("http://api.localhost:5000/stripe/create-checkout-session",items)
      if(response.data.url){
        window.location.href=`${response.data.url}`
      }
    } catch (error) {
      console.log(error.message)
    }
    
   
  }
  return (
    <Button className='checkout' onClick={()=>Payment()}>CHECK OUT</Button>
  )
}
export default PayOutButton
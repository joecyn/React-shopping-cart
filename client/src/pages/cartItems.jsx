import { useContext } from "react";

import { Cartcontext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom'
import "./cartItems.css";
import Table from 'react-bootstrap/Table';
import PayOutButton from "../components/PayOutButton";
import Container from "react-bootstrap/esm/Container";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  return (
    <>
    {state.length > 0 ? (
        <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
          {state.map((product,index)=>(
            <tr key={index}>
                <td>
                    <img src={product.image} alt="" srcset="" />
                    
                </td>
                <td>
                $ <b> { product.price}</b>
                </td>
                <td>
                <Button variant="primary" className= "Add" onClick={() => dispatch({ type: "INCREASE", payload: product })} >+</Button>{' '}
                  {product.quantity}
                  <Button className="Sub"
                    onClick={() => {
                      if (product.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: product });
                      } else {
                        dispatch({ type: "REMOVE", payload: product });
                      }
                    }}>
                    -
                  </Button>
                  <Button variant="danger " className="btn" onClick={() => dispatch({ type: "REMOVE", payload: product })} >REMOVE</Button>{' '}
                </td>
                <td>
                $ <b>{product.quantity * product.price}</b>
                </td>
            </tr>
          ))}
            
          </tbody>
         
        </Table>
        <div className="subtotal">
             <div className="total">
                <p><b>Subtotal</b></p>
                <p><b>$ {total}</b></p>
             </div>
             
             <PayOutButton items={state}/>
             
             
             </div>
            
    
       </Container>
    ):(
      <div className="cart">
          <i class="fa fa-shopping-cart fa-5x" aria-hidden="true"></i>
          <p>Your cart is empty!</p>
          <Link to="/"  >
          <Button variant="primary"  >START SHOPPING</Button>{' '}
          </Link>
        </div>
    )}
    
  </>
        
     
    
      
        
       
      
  
  );
  
};

export default Cart;
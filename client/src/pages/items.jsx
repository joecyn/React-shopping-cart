import { useContext } from "react";

import { Cartcontext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom'
import "./cartItems.css";
import PayOutButton from "../components/PayOutButton";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  return (
    <div className="card">
      {state.map((product, index) => {
        return (
          <div className="carditem" key={index}>
            <div>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            </div>
            <div>
              <h4>PRICE</h4>
            <p>{product.quantity * product.price}</p>
            </div>
            
              <div className="quantity">
              <div className="button">
              <Button variant="primary" className= "Add" onClick={() => dispatch({ type: "INCREASE", payload: product })} >+</Button>{' '}
              <p>{product.quantity}</p>
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
              </div>
              <div>
              <Button variant="danger" onClick={() => dispatch({ type: "REMOVE", payload: product })} >REMOVE</Button>{' '}
              </div>
            
          
            </div>
            
          </div>
        );
        
      })}
      {state.length > 0 ?(
        <></>
      ):(
        <div className="cart">
          <i class="fa fa-shopping-cart fa-5x" aria-hidden="true"></i>
          <p>Your cart is empty!</p>
          <Link to="/"  >
          <Button variant="primary"  >START SHOPPING</Button>{' '}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
import React ,{useContext}from 'react'
import { Link  } from 'react-router-dom'
import './NavBar.css';
import { Cartcontext } from '../context/cartContext';
export default function NavBar() {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  return (
    <div className='Nav ' variant="primary">
      <ul>
        <div className='link'>
        <li><Link to="/">LOGO</Link></li>
        </div>
        <div className='Nav-items'>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/Cart">CART {state.length} </Link></li>
          
        </div>
      </ul>
    </div>
  )
}

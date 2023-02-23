//import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
//import NavBar from './components/NavBar';
import Bar from "./components/Nav"
import {
  BrowserRouter ,
  Route,
  Routes
  } from "react-router-dom"
import CartItems from './pages/cartItems';
import Success from './pages/Success';



  
function App() {
 
  
  return (
    <div className='App'>
      
      
      <BrowserRouter>
      <Bar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Cart" element={<CartItems />}/>
        <Route path="/Success" element={<Success />}/> 
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;

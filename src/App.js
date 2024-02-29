import React, { useState } from 'react';
import Header from './Components/Front/Header/Header';
import Data from './Components/Back/Data/Data';
import {BrowserRouter as Router} from 'react-router-dom'
import Routess from './Components/Front/Routes/Routess';
// import './App.css';

function App() {
  const {productitems} = Data
  const [cartitems,setcartitems] = useState([]);

  const handleAddproduct = (product) =>{
   const productExist = cartitems.find((item) => item.id === product.id);
   if(productExist){
    setcartitems(cartitems.map((item) => item.id === product.id ?
    {...productExist,quantity: productExist.quantity +1} : item )
    )
  }
  else{
    setcartitems([...cartitems,{...product,quantity : 1}])
  }
  }

  const handleRemoveproduct = (product) =>{
    const productExist = cartitems.find((item) => item.id === product.id);
   
    if(productExist.quantity === 1){
      setcartitems(cartitems.filter((item) => item.id !== product.id))
    }
    else{
      setcartitems(cartitems.map((item) => item.id === product.id ?
      {...productExist, quantity: productExist.quantity - 1} : item))
    }
  }

  const handlecartclearance = () =>{
    setcartitems([]);
  }

  return (
    <div>
      <Router>
      <Header cartitems={cartitems} />
      <Routess  productitems={productitems} cartitems={cartitems} handleAddproduct={handleAddproduct}
       handleRemoveproduct={handleRemoveproduct} handlecartclearance={handlecartclearance} />
      </Router>
      
    </div>
  );
}

export default App;

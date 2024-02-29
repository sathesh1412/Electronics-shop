import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
// import Signup from '../Signup/Signup'

export const Routess = ({productitems,cartitems,handleAddproduct,handleRemoveproduct,handlecartclearance}) => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Products  productitems={productitems} handleAddproduct={handleAddproduct}/>}></Route>
        <Route path='/cart' element={<Cart  cartitems={cartitems} handleAddproduct={handleAddproduct} handleRemoveproduct={handleRemoveproduct} handlecartclearance={handlecartclearance} />}></Route>
        {/* <Route path='/signup' element={<Signup />}></Route> */}
        </Routes> 
    </div>
  )
}

export default Routess
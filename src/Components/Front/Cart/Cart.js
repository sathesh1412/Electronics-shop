import React from 'react'
import './Cart.css'
import image from './Images/empty cart.png';
import image1 from './Images/cart emoji.jpg';

const Cart = ({cartitems,handleAddproduct,handleRemoveproduct,handlecartclearance}) => {

  const Totalprice = cartitems.reduce((price,item) => price + item.quantity * item.price , 0);
  return (
    <div className='cart-items'>
        <h2 className='cart-items-header'>Cart Items </h2>
        <div className='clear-cart'>
          {cartitems.length >=1 && (
            <button className='clear-cart-button' onClick={handlecartclearance}>Clear Cart</button>
          )}
        </div>
        {cartitems.length === 0 && (
        <div className='cart-items-empty'><div> No cart items added </div>
        <img src={image} alt='cartimage'></img>
        <img src={image1} alt='cartimage1'></img>
        </div>)}
        <div>
           {cartitems.map((item) =>(
            <div className='cart-items-list' key={item.id}>
                <img className='cart-items-image' src={item.image} alt={item.name} />
                <div className='cart-items-name'>{item.name}</div>
                <div className='cart-items-function'>
                  <button className='cart-items-add' onClick={() => handleAddproduct(item)}>+</button>
                  <button className='cart-items-remove' onClick={() => handleRemoveproduct(item)}>-</button>
                  </div>
                  <div className='cart-items-price'>
                    {item.quantity} * RS.{item.price}
                  </div>    
            </div>
           ))}
            <div className='cart-items-total-price-name'>Total Price
            <div className='cart-items-total-price'>RS.{Totalprice}</div>
            </div>
                  
        </div>
    </div>
  )
}

export default Cart
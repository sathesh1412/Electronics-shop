import React from 'react'
import './Products.css'

const Products = ({productitems,handleAddproduct}) => {
  return (
    <div className='products'>
        {productitems.map((productitems) => (
            <div className='card'>
                <div>
                    <img className='product-image' src={productitems.image} alt={productitems.name}></img>
                </div>
                <div>
                    <h3 className='product-name'>{productitems.name}</h3>
                </div>
                <div className='product-price'>RS.{productitems.price}</div>
                <div>
                  <button className='product-add-button' onClick={() => handleAddproduct(productitems)}>Add to Cart</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products
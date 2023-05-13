import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../../../product/Products';
const Shop = () => {
  const [products,setProducts] = useState ([]);
  useEffect (() =>{
    fetch('products.json')
    .then(res=> res.json())
    .then(data=> setProducts(data))
    .then(data => console.log(data)) ;
  },
  []

  )

  return (
    <div className='shop_container'> 
      <div className="products-container">
      {
        products.map(product => <Products key={product.id}></Products>)
      }
      </div>
      <div className="cart_container">
         <h2>Order Summary</h2>
      </div>
    </div>
  );
};

export default Shop;
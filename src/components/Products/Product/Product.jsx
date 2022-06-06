import React, { useEffect, useState } from "react";

const Product = (prop) => {
  // Note: this id should come from api
  
  const [count,setCount] = useState(0)

  

  const product = { id: 1 };
  return (
   
    <div data-cy={`product-${product.id}`} key={prop.id} style={{display:"grid",gridTemplateColumns:"repeat(200px,400px)" ,justifyContent:"space-around"}}>
      <h3 data-cy="product-name">{prop.name}</h3>
      <h6 data-cy="product-description">{prop.description}</h6>
      <button data-cy="product-add-item-to-cart-button">{count?"add to count":"remove to cart"}</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
         {count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={setCount(count+1)}>+</button>
        <button data-cy="product-remove-cart-item-button" onClick={setCount(count-1)}>-</button>
      </div>
      
    </div>
  )
};

export default Product;

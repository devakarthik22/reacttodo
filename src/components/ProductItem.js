import React, { useState } from 'react';

import Card from './Card';
import './ProductItem.css';

const ProductItem = ({id,title,amount,date}) => {

  const [newtitle, setTitle] =  useState(title);


  function clickHandler() {
    //title = "Popcorn";
    setTitle("Popcorn");
    console.log("button clicked");
  }
  

  return (
    <Card className='product-item'>
      <div>{date}</div>
      <div className='product-item__description'>
        <h2>{newtitle}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;
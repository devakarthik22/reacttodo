import React from 'react';

import ProductItem from './ProductItem';
import Card from './Card';

import './Products.css';

const Products = (props) => {
  return (
    <Card className="products">
      {
        props.items.map((item)=>{
          console.log(item);
          return <ProductItem 
          {...item}></ProductItem>
        })
      }
      
    </Card>
  );
}

export default Products;
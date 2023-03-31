import React,{useEffect, useState} from 'react';
import NewProduct from './components/NewProduct';

import Products from './components/Products';
import datas from "./data"

const App = () => {
  let data=datas;
  
  const [prods,setPros]=useState(data);

  function printProductData(item) {
    data.push(item);
    console.log("i am inside APP.js");
    setPros(data);
    console.log(data);

  }
  
  
 
 
  
  


  return (
    <div>
      <NewProduct pranay = {printProductData} />
      <Products items={prods} />
    </div>
  )
}

export default App;
import React from "react";
import SingleProduct from './SingleProduct.js'

const ProductsSection = props => {
  console.log(`Komponent ProductSection ma:`, props);
  return (
    <div>
      <h2>{props.names[props.index]}</h2>
      {props.productList.map(current => ( <SingleProduct product={current} key={current.id} handleAddToShoppingList={props.handleAddToShoppingList}/>))}
    </div>
  )
   
};

export default ProductsSection;

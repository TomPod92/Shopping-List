import React from "react";

import ProductsSection from "./ProductsSection.js";

const Shop = props => {
  const names = [];
  const productsArray = [];

  for (let key in props.products) {
    names.push(key);
    productsArray.push(props.products[key]);
  }
console.log(`Komponent Shop ma:`, props);
  return (
    <div>
      {productsArray.map( (current,index)=> (
        <ProductsSection key={names[index]} productList={current} index={index} names={names} handleAddToShoppingList={props.handleAddToShoppingList}/>
      ))}
      
    </div>
  );
};

export default Shop;

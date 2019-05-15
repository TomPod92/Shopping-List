import React from "react";

const SingleProduct = props => {
    console.log(`Komponent SingleProduct ma:`, props);
  return (
    <div>
      <p onClick={props.handleAddToShoppingList}>{props.product.name} o ID { props.product.id}</p>
      
    </div>
  )
   
};

export default SingleProduct;

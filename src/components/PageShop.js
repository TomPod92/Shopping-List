import React from "react";
import Section from './Section.js'

const PageShop = props => {
  return (
      <div>
          {
              props.typeIDsArray.map( (currentID,index) => 
              <Section 
                key={index} 
                type={currentID} 
                productList={props.products.filter(currentProduct => currentProduct.type === currentID)}
                handleAddToShoppingList={props.handleAddToShoppingList}
                />)
          }
        

      </div>
  )
};

export default PageShop;

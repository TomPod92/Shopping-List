import React from "react";
import Section from "./Section.js";

const PageShoppingList = props => {
  return (
    <div>
      {props.typeIDsArray.map((currentID, index) => (
        <Section
          key={index}
          type={currentID}
          productList={props.products.filter(
            currentProduct => currentProduct.type === currentID
          )}
          handleClickOnProduct={props.handleClickOnProduct}
          handleRemoveFromShoppingList={props.handleRemoveFromShoppingList}
          flag={"bought"}
          inShoppingList={true}
        />
      ))}

      <button onClick={props.handleDeleteShoppingList}>
        Usuń listę zakupów
      </button>
    </div>
  );
};

export default PageShoppingList;

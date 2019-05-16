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
          flag={"bought"}
          inShoppingList={true}
        />
      ))}

      <button onClick={props.handleDeleteFromShoppingList}>
        Usuń listę zakupów
      </button>
    </div>
  );
};

export default PageShoppingList;

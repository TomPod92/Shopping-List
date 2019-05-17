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

      {/* display "delete button" only if there are any product in shopping list */}
      {props.products.length ? (
        <button
          className="deleteButton"
          onClick={props.handleDeleteShoppingList}
        >
          Usuń listę zakupów
        </button>
      ) : null}
    </div>
  );
};

export default PageShoppingList;

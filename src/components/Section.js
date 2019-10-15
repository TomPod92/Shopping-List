import React from "react";
import "../styles/section.scss";

// set class Names for single product depending on its state: toBuy, bought, where is it (in Shop or in Shopping List)
const determineStyles = (toBuy, bought, inShoppingList) => {
  if (!toBuy && !bought && !inShoppingList) return "default section--item";
  else if (toBuy && !bought && inShoppingList) return "default section--item";
  else if (toBuy && !bought && !inShoppingList) return "grey section--item";
  else if (toBuy && bought && inShoppingList) return "grey section--item";
  else if (toBuy && bought && !inShoppingList) return "grey section--item";
};
//----------------------------------

const Section = props => {
  const list = props.productList.map(currentProduct => {
    return (
      <li
        className={determineStyles(currentProduct.toBuy,currentProduct.bought,props.inShoppingList
        )}
        key={currentProduct.id}
        productid={currentProduct.id}
        onClick={event =>
          props.handleClickOnProduct(currentProduct.id, props.flag, currentProduct.firebaseKey, event)
        }
      >
        <span className="section--item__text">{currentProduct.name}</span>

        {/* create button to remove */}
        {/* if it is in the shopping list page send it "handleRemoveFromShoppingList" function */}
        {/* if it is in products page send it "handleRemoveFromShop" function */}
        {props.inShoppingList ? (
          <button
            className="section--item__button"
            onClick={() =>
              props.handleRemoveFromShoppingList(currentProduct.id, currentProduct.firebaseKey)
            }
          >
            Usuń
          </button>
        ) : (
          <button
            className="section--item__button"
            onClick={() => props.handleRemoveFromShop(currentProduct.id, currentProduct.firebaseKey)}
          >
            Usuń
          </button>
        )}
      </li>
    );
  });

  // if that section doesnt have any products inside do not render it
  if (props.productList.length) {
    return (
      <div className="section">
        <h2 className="section--header">{props.type}</h2>
        {/* className moze miec pare slow oddzielonych spacja */}
        <ul className="section--list">{list}</ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Section;

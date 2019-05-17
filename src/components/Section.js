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
        className={determineStyles(
          currentProduct.toBuy,
          currentProduct.bought,
          props.inShoppingList
        )}
        key={currentProduct.id}
        productid={currentProduct.id}
        onClick={(event) =>
          props.handleClickOnProduct(currentProduct.id, props.flag, event)
        }
      >
        <span className="section--item__text">{currentProduct.name}</span>

        {props.inShoppingList && <button className="section--item__button" onClick={()=> props.handleRemoveFromShoppingList(currentProduct.id)}>Usuń</button> }
      </li>
    );
  });

  // if that section doesnt have any products inside do not render it
  if (props.productList.length) {
    console.log(props.productList)
    return (
      <div className="section">
        <h2 className={props.type + " section--header"}>{props.type}</h2> 
        {/* className moze miec pare slow oddzielonych spacja */}
        <ul className="section--list">{list}</ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Section;

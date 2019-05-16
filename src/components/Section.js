import React from "react";
import "../styles/section.scss";

// set class Names for single product depending on its state: toBuy, bought, where is it (in Shop or in Shopping List)
const determineStyles = (toBuy, bought, inShoppingList) => {
  if (!toBuy && !bought && !inShoppingList) return "default";
  else if (toBuy && !bought && inShoppingList) return "default";
  else if (toBuy && !bought && !inShoppingList) return "grey";
  else if (toBuy && bought && inShoppingList) return "grey";
  else if (toBuy && bought && !inShoppingList) return "grey";
};
//----------------------------------

const Section = props => {
  // const list = props.productList.map(currentProduct => (
  //   <li
  //     className={ currentProduct.toBuy ? "toBuy product" : "product"}
  //     key={currentProduct.id}
  //     productid={currentProduct.id}
  //     onClick={ () => props.handleClickOnProduct(currentProduct.id, props.flag)}
  //   >
  //     {currentProduct.name}
  //   </li>
  // ));

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
        onClick={() =>
          props.handleClickOnProduct(currentProduct.id, props.flag)
        }
      >
        {currentProduct.name}
      </li>
    );
  });

  // if that section doesnt have any products inside do not render it
  if (props.productList.length) {
    return (
      <div>
        <h2>{props.type}</h2>
        <ul>{list}</ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Section;

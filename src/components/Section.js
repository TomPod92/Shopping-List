import React from "react";
import "../styles/section.scss";

const Section = props => {
//   const list = props.productList.map(currentProduct => (

//     <li
//       className={currentProduct.toBuy ? "toBuy product" : "product"}
//       key={currentProduct.id}
//       productid={currentProduct.id}
//       onClick={ () => props.handleAddToShoppingList(currentProduct.id)}
//     >
//       {currentProduct.name} {`${currentProduct.toBuy}`}
//     </li>
//   ));
let list;

// check which list item is it
// if it is in shopping list add "mark as bought" function
if("handleMarkAsBought" in props) {
    list = props.productList.map(currentProduct => (

        <li
          className={currentProduct.toBuy ? "toBuy product" : "product"}
          key={currentProduct.id}
          productid={currentProduct.id}
          onClick={ () => props.handleMarkAsBought(currentProduct.id)}
        >
          {currentProduct.name} {`${currentProduct.toBuy}`}
        </li>
      ));
// if it is in all products list add "mark as item to buy" function
} else {
    list = props.productList.map(currentProduct => (

        <li
          className={currentProduct.toBuy ? "toBuy product" : "product"}
          key={currentProduct.id}
          productid={currentProduct.id}
          onClick={ () => props.handleAddToShoppingList(currentProduct.id)}
        >
          {currentProduct.name} {`${currentProduct.toBuy}`}
        </li>
      ));
}

// const list = props.productList.map( currentProduct => {
//     if("handleMarkAsBought" in currentProduct) {
//         return (
//             <li
//             className={currentProduct.toBuy ? "toBuy product" : "product"}
//             key={currentProduct.id}
//             productid={currentProduct.id}
//             onClick={ () => props.handleMarkAsBought(currentProduct.id)}
//             >
//                 {currentProduct.name} {`${currentProduct.toBuy}`}
//             </li>
//         )
//     } else {
//         return (
//             <li
//             className={currentProduct.toBuy ? "toBuy product" : "product"}
//             key={currentProduct.id}
//             productid={currentProduct.id}
//             onClick={ () => props.handleAddToShoppingList(currentProduct.id)}
//             >
//                 {currentProduct.name} {`${currentProduct.toBuy}`}
//             </li>
//         )
//     }
// })


    

 

  // if that section doesnt have any product inside do not render
  if(props.productList.length) {
    return (
        <div>
          <h2>{props.type}</h2>
          <ul>{list}</ul>
        </div>
      );
  } else {
      return null
  }

  
};

export default Section;

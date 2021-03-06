import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Navigation from "./Navigation.js";
import PageAddProduct from "./PageAddProduct.js";
import PageShop from "./PageShop.js";
import PageShoppingList from "./PageShoppingList.js";
import database from '../firebase/firebase.js';

class App extends React.Component {
  state = {
    products: [
      // {
      //   id: 0,
      //   name: "chleb",
      //   type: "pieczywo",
      //   typeID: 0,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 1,
      //   name: "papryka",
      //   type: "owoce i warzywa",
      //   typeID: 1,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 2,
      //   name: "jajka",
      //   type: "nabiał",
      //   typeID: 2,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 3,
      //   name: "szynka",
      //   type: "mięsa i sery",
      //   typeID: 3,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 4,
      //   name: "czosnek",
      //   type: "mrożonki i przyprawy",
      //   typeID: 4,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 5,
      //   name: "fasolka",
      //   type: "słoiki i puszki",
      //   typeID: 5,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 6,
      //   name: "herbata",
      //   type: "kawa i herbata",
      //   typeID: 6,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 7,
      //   name: "ryż",
      //   type: "makarony",
      //   typeID: 7,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 8,
      //   name: "czekolada",
      //   type: "słodycze",
      //   typeID: 8,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 9,
      //   name: "papier toaletowy",
      //   type: "środki czystości",
      //   typeID: 9,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 10,
      //   name: "woda",
      //   type: "napoje",
      //   typeID: 10,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 11,
      //   name: "piwo",
      //   type: "alkohole",
      //   typeID: 11,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 12,
      //   name: "zeszyt",
      //   type: "art.papiernicze",
      //   typeID: 12,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 13,
      //   name: "pasta",
      //   type: "kosmetyki",
      //   typeID: 13,
      //   toBuy: false,
      //   bought: false
      // },
      // {
      //   id: 14,
      //   name: "kapcie",
      //   type: "ubrania",
      //   typeID: 14,
      //   toBuy: false,
      //   bought: false
      // }
    ]
  };

  typeIDsArray = [
    "pieczywo",
    "owoce i warzywa",
    "nabiał",
    "mięsa i sery",
    "mrożonki i przyprawy",
    "słoiki i puszki",
    "kawa i herbata",
    "makarony",
    "słodycze",
    "środki czystości",
    "napoje",
    "alkohole",
    "art.papiernicze",
    "kosmetyki",
    "ubrania"
  ];

  handleAddProduct = item => {
    // check if it already exists
    const index = this.state.products.findIndex(
      current => current.name === item.name
    );

    // if it doesnt exits
    if (!(index + 1)) {
      // calculate its ID
      let newID;
      if(!this.state.products.length) newID = 0;
      else newID = this.state.products[this.state.products.length - 1].id + 1;
      

      // calculate its type ID
      const newTypeID = this.typeIDsArray.findIndex(
        current => current === item.type
      );

      // create product object
      const newProduct = {
        id: newID,
        name: item.name,
        type: item.type,
        typeID: newTypeID,
        toBuy: false,
        bought: false
      };

      // add it to the state
      this.setState(prevState => ({
        products: [...prevState.products, newProduct]
      }));

      // add it to firebase
      database.ref('products').push(newProduct);
    }
  };

  handleClickOnProduct = (id, flag, firebaseKey, event) => {
    // check if button in shopping list was clicked
    // it it was, do not do anything (run its own function)
    // when you click on that button both function will run otherwise
    if (event.target.nodeName === "BUTTON") return;

    // find id and index of clicked element
    const index = this.state.products.findIndex(current => current.id === id);

    // create a copy of state
    const newState = this.state.products;

    // change clicked element "toBuy" or "bought" (depending on flag = 'toBuy' or 'bought')
    if (flag === "toBuy") {
      database.ref(`products/${firebaseKey}`).update({
        toBuy: !newState[index].toBuy,
        bought: false
      })

      newState[index].toBuy = !newState[index].toBuy;
      newState[index].bought = false;
    } else if (flag === "bought") {
      database.ref(`products/${firebaseKey}`).update({
        bought: !newState[index].bought
      })

      newState[index].bought = !newState[index].bought;
      
    }

    // update the state with the new element
    this.setState({
      products: newState
    });
  };

  handleDeleteShoppingList = () => {
    // create a copy o state
    let newState = this.state.products;

    // change "toBuy" and "bought" properties for all products to false (it will delete them from shopping list)
    // update the firebase data as well
    newState.forEach(current => {
      current.toBuy = false;
      current.bought = false;

      database.ref(`products/${current.firebaseKey}`).update({
        toBuy: false,
       bought: false
      })
    });

    // update the state
    this.setState({
      products: newState
    });
  };

  handleRemoveFromShoppingList = (id, firebaseKey) => {
    // create a copy of the state
    const products = this.state.products;

    // find index of clicked product
    const index = products.findIndex(current => current.id === id);

    // set its "toBuy" and "bought" values to false (remove it from shopping list)
    products[index].toBuy = false;
    products[index].bought = false;

    // update the state
    this.setState({
      products
    });

    // update firebase
    database.ref(`products/${firebaseKey}`).update({
      toBuy: false,
      bought: false
    })
  };

  handleRemoveFromShop = (id, firebaseKey) => {
    // create a copy of the state
    const products = this.state.products;

    // find index of clicked product
    const index = products.findIndex(current => current.id === id);

    // delete it from products list
    products.splice(index, 1);

    // update the state
    this.setState({
      products
    });

    // remove it from firebase
    database.ref(`products/${firebaseKey}`).remove();
  };

  componentDidMount = () => {
    // when app is redered for the first time
    // get everything from the database
    database.ref('products').on('value', (snapshot) => {
      const products = [];

      // add everything to the array
      snapshot.forEach( current => {
        products.push({
          firebaseKey: current.key,
          ...current.val()
        })
      })

      // check if that array is empty
      if(products.length === 0) return;

      // if it is not, add it to the state
      this.setState({products})
    })
  };

  render() {
    const toBuyProducts = this.state.products.filter(
      current => current.toBuy === true
    ).length;
    return (
      <HashRouter>
        <Navigation numberOfProducts={toBuyProducts} />

        <section>
          <Switch>
            <Route
              path={["/", "/Shopping-List/"]}
              exact
              render={() => (
                <PageAddProduct handleAddProduct={this.handleAddProduct} />
              )}
            />
            <Route
              path="/pageShop"
              render={() => (
                <PageShop
                  products={this.state.products}
                  typeIDsArray={this.typeIDsArray}
                  handleClickOnProduct={this.handleClickOnProduct}
                  handleRemoveFromShop={this.handleRemoveFromShop}
                />
              )}
            />
            <Route
              path="/pageShoppinglist"
              render={() => (
                <PageShoppingList
                  products={this.state.products.filter(
                    currentProduct => currentProduct.toBuy === true
                  )}
                  typeIDsArray={this.typeIDsArray}
                  handleClickOnProduct={this.handleClickOnProduct}
                  handleDeleteShoppingList={this.handleDeleteShoppingList}
                  handleRemoveFromShoppingList={
                    this.handleRemoveFromShoppingList
                  }
                />
              )}
            />

            <Route
              render={() => (
                <div className="userInfo">Ups, coś poszło nie tak :(</div>
              )}
            />
          </Switch>
        </section>
      </HashRouter>
    );
  }
}

export default App;

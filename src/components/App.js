import React from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation.js";
import AddProduct from "./AddProduct.js";
import Shop from "./Shop.js";
import ShoppingList from "./ShoppingList.js";

class App extends React.Component {
  state = {
    pieczywo: [{ id: 'pieczywo1', name: "chleb", toBuy: false, bought: false }],
    owoce: [{ id: 'owoce0', name: "jabłka", toBuy: false, bought: false }],
    nabial: [{ id: 'nabial0', name: "mleko", toBuy: false, bought: false }],
    mieso: [{ id: 'mieso0', name: "mielone", toBuy: false, bought: false }],
    puszki: [{ id: 'puszki0', name: "fasolka", toBuy: false, bought: false }],
    kawa: [{ id: 'kawa0', name: "kawa", toBuy: false, bought: false }],
    makarony: [{ id: 'makarony0', name: "ryż", toBuy: false, bought: false }],
    slodycze: [{ id: 'slodycze0', name: "czekolada", toBuy: false, bought: false }],
    czystosc: [{ id: 'czystosc0', name: "papier", toBuy: false, bought: false }],
    napoje: [{ id: 'napoje0', name: "woda", toBuy: false, bought: false }],
    alkohole: [{ id: 'alkohole0', name: "piwo", toBuy: false, bought: false }],
    biurowe: [{ id: 'biurowe0', name: "zeszyt", toBuy: false, bought: false }],
    kosmetyki: [{ id: 'kosmetyki0', name: "pasta", toBuy: false, bought: false }],
    ubrania: [{ id: 'ubrania0', name: "kapcie", toBuy: false, bought: false }]
  };

  handleAddProduct = item => {
    // check if that item already exists inside our product list
    const index = this.state[item.type].findIndex(
      current => current.name === item.name
    );
    // if it doesnt
    if (!(index + 1)) {
      // calculate its ID
      const newID = item.type + this.state[item.type].length;

      // create that product
      const newProduct = {
        id: newID,
        name: item.name,
        toBuy: false,
        bought: false
      };

      // add that product to state (update state)
      this.setState(prevState => ({
        [item.type]: [...prevState[item.type], newProduct]
      }));
    } else {
      console.log(`index pod ktorym znaleziono pozycje to: ${index}`);
    }
  };

  handleAddToShoppingList = () => {
    console.log(' handleAddToShoppingList dziala');
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation />

        <section>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <AddProduct addItem={this.handleAddProduct} />}
            />

            <Route path="/shop" render={() => <Shop products={this.state} handleAddToShoppingList={this.handleAddToShoppingList}/>} />
            <Route path="/shoppinglist" component={ShoppingList} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;

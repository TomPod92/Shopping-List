import React from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation.js";
import AddProduct from "./AddProduct.js";
import Products from "./Products.js";
import ShoppingList from "./ShoppingList.js";

class App extends React.Component {
  state = {
    pieczywo: [{ id: 0, name: "chleb" }],
    owoce: [{ id: 0, name: "jabłka" }],
    nabial: [{ id: 0, name: "mleko" }],
    mieso: [],
    puszki: [],
    kawa: [],
    makarony: [],
    slodycze: [],
    czystosc: [],
    napoje: [],
    alkohole: [],
    biurowe: [],
    kosmetyki: [],
    ubrania: []
  };

  handleAddProduct = item => {
    // check if that item already exists inside our product list
    const index = this.state[item.type].findIndex(
      current => current.name === item.name
    );
    // if it doesnt
    if (!(index + 1)) {
      // calculate its ID
      const newID = this.state[item.type].length;

      // create that product
      const newProduct = {
        id: newID,
        name: item.name
      };

      // add that product to state (update state)
      this.setState(prevState => ({
        [item.type]: [...prevState[item.type], newProduct]
      }));
    } else {
      console.log(`index pod ktorym znaleziono pozycje to: ${index}`);
    }
  };

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

            <Route
              path="/products"
              render={() => <Products products={this.state} />}
            />
            <Route path="/shoppinglist" component={ShoppingList} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;

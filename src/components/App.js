import React from "react";
import "../styles/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation.js";
import AddProduct from "./AddProduct.js";
import Products from "./Products.js";
import ShoppingList from "./ShoppingList.js";

class App extends React.Component {
  state = {
    products: [
      { id: 1, name: "jablka", type: "owoce", toBuy: false, bought: false },
      { id: 2, name: "mleko", type: "nabiał", toBuy: false, bought: false },
      { id: 3, name: "szynka", type: "mieso", toBuy: false, bought: false }
    ]
  };

  handleAddProduct = product => {
    // check if that product already exists in this.state.products and find its index
    const index = this.state.products.findIndex(
      current => current.name === product.name
    );

    // if it doesnt exists create and add it to the products list
    if (index === -1) {
      // calculate ID for new product
      const newID = this.state.products[this.state.products.length - 1].id + 1;

      // create new product
      const newProduct = {
        id: newID,
        name: product.name,
        type: product.type,
        toBuy: false,
        bought: false
      };

      // add new product to state and rerender the App
      this.setState(prevState => ({
        products: [...prevState.products, newProduct]
      }));
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

            <Route path="/products" exact component={Products} />
            <Route path="/shoppinglist" exact component={ShoppingList} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;

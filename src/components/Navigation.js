import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/navigation.scss'


const Navigation = () => {
    return (
        <header>
        <nav>
          <ul>
            <li><NavLink to="/" exact className="link">Add Product</NavLink></li>
            <li><NavLink to="/products" className="link">Products</NavLink></li>
            <li><NavLink to="/shoppinglist" className="link">Shopping List</NavLink></li>
          </ul>
        </nav>
      </header>
    )
}

export default Navigation;
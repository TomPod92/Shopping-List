import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/navigation.scss'


const Navigation = () => {
    return (
        <header>
        <nav>
          <ul className="main-Nav">
            <li className="nav-item"><NavLink to="/" exact className="link">Add Product</NavLink></li>
            <li className="nav-item"><NavLink to="/pageShop" className="link">Shop</NavLink></li>
            <li className="nav-item"><NavLink to="/pageShoppinglist" className="link">Shopping List</NavLink></li>
          </ul>
        </nav>
      </header>
    )
}

export default Navigation;
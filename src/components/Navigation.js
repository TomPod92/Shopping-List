import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/navigation.scss'


const Navigation = (props) => {
    return (
        <header>
        <nav>
          <ul className="main-Nav">
            <li className="nav-item"><NavLink to="/" exact className="link">Dodaj produkt</NavLink></li>
            <li className="nav-item"><NavLink to="/pageShop" className="link">Sklep</NavLink></li>
            <li className="nav-item"><NavLink to="/pageShoppinglist" className="link">Lista zakupów ({props.numberOfProducts})</NavLink></li>
          </ul>
        </nav>
      </header>
    )
}

export default Navigation;
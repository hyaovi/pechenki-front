import React from 'react';
import { NavLink } from 'react-router-dom';
import iconShoppingCart from '../images/icon-shopping-cart.svg';
import iconUser from '../images/icon-user-circle.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Печеньки
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                to="/store"
                className="nav-link"
                activeClassName="active"
              >
                Меню
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/journals"
                className="nav-link"
                activeClassName="active"
              >
                История заказов
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <NavLink to="/cart" className="nav-link" activeClassName="active">
                <img className="mr-2" src={iconShoppingCart} alt="" />0 item(s)
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/user" className="nav-link" activeClassName="active">
                <img className="mr-2" src={iconUser} alt="" />
                Личный кабинет
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

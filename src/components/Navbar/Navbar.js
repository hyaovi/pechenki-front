import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import iconShoppingCart from '../../images/icon-shopping-cart.svg';
import iconUser from '../../images/icon-user-circle.svg';

import { logOut } from '../../globalSlice';
import { selectOrdersList } from '../../globalSlice/cartSlice';
import { selectUser } from '../../globalSlice';
import * as ROUTES from '../../constants/routes';

function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const orderList = useSelector(selectOrdersList);
  const { isAdmin } = useSelector(selectUser);
  const [show, setShow] = useState(false);

  const handleLogOut = () => {
    dispatch(logOut());
    history.push(ROUTES.HOMEPAGE);
  };
  const toggler = () => setShow((PREVSTATE) => !PREVSTATE);
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div className="container">
        <NavLink to={ROUTES.HOMEPAGE} className="navbar-brand">
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
          onClick={toggler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${show && 'show'}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                to={ROUTES.STORE}
                className="nav-link"
                activeClassName="active"
              >
                Меню
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={ROUTES.JOURNAL}
                className="nav-link"
                activeClassName="active"
              >
                История заказов
              </NavLink>
            </li>
            {isAdmin && (
              <li className="nav-item">
                <NavLink
                  to={ROUTES.ADMIN_DASHBOARD_ORDERS}
                  className="nav-link"
                  activeClassName="active"
                >
                  Текущии заказы
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ml-auto">
            {isAdmin ? (
              <li className="nav-item">
                <NavLink
                  to={ROUTES.ADMIN_DASHBOARD}
                  className="nav-link"
                  activeClassName="active"
                >
                  <img className="mr-2" src={iconUser} alt="" />
                  Dashboard
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    to={ROUTES.ROOM_DASHBOARD}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <img className="mr-2" src={iconUser} alt="" />
                    Kабинет-1
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    to={ROUTES.SHOPPING_CART}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <img className="mr-2" src={iconShoppingCart} alt="" />
                    {orderList.length} item(s)
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <button
                className="btn btn-sm btn-light py-2"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

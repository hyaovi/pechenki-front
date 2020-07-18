import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Печеньки
        </a>
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
              <a className="nav-link" href="#">
                Меню <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./history.html">
                История заказов
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a className="nav-link" href="./shopping-cart.html">
                {' '}
                <img
                  className="mr-2"
                  src="./images/icon-shopping-cart.svg"
                  alt=""
                />
                0 item(s)
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                {' '}
                <img
                  className="mr-2"
                  src="./images/icon-user-circle.svg"
                  alt=""
                />
                Личный кабинет
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

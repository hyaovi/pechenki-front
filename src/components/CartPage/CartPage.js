import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PageWrapper from '../PageWrapper';
import CartItemCard from './CartItemCard';
import {
  selectOrdersList,
  updateCart as cartUpdate,
} from '../../globalSlice/cartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const orderList = useSelector(selectOrdersList);
  const [cart, setCart] = useState(orderList);
  const updateList = () => {
    dispatch(updateCart(orderList.slice(1)));
  };
  const updateCart = (productID, amount) => {
    const newCart = cart.map((product) =>
      product.productID === productID ? { ...product, amount } : product
    );

    setCart(newCart);
  };
  const deleteFromCart = (productID) => {
    let newCart = cart.filter((product) => product.productID !== productID);
    setCart(newCart);
  };

  useEffect(() => {
    dispatch(cartUpdate(cart));
  }, [cart, dispatch]);
  return (
    <PageWrapper bgColor protectedRoute>
      <h6 className="mb-3" onClick={updateList}>
        Room's Journal
      </h6>
      <div className="row ">
        <div className="col-md-8 pb-3">
          {cart && cart.length > 0 ? (
            cart.map((item, i) => (
              <div className="pb-1" key={`${item.productID}-${i}`}>
                <CartItemCard
                  item={item}
                  cart={cart}
                  updateCart={updateCart}
                  deleteFromCart={deleteFromCart}
                />
              </div>
            ))
          ) : (
            <p>no item</p>
          )}
        </div>
        <div className="col-md-4">
          <ResumeCard orderNameList={cart.map((item) => item.name)} />
        </div>
      </div>
    </PageWrapper>
  );
}

export default CartPage;

const ResumeCard = ({ orderNameList }) => {
  const [confirmed, setConfirmed] = useState(false);

  const confirmedOrder = () => {
    setConfirmed(true);
  };
  return (
    <div className="rounded shadow-lg card p-3">
      <small className="text-uppercase mb-3">Order details</small>
      <div className="d-flex mb-3">
        <span className="h3 mr-2 ">Итого:</span>
        <span className="h3 ">{orderNameList.length}</span>
      </div>
      <hr className="bg-secondary" />
      <p className="mb-5">{orderNameList.join(', ')}</p>
      <p>
        <button className="btn btn-block btn-primary" onClick={confirmedOrder}>
          Оформить заказ
        </button>
      </p>
      {confirmed && (
        <div className="alert alert-success text-center">Order confirmed!</div>
      )}
    </div>
  );
};

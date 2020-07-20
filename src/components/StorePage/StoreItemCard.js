import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectOrdersList,
  addProductToCart,
} from '../../globalSlice/cartSlice';

function StoreItemCard({ item }) {
  const dispatch = useDispatch();
  const orderList = useSelector(selectOrdersList);

  const { productID, name, type, description, image } = item;
  const addPoduct = () => {
    const newItem = { ...item, amount: 1 };
    for (let i = 0; i < orderList.length; i++) {
      if (orderList[i].productID === productID) {
        return;
      }
    }
    dispatch(addProductToCart(newItem));
  };
  return (
    <div className="card border-0">
      <div className="card-body d-flex flex-column">
        <img src={image} className="img-fluid w-50 mx-auto mb-3" alt="" />
        <small className="text-uppercase text-center">{type}</small>
        <p className="text-center ">
          <strong>{name}</strong>
        </p>
        <p className=" small item-description">{description}</p>
        <button className="btn btn-block btn-light" onClick={addPoduct}>
          Заказать
        </button>
      </div>
    </div>
  );
}

export default StoreItemCard;

import React, { useState } from 'react';
import iconDelete from '../../images/icon-delete.svg';
import { useDispatch } from 'react-redux';

import {
  UpdateProductToCart,
  deleteProductFromCart,
} from '../../globalSlice/cartSlice';

function ItemCartCard({ item, index }) {
  const dispatch = useDispatch();
  const { productID, name, type, description, image, amount } = item;
  const [localAmount, setlocalAmount] = useState(amount);

  const ChangeAmount = (event) => {
    setlocalAmount(event.target.value);
  };
  const deleteProduct = () => {
    dispatch(deleteProductFromCart({ id: productID }));
  };
  const increment = () => {
    setlocalAmount(localAmount + 1);
    findAndEditItem();
  };
  const decrement = () => {
    if (localAmount === 1) {
      return;
    }
    setlocalAmount((PREV_STATE) => PREV_STATE - 1);
  };
  const findAndEditItem = () => {
    dispatch(
      UpdateProductToCart({ index: index, id: productID, amount: localAmount })
    );
  };

  return (
    <div className="card">
      <div className="row no-gutters p-1 align-items-center">
        <div className="col-sm-auto">
          <div className="d-flex">
            <img src={image} className="img-fluid w-75 mx-auto" alt="" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card-body d-flex flex-column">
            <small className="text-uppercase ">{type}</small>
            <p className="">{name}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="col-sm-3 m-auto">
          <div className="input-group rounded  ">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary px-3"
                type="button"
                id="button-addon1"
                onClick={increment}
              >
                +
              </button>
            </div>
            <input
              type="number"
              max="10"
              min="1"
              value={localAmount}
              onChange={ChangeAmount}
              className="form-control qt-input"
              style={{ maxWidth: '3rem' }}
              placeholder="1"
              aria-describedby="button-addon1"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary px-3"
                type="button"
                id="button-addon1"
                onClick={decrement}
              >
                -
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-auto ml-auto mr-md-3">
          <button
            className="btn btn-light px-3 rounded-circle"
            onClick={deleteProduct}
          >
            <img src={iconDelete} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCartCard;

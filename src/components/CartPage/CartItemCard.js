import React, { useState } from 'react';
import iconDelete from '../../images/icon-delete.svg';

function ItemCartCard({ item, updateCart, deleteFromCart }) {
  const { productID, name, type, description, image, amount } = item;
  const [localAmount, setlocalAmount] = useState(amount);
  const ChangeAmount = (event) => {
    setlocalAmount(event.target.value);
    updateCart(productID, event.target.value);
  };
  const deleteProduct = () => {
    deleteFromCart(productID);
  };
  const increment = () => {
    const newAmount = localAmount + 1;
    setlocalAmount(newAmount);
    updateCart(productID, newAmount);
  };
  const decrement = () => {
    if (localAmount === 1) {
      return;
    }
    const newAmount = localAmount - 1;
    updateCart(productID, newAmount);
    setlocalAmount(newAmount);
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

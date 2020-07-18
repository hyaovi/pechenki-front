import React from 'react';
import itemImage from '../../images/milk.png';
import iconDelete from '../../images/icon-delete.svg';

function ItemCartCard() {
  return (
    <div className="card">
      <div className="row no-gutters p-1 align-items-center">
        <div className="col-sm-auto">
          <div className="d-flex">
            <img src={itemImage} className="img-fluid w-75 mx-auto" alt="" />
          </div>
        </div>
        <div className="col-sm-auto">
          <div className="card-body d-flex flex-column">
            <small className="text-uppercase ">НАПИТКИ</small>
            <p className="">Молоко</p>
            <p>Вкусное молоко..</p>
          </div>
        </div>
        <div className="col-sm-auto m-auto">
          <div className="input-group rounded  ">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary px-3"
                type="button"
                id="button-addon1"
              >
                +
              </button>
            </div>
            <input
              type="number"
              max="10"
              min="1"
              value="1"
              className="form-control qt-input"
              style={{ maxWidth: '3rem' }}
              placeholder="1"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary px-3"
                type="button"
                id="button-addon1"
              >
                -
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-auto ml-auto mr-md-3">
          <button className="btn btn-light px-3 rounded-circle">
            <img src={iconDelete} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCartCard;

import React from 'react';
import itemImage from '../../images/milk.png';
function StoreItemCard() {
  return (
    <div className="card border-0">
      <div className="card-body d-flex flex-column">
        <img src={itemImage} className="img-fluid w-50 mx-auto mb-3" alt="" />
        <small className="text-uppercase text-center">НАПИТКИ</small>
        <p className=" small">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <button className="btn btn-block btn-light">Заказать</button>
      </div>
    </div>
  );
}

export default StoreItemCard;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PageWrapper from '../PageWrapper';
import CartItemCard from './CartItemCard';
import { selectOrdersList } from '../../globalSlice/cartSlice';

function StorePage() {
  const orderList = useSelector(selectOrdersList);
  console.log({ orderList });
  const [state, setstate] = useState(orderList);
  useEffect(() => {
    setstate(orderList);
    return () => {};
  }, [orderList]);
  return (
    <PageWrapper bgColor protectedRoute>
      <h6 className="mb-3">Room's Journal</h6>
      <div className="row ">
        <div className="col-md-8 pb-3">
          {state && state.length > 0 ? (
            state.map((item, i) => (
              <div className="pb-1" key={`${item.productID}-${i}`}>
                <CartItemCard item={item} orderList={state} index={i} />
              </div>
            ))
          ) : (
            <p>no item</p>
          )}
        </div>
        <div className="col-md-4">
          <ResumeCard orderNameList={orderList.map((item) => item.name)} />
        </div>
      </div>
    </PageWrapper>
  );
}

export default StorePage;

const ResumeCard = ({ orderNameList }) => {
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
        <button className="btn btn-block btn-primary">Оформить заказ</button>
      </p>
    </div>
  );
};

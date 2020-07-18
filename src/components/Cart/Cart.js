import React from 'react';
import PageWrapper from '../PageWrapper';
import CartItemCard from './CartItemCard';
const itemsList = [1, 2, 3, 4, 5, 6, 7, 8];
function StorePage() {
  return (
    <PageWrapper bgColor>
      <h6 className="mb-3">Room's Journal</h6>
      <div className="row ">
        <div className="col-md-8 pb-3">
          {itemsList.map((item, i) => (
            <div className="pb-1" key={`${item}-${i}`}>
              <CartItemCard />
            </div>
          ))}
        </div>
        <div class="col-md-4">
          <ResumeCard />
        </div>
      </div>
    </PageWrapper>
  );
}

export default StorePage;

const ResumeCard = () => {
  return (
    <div className="rounded shadow-lg card p-3">
      <small className="text-uppercase mb-3">Order details</small>
      <div className="d-flex mb-3">
        <span className="h3 mr-2 ">Итого:</span>
        <span className="h3 ">19</span>
      </div>
      <hr className="bg-secondary" />
      <p className="mb-5">
        ACÉROLA (cerise des Antilles), Acerola – West Indian Cherry, Pomme,
        Apple, Apricots, Avocado, Banana, Blackberries
      </p>
      <p>
        <button className="btn btn-block btn-primary">Оформить заказ</button>
      </p>
    </div>
  );
};

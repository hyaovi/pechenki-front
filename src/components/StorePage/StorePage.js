import React from 'react';
import PageWrapper from '../PageWrapper';
import StoreItemCard from './StoreItemCard';
const itemsList = [1, 2, 3, 4, 5, 6, 7, 8];
function StorePage() {
  return (
    <PageWrapper bgColor>
      <h6 className="mb-3">Store</h6>
      <div className="row no-gutters">
        {itemsList.map((item, i) => (
          <div className="col-sm-3 p-3" key={`${item}-${i}`}>
            <StoreItemCard />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default StorePage;

import React from 'react';

import PageWrapper from '../PageWrapper';
import StoreItemCard from './StoreItemCard';
import { selectProductList } from '../../globalSlice';
import { useSelector } from 'react-redux';

function StorePage() {
  const productList = useSelector(selectProductList);
  return (
    <PageWrapper bgColor protectedRoute>
      <h6 className="mb-3">Store</h6>
      <div className="row no-gutters">
        {productList.map((item, i) => (
          <div className="col-sm-6 col-md-4 col-lg-3 p-3" key={`${item}-${i}`}>
            <StoreItemCard item={item} />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default StorePage;

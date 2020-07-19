import React from 'react';
import { Redirect } from 'react-router-dom';

import PageWrapper from '../PageWrapper';
import StoreItemCard from './StoreItemCard';
import { useAuth } from '../hooks';
import { HOMEPAGE } from '../../constants/routes';

const itemsList = [1, 2, 3, 4, 5, 6, 7, 8];

function StorePage() {
  const isAuthenticated = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <PageWrapper bgColor>
          <h6 className="mb-3">Store</h6>
          <div className="row no-gutters">
            {itemsList.map((item, i) => (
              <div
                className="col-sm-6 col-md-4 col-lg-3 p-3"
                key={`${item}-${i}`}
              >
                <StoreItemCard />
              </div>
            ))}
          </div>
        </PageWrapper>
      ) : (
        <Redirect to={HOMEPAGE} />
      )}
    </>
  );
}

export default StorePage;

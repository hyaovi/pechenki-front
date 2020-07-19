import React from 'react';
import { Redirect } from 'react-router-dom';

import PageWrapper from '../PageWrapper';
import JournalCard from './JournalCard';
import { useAuth } from '../hooks';
import { HOMEPAGE } from '../../constants/routes';
const itemsList = [1, 2, 3, 4, 5, 6, 7, 8];

function JournalPage() {
  const isAuthenticated = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <PageWrapper bgColor>
          <h6 className="mb-3">Journals</h6>
          <div className="row">
            {itemsList.map((item, i) => (
              <div className="col-12 pb-3" key={`${item}-${i}`}>
                <JournalCard />
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

export default JournalPage;

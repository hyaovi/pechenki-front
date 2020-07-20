import React from 'react';

import PageWrapper from '../PageWrapper';
import JournalCard from './JournalCard';

const itemsList = [1, 2, 3, 4, 5, 6, 7, 8];

function JournalPage() {
  return (
    <PageWrapper bgColor protectedRoute>
      <h6 className="mb-3">Journals</h6>
      <div className="row">
        {itemsList.map((item, i) => (
          <div className="col-12 pb-3" key={`${item}-${i}`}>
            <JournalCard />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default JournalPage;

import React from 'react';

import PageWrapper from '../PageWrapper';
import AdminCard from './AdminCard';

const itemsList = [1, 2, 3, 4, 5, 6, 7, 8];

function AdminDashboard() {
  return (
    <PageWrapper bgColor protectedRoute>
      <h6 className="mb-3">Admin</h6>
      <div className="row">
        {itemsList.map((item, i) => (
          <div className="col-12 pb-3" key={`${item}-${i}`}>
            <AdminCard />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default AdminDashboard;

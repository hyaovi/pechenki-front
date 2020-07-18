import React from 'react';
import Navbar from './Navbar';

function PageWrapper({ children, bgColor }) {
  return (
    <>
      <Navbar />
      <div className={`pt-3 ${bgColor && 'bg-lighten-blue'}`}>
        <div className="container page-content">{children}</div>
      </div>
    </>
  );
}

export default PageWrapper;

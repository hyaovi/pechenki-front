import React from 'react';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';
import { useAuth } from './hooks';

function PageWrapper({ children, bgColor, protectedRoute }) {
  const isAuthenticated = useAuth();
  console.log('pageWrapper rendering');
  return (
    <>
      {protectedRoute ? (
        <>
          {isAuthenticated ? (
            <>
              <Navbar />
              <div className={`pt-3 ${bgColor && 'bg-lighten-blue'}`}>
                <div className="container page-content">{children}</div>
              </div>
            </>
          ) : (
            <Redirect to="/" />
          )}
        </>
      ) : (
        <>
          <Navbar />
          <div className={`pt-3 ${bgColor && 'bg-lighten-blue'}`}>
            <div className="container page-content">{children}</div>
          </div>
        </>
      )}
    </>
  );
}

export default PageWrapper;

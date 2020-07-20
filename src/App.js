import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AuthPage from './components/AuthPage';
import AdminAuthPage from './components/AdminAuthPage';
import StorePage from './components/StorePage';
import JournalPage from './components/JournalPage';
import CartPage from './components/CartPage';

import * as ROUTES from './constants/routes';

function App() {
  return (
    <Switch>
      <Route path={ROUTES.HOMEPAGE} exact>
        <AuthPage />
      </Route>
      <Route path={ROUTES.ADMIN_LOGIN} exact>
        <AdminAuthPage />
      </Route>
      <Route path={ROUTES.STORE} exact>
        <StorePage />
      </Route>
      <Route path={ROUTES.JOURNAL} exact>
        <JournalPage />
      </Route>
      <Route path={ROUTES.SHOPPING_CART} exact>
        <CartPage />
      </Route>
      <Route path={ROUTES.ROOM_DASHBOARD} exact>
        <Redirect to={ROUTES.JOURNAL} />
      </Route>
    </Switch>
  );
}

export default App;

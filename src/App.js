import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AuthPage from './components/AuthPage';
import AdminAuthPage from './components/AdminAuthPage';
import StorePage from './components/StorePage';
import JournalPage from './components/JournalPage';
import CartPage from './components/CartPage';

import * as ROUTES from './constants/routes';
import AdminDashboard from './components/AdminDashboard';
import NotFound from './components/NotFound';
import CommingSoon from './components/ComingSoon';

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
      <Route path={ROUTES.ADMIN_DASHBOARD} exact>
        <AdminDashboard />
      </Route>
      <Route path={ROUTES.ADMIN_DASHBOARD_ORDERS} exact>
        <CommingSoon />
        {/* TO DO : CREATE ORDER PAGE */}
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;

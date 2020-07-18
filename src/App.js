import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import AdminAuthPage from './components/AdminAuthPage';
import StorePage from './components/StorePage';
import JournalPage from './components/JournalPage';
import Cart from './components/Cart';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/admin" exact>
        <AdminAuthPage />
      </Route>
      <Route path="/store" exact>
        <StorePage />
      </Route>
      <Route path="/journals" exact>
        <JournalPage />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
      <Route path="/user" exact>
        <Redirect to="/journals" />
      </Route>
    </Switch>
  );
}

export default App;

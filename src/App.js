import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import AdminAuthPage from './components/AdminAuthPage';
import StorePage from './components/StorePage';
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
    </Switch>
  );
}

export default App;

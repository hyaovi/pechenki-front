import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import AdminAuthPage from './components/AdminAuthPage';
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/admin" exact>
        <AdminAuthPage />
      </Route>
    </Switch>
  );
}

export default App;

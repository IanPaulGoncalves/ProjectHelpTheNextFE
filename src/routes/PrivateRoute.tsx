import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { isAuthenticated } from '../services/authService';

const PrivateRoute = ({ element: Component, ...rest }: any) => {
  const auth = isAuthenticated();
  return (
    <Route
      {...rest}
      element={
        (auth
          ? <Home />
          : Component)
      }
    />
  );
};

export default PrivateRoute;
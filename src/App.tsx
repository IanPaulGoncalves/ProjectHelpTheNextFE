import {
  ThemeProvider
} from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './mock';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './routes/PrivateRoute';
import index from './store';
import theme from './theme/index';

function App() {
  return (
    <Provider store={index}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <PrivateRoute path="/login" element={<Login />} />
            <Route path="*" element={<h1>Página não encontrada :(</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

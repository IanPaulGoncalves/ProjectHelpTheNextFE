import {
  ThemeProvider
} from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './mock';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import theme from './theme/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Página não encontrada :(</h1>} />
        </Routes>
      </BrowserRouter>


    </ThemeProvider>
  );
}

export default App;

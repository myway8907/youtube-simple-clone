import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Mainpage />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

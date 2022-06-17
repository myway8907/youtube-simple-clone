import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/navbar/Navbar';
import SearchResult from './pages/SearchResult';

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Navbar />
          <Routes>
            <Route path='/' element={<Mainpage />}></Route>
            <Route path='/search' element={<SearchResult />}></Route>
          </Routes>
        </RecoilRoot>
      </ThemeProvider>
    </BrowserRouter>
  );
}

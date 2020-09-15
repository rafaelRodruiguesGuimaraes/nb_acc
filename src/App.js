import React from 'react';

import Header from './components/header';
import Home from './pages/home/index';

import GlobalStyle from './styles/global';

function App() {
  return (
      <>
      <Header />
      <Home />
       <GlobalStyle />
      </>
  );
}

export default App;

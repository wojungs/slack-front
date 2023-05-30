import React from 'react';
import { Layout } from 'antd';
import MainNav from './MainNav';
import MainHeader from './MainHeader';
import Main from './Main';
import GlobalStyle from '../styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Layout style={{ height: '100vh' }}>
          <GlobalStyle />
          <MainHeader />
          <Layout>
            <MainNav />
            <Main />
          </Layout>
        </Layout>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

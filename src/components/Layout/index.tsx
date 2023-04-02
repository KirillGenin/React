import { Outlet } from 'react-router';
import Header from '../Header';
import { useState } from 'react';
import TitlePageContext from '../../hooks/Context';
import Footer from '../Footer';

function Layout() {
  const [titlePage, setTitlePage] = useState('');

  return (
    <>
      <TitlePageContext.Provider value={{ titlePage, setTitlePage }}>
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </TitlePageContext.Provider>
      <Footer />
    </>
  );
}

export default Layout;

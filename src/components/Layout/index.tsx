import { Outlet } from 'react-router';
import Header from '../Header';
import { useState } from 'react';
import TitlePageContext from '../../hooks/Context';

function Layout() {
  const [titlePage, setTitlePage] = useState('');

  return (
    <>
      <TitlePageContext.Provider value={{ titlePage, setTitlePage }}>
        <Header />
        <Outlet />
      </TitlePageContext.Provider>
    </>
  );
}

export default Layout;

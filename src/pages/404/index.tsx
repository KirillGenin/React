import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';
import React from 'react';

function PageNotFound() {
  const { setTitlePage } = useContext(TitlePageContext);

  useEffect(() => {
    setTitlePage('404 Error');
  });

  return (
    <>
      <p>Page Not Found</p>
    </>
  );
}

export default PageNotFound;

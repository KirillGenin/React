import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';

function PageNotFound() {
  const { setTitlePage } = useContext(TitlePageContext);

  useEffect(() => {
    setTitlePage('404: Page Not Found');
  });

  return (
    <>
      <p>Page Not Found</p>
    </>
  );
}

export default PageNotFound;

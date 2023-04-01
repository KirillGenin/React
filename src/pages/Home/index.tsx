import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';

function HomePage() {
  const { setTitlePage } = useContext(TitlePageContext);

  useEffect(() => {
    setTitlePage('Home');
  });

  return (
    <>
      <p>Home</p>
    </>
  );
}

export default HomePage;

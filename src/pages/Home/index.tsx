import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';
import Search from '../../components/Search';

function HomePage() {
  const { setTitlePage } = useContext(TitlePageContext);

  useEffect(() => {
    setTitlePage('Home');
  });

  return (
    <>
      <Search />
    </>
  );
}

export default HomePage;

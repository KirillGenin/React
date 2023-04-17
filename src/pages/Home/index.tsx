import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';
import Search from '../../components/Search';
import CardList from '../../components/CardList';
import Preload from '../../components/Preload';
import { useAppSelector } from '../../hooks';
import ModalCard from '../../components/ModalCard';

function HomePage() {
  const { setTitlePage } = useContext(TitlePageContext);
  const isLoading = useAppSelector((state) => state.search.loading);
  const isHeroLoading = useAppSelector((state) => state.search.heroLoading);

  useEffect(() => {
    setTitlePage('Home');
  });

  return (
    <>
      <Search />
      {isLoading ? <Preload /> : <CardList />}
      {isHeroLoading && <ModalCard />}
    </>
  );
}

export default HomePage;

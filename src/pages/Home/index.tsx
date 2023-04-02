import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';
import Search from '../../components/Search';
import Card from '../../components/Card';
import goods from '../../data/data';
import styles from './index.module.scss';

function HomePage() {
  const { setTitlePage } = useContext(TitlePageContext);

  useEffect(() => {
    setTitlePage('Home');
  });

  return (
    <>
      <Search />
      <div className={styles.wrapper}>
        {goods.map((product) => (
          <Card
            title={product.title}
            brand={product.brand}
            type={product.type}
            membrane={product.membrane}
            description={product.description}
            price={product.price}
            image={product.image}
            key={product.id}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;

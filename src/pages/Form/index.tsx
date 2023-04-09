import { useEffect, useContext, useState } from 'react';
import TitlePageContext from '../../hooks/Context';
import Form from '../../components/Form';
import CardForm from '../../components/CardForm';
import styles from './index.module.scss';
import { FormValues } from '../../types/types';

function FormPage() {
  const { setTitlePage } = useContext(TitlePageContext);
  const [cards, setCards] = useState<FormValues[]>([]);

  useEffect(() => {
    setTitlePage('Form');
  });

  return (
    <>
      <Form cards={cards} setCards={setCards} />
      <div className={styles.wrapper}>
        {cards.map((card, index) => (
          <CardForm card={card} key={index} />
        ))}
      </div>
    </>
  );
}

export default FormPage;

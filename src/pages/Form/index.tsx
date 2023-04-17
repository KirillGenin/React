import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';
import Form from '../../components/Form';
import CardListForm from '../../components/CardListForm';

function FormPage() {
  const { setTitlePage } = useContext(TitlePageContext);

  useEffect(() => {
    setTitlePage('Form');
  });

  return (
    <>
      <Form />
      <CardListForm />
    </>
  );
}

export default FormPage;

import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';
import Form from '../../components/Form';

function FormPage() {
  const { setTitlePage } = useContext(TitlePageContext);

  useEffect(() => {
    setTitlePage('Form');
  });

  return (
    <>
      <Form />
    </>
  );
}

export default FormPage;

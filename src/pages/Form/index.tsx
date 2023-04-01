import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';

function FormPage() {
  const { setTitlePage } = useContext(TitlePageContext);

  useEffect(() => {
    setTitlePage('Form');
  });

  return (
    <>
      <p>Form</p>
    </>
  );
}

export default FormPage;

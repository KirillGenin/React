import { useEffect, useContext } from 'react';
import TitlePageContext from '../../hooks/Context';

function AboutUsPage() {
  const { setTitlePage } = useContext(TitlePageContext);

  useEffect(() => {
    setTitlePage('About Us');
  });

  return (
    <>
      <p>About Us</p>
    </>
  );
}

export default AboutUsPage;

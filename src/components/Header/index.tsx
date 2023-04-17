import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import styles from './index.module.scss';
import TitlePageContext from '../../hooks/Context';

function Header() {
  const { titlePage } = useContext(TitlePageContext);

  return (
    <>
      <header className={styles.header}>
        <span className={styles.logo} data-testid="logo">
          {titlePage}
        </span>
        <nav>
          <ul className={styles.nav_list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.nav_link} ${styles.nav_link__active}` : styles.nav_link
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `${styles.nav_link} ${styles.nav_link__active}` : styles.nav_link
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/form"
                className={({ isActive }) =>
                  isActive ? `${styles.nav_link} ${styles.nav_link__active}` : styles.nav_link
                }
              >
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

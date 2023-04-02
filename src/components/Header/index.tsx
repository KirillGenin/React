import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/404">404</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

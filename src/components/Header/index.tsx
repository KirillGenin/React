import { NavLink } from 'react-router-dom';
import './index.scss';

function Header() {
  return (
    <>
      <header className="header">
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

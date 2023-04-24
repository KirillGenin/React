import styles from './index.module.scss';
import logo from '../../assets/rsschool.svg';
import React from 'react';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <span>
          <a href="https://github.com/KirillGenin" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </span>
        <span>React 2023 Q1</span>
        <span>
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <img className={styles.footer_logo} src={logo} alt="RS School" />
          </a>
        </span>
      </footer>
    </>
  );
}

export default Footer;

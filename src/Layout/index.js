import React from 'react';
import styles from './Layout.module.css';
import { Link } from 'react-router-dom';

const headerLinks = [{ key: 1, to: '/', name: 'Home' }];

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Bar Plotter</h1>
        <div className={styles.links}>
          {headerLinks.map(({ name, ...rest }) => (
            <Link className={styles.link} {...rest}>
              {name}
            </Link>
          ))}
        </div>
      </header>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default Layout;

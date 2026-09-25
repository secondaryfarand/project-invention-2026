import { NavLink } from 'react-router-dom';
import React from 'react';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

export default function Navbar({ onNavigateDashboard }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <div className={styles.logo}>
          <span className={styles.logoBadge}>🧬</span>
          <span className={styles.logoText}>AnatoMed</span>
        </div>

        {/* Menu Navigasi */}
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.mobileIcon}>👥</span>
              <span>Beranda</span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <a href="tentang" className={styles.navLink}>
              <span className={styles.mobileIcon}>👥</span>
              <span>Tentang Kami</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/eksplorasi" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.mobileIcon}>🔍</span>
              <span>Eksplorasi</span>
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink 
              to="/kuis" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.mobileIcon}>🎯</span>
              <span>Kuis Medis</span>
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink 
              to="/menu" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.mobileIcon}>🎯</span>
              <span>Menu</span>
            </NavLink>
          </li>
        </ul>

        <div className={styles.ctaWrapper}>
          <Button variant="dark" onClick={onNavigateDashboard}>
            Dashboard <span className={styles.arrowIcon}>↗</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
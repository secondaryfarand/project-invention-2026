import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Header.module.css';

export default function Header({ onExploreClick, onDashboardClick }) {
  const navigate = useNavigate();
  return (
    <header className={styles.heroSection}>
      <div className={styles.darkBackground} />
      <video
        className={styles.bgVideo}
        autoPlay
        loop
        muted
        playsInline
        >
        <source src="/assets/preview-1-skull.webm" type="video/webm" />
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.videoDarkOverlay} />

      <div className={styles.container}>
        
        {/* <div className={styles.topRow}>
          
          <div className={styles.ratingBox}>
            <div className={styles.avatars}>
              <span className={styles.avatar}>🎓</span>
              <span className={styles.avatar}>👨‍⚕️</span>
              <span className={styles.avatar}>🔬</span>
            </div>
            <div className={styles.ratingText}>
              <div className={styles.stars}>★★★★★</div>
              <span>Dipercayai 1,000+ Mahasiswa Medis</span>
            </div>
          </div>
        </div> */}

        
        <div className={styles.heroCard}>
          <div className={styles.logo} onClick={() => navigate('/')}>
            <span className={styles.logoBadge}>🧬</span>
            <span className={styles.logoText}>AnatoMed</span>
          </div>
          <div className={styles.headingBox}>
            <h1 className={styles.mainTitle}>
              Pelajari Anatomi & Organ <span className={styles.gradientText}>Tubuh </span> <br />
              secara <span className={styles.gradientText}>Interaktif & Presisi</span>
            </h1>
          </div>

          <div className={styles.cardOverlay}>
            <div className={styles.tagGroup}>
              <span className={styles.tag}>Interaktif 3D ▶</span>
              <span className={styles.tag}>Pencarian Medis</span>
              <span className={styles.tag}>Kuis Anatomi</span>
            </div>

            <div className={styles.cardText}>
              <p>Terhubung langsung dengan API Wikipedia & Model 3D Sketchfab Real-Time.</p>
              <Button variant="primary" onClick={onDashboardClick}>
                Mulai Eksplorasi Sekarang
              </Button>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
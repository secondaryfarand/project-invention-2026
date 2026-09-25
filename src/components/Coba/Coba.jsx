import React from 'react';
import styles from './Coba.module.css';

export default function Coba() {
  return (
    <div className={styles.container}>
      {/* Sidebar Minimalis & Terang */}
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <span className={styles.badge}>Preview Model 3D</span>
          <h1 className={styles.title}>Anatomi Ecorche</h1>
          <p className={styles.description}>
            Studi struktur otot dan rangka manusia interaktif resolusi tinggi.
          </p>
        </div>

        {/* Info Detail */}
        <div className={styles.infoCard}>
          <h2 className={styles.infoTitle}>Metadata Model</h2>
          
          <div className={styles.infoGroup}>
            <span className={styles.label}>Judul Model</span>
            <span className={styles.value}>Ecorche Anatomy</span>
          </div>

          <div className={styles.infoGroup}>
            <span className={styles.label}>Sumber</span>
            <span className={styles.value}>Sketchfab</span>
          </div>

          <div className={styles.infoGroup}>
            <span className={styles.label}>Tipe Kontrol</span>
            <span className={styles.value}>Orbit & Zoom</span>
          </div>

          <div className={styles.infoGroup}>
            <span className={styles.label}>Status Rendering</span>
            <span className={styles.value} style={{ color: '#16a34a' }}>● Active</span>
          </div>
        </div>

        {/* Attribution / Kredit Pembuat */}
        <div className={styles.authorCard}>
          Dibuat oleh{' '}
          <a
            href="https://sketchfab.com/gorecraze"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.authorLink}
          >
            gorecraze
          </a>{' '}
          di{' '}
          <a
            href="https://sketchfab.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.authorLink}
          >
            Sketchfab
          </a>
        </div>
      </aside>

      {/* Area 3D Embed */}
      <main className={styles.viewerContainer}>
        <div className={styles.iframeWrapper}>
          <iframe
            title="Ecorche Anatomy Study"
            className={styles.iframe}
            // src="https://sketchfab.com/models/e8239f94d87b4e278f0cf02dbad1a330/embed?ui_infos=0&ui_watermark=0&ui_stop=1&ui_help=0&ui_vr=0&ui_settings=0&ui_inspector=0&ui_animations=0&ui_annotations=0&ui_hint=2"
            src="https://sketchfab.com/models/07ca1ff39a134fdf83aeaaa567c6d682/embed?&ui_ar=0&ui_vr=0&ui_help=0&dnt=1"
            // src="https://sketchfab.com/models/e8239f94d87b4e278f0cf02dbad1a330/embed?autostart=1&ui_theme=light"
            // 1. Digabungkan ke standar 'allow' modern & gunakan camelCase untuk properti boolean React
            allow="autoplay; fullscreen; "
            // 2. Properti kustom iframe ditulis menggunakan string atau ekspresi kurung kurawal di React
            // data-xr-spatial-tracking="true"
            data-execution-while-out-of-viewport="true"
            data-execution-while-not-rendered="true"
            frameBorder="0"
          />
        </div>
      </main>
    </div>
  );
}

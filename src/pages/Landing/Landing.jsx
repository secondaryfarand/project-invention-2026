import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Category from '../../components/CategoryGrid/CategoryGrid';
import Viewer3D from '../../components/Viewer3D/Viewer3D';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './Landing.module.css';

import { ORGAN_LIST } from '../../data/organData';


export default function Landing({ onGoToDashboard }) {
  const organ = ORGAN_LIST.find((item) => item.id === "muscle-tissue");
  return (
    <div className={styles.pageWrapper}>
      <Navbar onNavigateDashboard={onGoToDashboard} />
      <Header onDashboardClick={onGoToDashboard} />

    
      <section id="tentang-kami" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Mengapa Memilih AnatoMed?</h2>
          <p>Penyederhanaan materi anatomi medis yang kompleks dengan teknologi 3D.</p>
        </div>

        <div id="bentoGrid" className={styles.bentoGrid}>
          <div className={`${styles.bentoCard} ${styles.cardSmall}`}>
            <div className={styles.bentoIcon}>🌐</div>
            <h3>Integrasi Real-Time</h3>
            <p>Terhubung langsung ke ensiklopedia Wikipedia medis terpercaya.</p>
          </div>

          {/* Card 2: Fokus Model 3D */}
          <div className={`${styles.bentoCard} ${styles.cardTall}`}>
            <div className={styles.badgePill}>Inovasi 3D</div>
            <h3>Model Anatomi Presisi Tinggi</h3>
            
            <div className={styles.viewer3DWrapper}>
              {organ?.sketchfabId ? (
                <>
                  <iframe
                    title="Ecorche Anatomy Study"
                    className={styles.iframe3D}
                    src={`https://sketchfab.com/models/${organ.sketchfabId}/embed?autostart=1&preload=1&ui_theme=light&transparent=0`}
                    allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
                  />
                  <div className={styles.viewerOverlayHint}>
                    <i className="fa-solid fa-cube"></i>
                    <span>Geser untuk Memutar</span>
                  </div>
                </>
              ) : (
                <div className={styles.viewerLoading}>
                  <i className="fa-solid fa-circle-notch fa-spin" style={{ fontSize: '1.5rem', color: '#0284c7' }}></i>
                  <p>Memuat Model Anatomi 3D...</p>
                </div>
              )}
            </div>
            
            <p>Rotasi 360 derajat dan perbesar setiap sudut serabut otot maupun organ dalam.</p>
            <div className={styles.cardImageMock}>🫀 Interactive Organ View</div>
          </div>

          {/* Card 3: Fitur Kuis */}
          <div className={`${styles.bentoCard} ${styles.cardSmall}`}>
            <div className={styles.bentoIcon}>🎯</div>
            <h3>Evaluasi Kuis</h3>
            <p>Uji sejauh mana pemahaman struktur organ kamu lewat kuis interaktif.</p>
          </div>
        </div>
      </section>

      
      <section id="eksplorasi" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Mulai Belajar dalam 3 Langkah</h2>
          <p>Desain intuitif yang memudahkan eksplorasi mandiri.</p>
        </div>

        <div className={styles.stepGrid}>
          {/* Step 1 */}
          <div className={styles.stepCard}>
            <div className={styles.iconBadge}>🫀</div>
            <h3>Pilih Organ/Sistem</h3>
            <p>Pilih kategori yang ingin dipelajari, seperti Sistem Otot atau Pankreas.</p>
            

            {/* Wrapper Cekungan + Tombol Panah */}
            <div className={styles.notchWrapper}>
              <button className={styles.arrowCircleBtn}><a className={styles.arrAnchor} href="/menu">↗</a></button>
            </div>
          </div>

          {/* Step 2 */}
          <div className={styles.stepCard}>
            <div className={styles.iconBadge}>🔍</div>
            <h3>Eksplorasi Bagian</h3>
            <p>Klik sub-bagian organ di Sidebar untuk mengarahkan kamera 3D secara presisi.</p>
            
            <div className={styles.notchWrapper}>
              <button className={styles.arrowCircleBtn}><a className={styles.arrAnchor} href="/menu">↗</a></button>
            </div>
          </div>

          <div className={`${styles.stepCard} ${styles.stepCardActive}`}>
            <div className={styles.activeCardContent}>
              <h3>Kerjakan Kuis</h3>
              <p>Evaluasi pemahamanmu dan dapatkan skor secara langsung.</p>
              <Button variant="primary" onClick={onGoToDashboard} className={styles.stepBtn}>
               <a className={styles.arrAnchor} href="kuis">Coba Kuis ↗</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Category />
      <Footer />

        <p>hai</p>

<div className={`${styles.bentoCard} ${styles.cardTall}`}>
  <div className={styles.badgePill}>Inovasi 3D</div>
  <h3>Model Anatomi Presisi Tinggi</h3>

  {/* Penampil 3D yang Sudah Di-improvisasi */}
  <div className={styles.viewer3DWrapper}>
    {organ?.sketchfabId ? (
      <>
        <iframe
          title="Ecorche Anatomy Study"
          className={styles.iframe3D}
          src={`https://sketchfab.com/models/${organ.sketchfabId}/embed?autostart=1&preload=1&ui_theme=light`}
          allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
        />
        {/* Overlay Petunjuk Interaksi untuk UX yang Lebih Baik */}
        <div className={styles.viewerOverlayHint}>
          <i className="fa-solid fa-cube"></i>
          <span>Geser untuk Memutar</span>
        </div>
      </>
    ) : (
      <div className={styles.viewerLoading}>
        <i className="fa-solid fa-circle-notch fa-spin" style={{ fontSize: '1.5rem', color: '#0284c7' }}></i>
        <p>Memuat Model Anatomi 3D...</p>
      </div>
    )}
  </div>

  <p>Rotasi 360 derajat dan perbesar setiap sudut serabut otot maupun organ dalam.</p>
</div>

    </div>
    
  );
}
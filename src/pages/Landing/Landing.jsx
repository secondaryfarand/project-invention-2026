import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Category from '../../components/CategoryGrid/CategoryGrid';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './Landing.module.css';

export default function Landing({ onGoToDashboard }) {
  return (
    <div className={styles.pageWrapper}>
      <Navbar onNavigateDashboard={onGoToDashboard} />
      <Header onDashboardClick={onGoToDashboard} />

      {/* SECTION 1: Bento Grid "Mengapa Memilih Platform Ini?" */}
      <section id="tentang-kami" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Mengapa Memilih AnatoMed?</h2>
          <p>Penyederhanaan materi anatomi medis yang kompleks dengan teknologi 3D.</p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1: Integrasi Data */}
          <div className={`${styles.bentoCard} ${styles.cardSmall}`}>
            <div className={styles.bentoIcon}>🌐</div>
            <h3>Integrasi Real-Time</h3>
            <p>Terhubung langsung ke ensiklopedia Wikipedia medis terpercaya.</p>
          </div>

          {/* Card 2: Fokus Model 3D */}
          <div className={`${styles.bentoCard} ${styles.cardTall}`}>
            <div className={styles.badgePill}>Inovasi 3D</div>
            <h3>Model Anatomi Presisi Tinggi</h3>
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

      {/* SECTION 2: Step-by-Step "3 Langkah Belajar" */}
      <section id="eksplorasi" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Mulai Belajar dalam 3 Langkah</h2>
          <p>Desain intuitif yang memudahkan eksplorasi mandiri.</p>
        </div>


        <div className={styles.stepGrid}>
          {/* Step 1 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <h3>Pilih Organ/Sistem</h3>
            <p>Pilih kategori yang ingin dipelajari, seperti Sistem Otot atau Pankreas.</p>
          </div>

          {/* Step 2 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <h3>Eksplorasi Bagian</h3>
            <p>Klik sub-bagian organ di Sidebar untuk mengarahkan kamera 3D secara presisi.</p>
          </div>



          {/* Step 3 (Highlight Card dengan Accent Color) */}
          <div className={`${styles.stepCard} ${styles.stepCardActive}`}>
            <div className={styles.stepNumberLight}>03</div>
            <h3>Kerjakan Kuis</h3>
            <p>Evaluasi pemahamanmu dan dapatkan skor secara langsung.</p>
            <Button variant="primary" onClick={onGoToDashboard}>
              Coba Kuis ↗
            </Button>
          </div>
        </div>
      </section>

      <Category />
      <Footer />
    </div>
    
  );
}
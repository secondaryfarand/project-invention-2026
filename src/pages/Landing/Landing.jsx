import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Feedback from '../../components/Feedback/Feedback';
import Module from '../../components/ModuleGrid/ModuleGrid';
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

    
      <section id="latar-belakang" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Kenal namanya, tak tau wujudnya</h2>
        </div>
        <div className={styles.latarSplitGrid}>
          <div className={styles.latarImageWrapper}>
            <img 
              src="/assets/siswa-sma.jpg"
              // sumber : https://id.images.search.yahoo.com/search/images;_ylt=AwrKDca6ubpqKAIAW0bLQwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=foto+siswa+indonesia&fr2=piv-web&type=E210ID885G0&fr=mcafee&imgurl=https%3A%2F%2Fasset-2.tribunnews.com%2Ftrends%2Ffoto%2Fbank%2Fimages%2FSISWA-SMA-hgfnhfn.jpg 
              alt="Visualisasi Gambar 1" 
              className={styles.latarLandscapeImage}
            />
          </div>
          <div className={styles.textContent}>
            <p>
                Banyak siswa di Indonesia familiar dengan nama-nama organ tubuh, namun belum pernah melihat visualisasi bentuk aslinya secara nyata. AnatoMed hadir memecahkan masalah ini dengan menghadirkan visualisasi data tingkat lanjut berteknologi tiga dimensi, memungkinkan siswa mengeksplorasi setiap struktur anatomi secara interaktif dan presisi.
            </p>
          </div>
        </div>
      </section>
      <section id="fitur" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Keunggulan kami</h2>
          <p>Dirancang khusus untuk memaksimalkan pengalaman pengguna dalam belajar.</p>
        </div>
        <div className="fiturContent">

        </div>
        
        <div className={styles.fiturItem}>
          <div className={styles.latarImageWrapper}>
            <img 
              src="/assets/belajar-anatomi.jpg" 
              // sumber : https://unsplash.com/id/foto/dokter-gigi-memeriksa-pemindaian-gigi-3d-pada-tablet-oo12Hl9lu70
              alt="Belajar Anatomi" 
              className={styles.latarLandscapeImage}
              />
          </div>
          <div className={styles.textContent}>
            <div className={styles.fiturAngkaWrapper}>
              <h1 className={styles.fiturAngka}>1</h1>
            </div>
            <h3>Belajar mudah dan lengkap</h3>
            <p>
                AnatoMed hadir memecahkan masalah ini dengan menghadirkan visualisasi data tingkat lanjut berteknologi tiga dimensi.
            </p>
          </div>
        </div>
        
        <div className={styles.fiturItem}>
          <div className={styles.textContent}>
            <h3>Model Interaktif Organ Tiga Dimensi </h3>
            <p>
                Rotasi 360 derajat dan perbesar setiap sudut serabut otot maupun organ dalam.
            </p>
          </div>
          <div className={styles.fiturAngkaWrapper}>
            <h1 className={styles.fiturAngka}>2</h1>
          </div>
          <div className={styles.latarImageWrapper}>
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
          </div>
        </div>
        <div className={styles.fiturItem}>
          <div className={styles.latarImageWrapper}>
            <img 
              src="/assets/raise-hand.jpg"
              // sumber : https://unsplash.com/id/foto/guru-menunjuk-siswa-dengan-tangan-terangkat-HIheRKI9mTs 
              alt="Kuis di Kelas" 
              className={styles.latarLandscapeImage}
              />
          </div>
          <div className={styles.textContent}>
            <div className={styles.fiturAngkaWrapper}>
              <h1 className={styles.fiturAngka}>3</h1>
            </div>
            <h3>Kuis Uji Pemahaman</h3>
            <p>
                Uji sejauh mana pemahaman struktur organ kamu lewat kuis. Tingkatkan skor dan raih nilai tertinggi.
            </p>
          </div>
        </div>
        
      </section>
      {/* <section id="tentang-kami" className={styles.section}>
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
            
            <p></p>
            <div className={styles.cardImageMock}>🫀 Interactive Organ View</div>
          </div>

          
          <div className={`${styles.bentoCard} ${styles.cardSmall}`}>
            <div className={styles.bentoIcon}>🎯</div>
            <h3>Evaluasi Kuis</h3>
            <p>Uji sejauh mana pemahaman struktur organ kamu lewat kuis interaktif.</p>
          </div>
        </div>
      </section> */}

      
      <section id="eksplorasi" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Tips Belajar dalam 3 Langkah</h2>
          {/* <p>Desain intuitif yang memudahkan eksplorasi mandiri.</p> */}
        </div>

        <div className={styles.stepGrid}>
          <div className={`${styles.stepCard} ${styles.stepCard}`}>
            <div className={styles.activeCardContent}>
              <h3>Baca Materi</h3>
              <p>Evaluasi pemahamanmu dan dapatkan skor secara langsung.</p>
            </div>
          </div>
          <div className={`${styles.stepCard} ${styles.stepCard}`}>
            <div className={styles.activeCardContent}>
              <h3>Eksplorasi Nyata</h3>
              <p>Pahami Lebih Lanjut Dengan Visualisasi Tiga Dimensi</p>
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
      <Feedback />
      <Module />
      <Footer />

    </div>
    
  );
}
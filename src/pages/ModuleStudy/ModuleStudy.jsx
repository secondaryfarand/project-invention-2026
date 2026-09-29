import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MODULE_DATA } from '../../data/moduleData';
import { useProgress } from '../../hooks/userProgress';
import Button from '../../components/Button/Button';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import styles from './ModuleStudy.module.css';

export default function ModuleStudy({ onGoToQuiz }) {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { progress, markModuleAsRead } = useProgress();

  const currentModule = MODULE_DATA.find((m) => m.id === moduleId) || MODULE_DATA[0];
  const hasBeenRead = progress?.readModules?.includes(currentModule.id);

  const handleCompleteRead = () => {
    markModuleAsRead(currentModule.id);
  };

  // Handler untuk navigasi ke kuis
  const handleGoToQuiz = () => {
    if (onGoToQuiz) {
      onGoToQuiz(currentModule.id);
    } else {
      // Direct otomatis ke halaman kuis modul terkait
      // navigate(`/kuis/${currentModule.id}`);
      navigate(`/kuis`);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <div className={styles.pageContainer}>
        {/* Top Navigation Bar */}
        <div className={styles.topBar}>
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            ← Kembali
          </button>
          <span className={styles.breadcrumb}>
            Modul / {currentModule.title}
          </span>
        </div>

        <div className={styles.mainLayout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Daftar Modul</h3>
            <div className={styles.moduleNavList}>
              {MODULE_DATA.map((item) => {
                const isRead = progress?.readModules?.includes(item.id);
                const isActive = item.id === currentModule.id;
                return (
                  <Link
                    key={item.id}
                    to={`/modul/${item.id}`}
                    className={`${styles.navCard} ${isActive ? styles.activeNavCard : ''}`}
                  >
                    <div className={styles.cardInfo}>
                      <span className={styles.categoryTag}>{item.category}</span>
                      <h4 className={styles.cardTitle}>{item.title}</h4>
                    </div>
                    {isRead && <span className={styles.checkBadge}>✓ Selesai</span>}
                  </Link>
                );
              })}
            </div>
          </aside>

          {/* Main Reader Content */}
          <main className={styles.readerContent}>
            {currentModule.image && (
              <div className={styles.bannerWrapper}>
                <img
                  src={currentModule.image}
                  alt={currentModule.title}
                  className={styles.heroBanner}
                />
              </div>
            )}

            <div className={styles.headerBlock}>
              <span className={styles.categoryBadge}>{currentModule.category}</span>
              <h1 className={styles.title}>{currentModule.title}</h1>
              <span className={styles.readTime}>⏱ Estimasi Baca: {currentModule.readTime}</span>
            </div>

            <p className={styles.overview}>{currentModule.content?.overview}</p>

            {currentModule.content?.sections?.map((sec, idx) => (
              <section key={idx} className={styles.materiSection}>
                <h2>{sec.heading}</h2>
                <p>{sec.text}</p>
                {sec.list && (
                  <ul className={styles.materiList}>
                    {sec.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {currentModule.content?.clinicalNote && (
              <div className={styles.clinicalBox}>
                <p>{currentModule.content.clinicalNote}</p>
              </div>
            )}

            {/* Action Footer */}
            <div className={styles.actionFooter}>
              {hasBeenRead ? (
                <div className={styles.completedBanner}>
                  <span>🎉 Modul ini sudah selesai kamu pelajari!</span>
                  <Button variant="primary" onClick={handleGoToQuiz}>
                    Uji Pemahaman di Kuis ↗
                  </Button>
                </div>
              ) : (
                <button className={styles.completeBtn} onClick={handleCompleteRead}>
                  Selesai Membaca & Tandai Selesai
                </button>
              )}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
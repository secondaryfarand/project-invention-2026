// import React, { useState } from 'react';
// import ModelViewer from '../components/ModelViewer';
// import InfoPanel from '../components/InfoPanel/InfoPanel';
// // import { auth, signOut } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// export default function Dashboard({ user }) {
//   // const [selectedOrgan, setSelectedOrgan] = useState(null);
//   // const navigate = useNavigate();

//   // const handleLogout = () => {
//   //   signOut(auth).then(() => navigate('/'));
//   // };

//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
//       <header style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px' }}>
//         <div>
//           <h1 style={{ margin: 0 }}>Human Anatomy Explorer 3D</h1>
//           <p style={{ margin: 0, color: '#666' }}>Selamat belajar, {user?.displayName || 'User'}!</p>
//         </div>
//         {/* <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Logout</button> */}
//       </header>

//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '20px' }}>
//         <div>
//           {/* <ModelViewer onOrganSelect={setSelectedOrgan} /> */}
//         </div>
//         <div>
//           {/* <InfoPanel selectedOrgan={selectedOrgan} /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useProgress } from '../../hooks/userProgress';

import Navbar from '../../components/Navbar/Navbar';
import styles from './Dashboard.module.css';

// Master Data Sistem Organ & Badge
const SYSTEM_DATA = [
  { id: 'peredarandarah', name: 'Peredaran Darah', totalOrgans: 2, completedOrgans: 1 },
  { id: 'pernapasan', name: 'Pernapasan', totalOrgans: 2, completedOrgans: 0 },
  { id: 'pencernaan', name: 'Pencernaan', totalOrgans: 2, completedOrgans: 0 },
  { id: 'rangka', name: 'Rangka', totalOrgans: 2, completedOrgans: 1 },
  { id: 'saraf', name: 'Saraf', totalOrgans: 2, completedOrgans: 2 },
  { id: 'eksresi', name: 'Ekskresi', totalOrgans: 2, completedOrgans: 0 },
];

const BADGES = [
  { id: 'pembelajar_pemula', title: 'Penjelajah Pemula', icon: '🎓', desc: 'Membaca modul organ pertama' },
  { id: 'ahli_kardiologi', title: 'Ahli Kardiologi', icon: '🫀', desc: 'Mempelajari modul Jantung' },
  { id: 'master_jantung', title: 'Master Kardiologi', icon: '🏆', desc: 'Meraih skor 100 pada kuis Jantung' },
  { id: 'pakar_saraf', title: 'Pakar Neuro', icon: '🧠', desc: 'Selesaikan seluruh sistem saraf' },
];

export default function Dashboard(onGoToDashboard) {
  const { progress, resetProgress } = useProgress();

  // Kalkulasi Stat
  const totalOrgansLearned = progress.readModules.length;
  const quizValues = Object.values(progress.quizScores);
  const avgScore = quizValues.length > 0 
    ? Math.round(quizValues.reduce((a, b) => a + b, 0) / quizValues.length) 
    : 0;

  return (
    <div className={styles.dashboardContainer}>
      <Navbar onNavigateDashboard={onGoToDashboard} />
      <div className={styles.headerRow}>
        <div>
          <h1 className={styles.title}>Dashboard Capaian</h1>
          <p className={styles.subtitle}>Pantau progres belajar dan koleksi lencana prestasimu.</p>
        </div>
        <button onClick={resetProgress} className={styles.resetBtn}>Reset Data</button>
      </div>

      {/* Metric Cards Top Row */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Organ Dipelajari</span>
          <div className={styles.metricValue}>
            {totalOrgansLearned}<span className={styles.metricTotal}>/12</span>
          </div>
        </div>

        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Skor Kuis Rata-Rata</span>
          <div className={styles.metricValue}>{avgScore}%</div>
        </div>

        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Lencana Diraih</span>
          <div className={styles.metricValue}>{progress.unlockedBadges.length}</div>
        </div>
      </div>

      {/* Section Badge Achievement */}
      <div className={styles.sectionCard}>
        <h2 className={styles.sectionTitle}>Lencana Pencapaian</h2>
        <div className={styles.badgeGrid}>
          {BADGES.map((badge) => {
            const isUnlocked = progress.unlockedBadges.includes(badge.id);
            return (
              <div 
                key={badge.id} 
                className={`${styles.badgeCard} ${isUnlocked ? styles.unlocked : styles.locked}`}
              >
                <div className={styles.badgeIcon}>{badge.icon}</div>
                <div className={styles.badgeInfo}>
                  <h4>{badge.title}</h4>
                  <p>{badge.desc}</p>
                </div>
                {!isUnlocked && <span className={styles.lockTag}>🔒 Terkunci</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Visual Progress System */}
      <div className={styles.sectionCard}>
        <h2 className={styles.sectionTitle}>Progres per Sistem Tubuh</h2>
        <div className={styles.systemList}>
          {SYSTEM_DATA.map((sys) => {
            const percentage = Math.round((sys.completedOrgans / sys.totalOrgans) * 100);
            return (
              <div key={sys.id} className={styles.systemItem}>
                <div className={styles.systemLabelRow}>
                  <span className={styles.systemName}>{sys.name} ({sys.completedOrgans}/{sys.totalOrgans} organ)</span>
                  <span className={styles.systemPercent}>{percentage}%</span>
                </div>
                <div className={styles.progressBarTrack}>
                  <div 
                    className={styles.progressBarFill} 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
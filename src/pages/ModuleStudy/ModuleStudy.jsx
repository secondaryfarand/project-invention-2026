import React, { useState } from 'react';
import { useProgress } from '../../hooks/userProgress';
import Button from '../../components/Button/Button';
import styles from './ModuleStudy.module.css';

// Master Data Modul Pembelajaran Anatomi
const MODULE_DATA = [
  {
    id: 'jantung',
    systemId: 'peredarandarah',
    title: 'Anatomi & Fisiologi Jantung',
    category: 'Sistem Peredaran Darah',
    readTime: '5 Menit',
    badgeTarget: 'ahli_kardiologi',
    summary: 'Organ berotot sebesar kepalan tangan yang berfungsi memompa darah ke seluruh tubuh.',
    content: {
      overview: 'Jantung adalah organ vital dalam sistem kardiovaskular manusia. Berdetak sekitar 100.000 kali per hari, organ ini memompa sekitar 7.500 liter darah setiap harinya untuk mengalirkan oksigen dan nutrisi.',
      structures: [
        { name: 'Atrium Kanan', desc: 'Menerima darah kaya karbondioksida dari seluruh tubuh melalui vena cava.' },
        { name: 'Ventrikel Kanan', desc: 'Memompa darah kotor menuju paru-paru untuk proses pertukaran gas.' },
        { name: 'Atrium Kiri', desc: 'Menerima darah bersih kaya oksigen yang kembali dari paru-paru.' },
        { name: 'Ventrikel Kiri', desc: 'Dinding otot paling tebal; memompa darah kaya oksigen ke seluruh tubuh melalui aorta.' }
      ],
      clinicalNote: 'Penyakit Jantung Koroner (PJK) terjadi akibat penumpukan plak pada pembuluh darah koroner yang menyuplai otot jantung.'
    }
  },
  {
    id: 'paruparu',
    systemId: 'pernapasan',
    title: 'Sistem Paru-Paru & Respirasi',
    category: 'Sistem Pernapasan',
    readTime: '6 Menit',
    badgeTarget: 'pakar_respirasi',
    summary: 'Organ utama pertukaran gas oksigen dan karbon dioksida di dalam tubuh.',
    content: {
      overview: 'Paru-paru terdiri dari jutaan kantung udara kecil yang disebut alveolus. Di sinilah tempat terjadinya pertukaran gas antara udara luar dan sel darah merah.',
      structures: [
        { name: 'Bronkus & Bronkiolus', desc: 'Saluran udara bercabang yang mengarahkan udara dari trakea masuk ke paru-paru.' },
        { name: 'Alveolus', desc: 'Kantung tipis bermembran tempat terjadinya difusi O2 dan CO2 secara langsung.' },
        { name: 'Pleura', desc: 'Membran ganda pelindung yang melumasi paru-paru saat mengembang dan mengempis.' }
      ],
      clinicalNote: 'Kapasitas vital paru-paru rata-rata orang dewasa berkisar antara 3 hingga 5 liter tergantung postur tubuh dan kebiasaan fisik.'
    }
  }
];

export default function ModuleStudy({ onGoToQuiz }) {
  const [selectedModule, setSelectedModule] = useState(MODULE_DATA[0]);
  const [isCompleted, setIsCompleted] = useState(false);
  const { progress, markModuleAsRead } = useProgress();

  // Cek apakah modul ini sudah pernah dibaca berdasarkan localStorage
  const hasBeenRead = progress.readModules.includes(selectedModule.id);

  const handleSelectModule = (moduleItem) => {
    setSelectedModule(moduleItem);
    setIsCompleted(false);
  };

  const handleCompleteRead = () => {
    // 1. Panggil hook untuk menyimpan status ke localStorage
    markModuleAsRead(selectedModule.id);
    setIsCompleted(true);
  };

  return (
    <div className={styles.container}>
      {/* Sidebar: List Pilihan Modul */}
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Pilih Modul Belajar</h3>
        <div className={styles.moduleList}>
          {MODULE_DATA.map((item) => {
            const isRead = progress.readModules.includes(item.id);
            const isActive = selectedModule.id === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.moduleCard} ${isActive ? styles.activeCard : ''}`}
                onClick={() => handleSelectModule(item)}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.categoryTag}>{item.category}</span>
                  {isRead && <span className={styles.checkBadge}>✓ Selesai</span>}
                </div>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
                <span className={styles.readTime}>⏱ {item.readTime}</span>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main Area: Reader Materi Lengkap */}
      <main className={styles.readerArea}>
        <div className={styles.readerHeader}>
          <span className={styles.categoryBadge}>{selectedModule.category}</span>
          <h1>{selectedModule.title}</h1>
          <p className={styles.overviewText}>{selectedModule.content.overview}</p>
        </div>

        {/* Detail Struktur Organ */}
        <section className={styles.sectionBlock}>
          <h3>Struktur & Bagian Utama</h3>
          <div className={styles.structureGrid}>
            {selectedModule.content.structures.map((struct, idx) => (
              <div key={idx} className={styles.structureCard}>
                <h4>{struct.name}</h4>
                <p>{struct.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Catatan Medis / Klinis */}
        <section className={styles.clinicalBox}>
          <h4>💡 Catatan Klinis & Edutech</h4>
          <p>{selectedModule.content.clinicalNote}</p>
        </section>

        {/* Action Area: Menyimpan ke LocalStorage & Integrasi Kuis */}
        <div className={styles.actionFooter}>
          {hasBeenRead || isCompleted ? (
            <div className={styles.completedBanner}>
              <span>🎉 Modul ini sudah ditandai selesai! Progres tersimpan di Dashboard.</span>
              <Button variant="primary" onClick={onGoToQuiz}>
                Uji Pemahaman di Kuis ↗
              </Button>
            </div>
          ) : (
            <button className={styles.completeBtn} onClick={handleCompleteRead}>
              Selesai Membaca & Catat Progres
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
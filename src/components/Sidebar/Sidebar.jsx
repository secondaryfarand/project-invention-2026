import styles from './Sidebar.module.css';

export default function Sidebar({ activeOrgan , onSelectPart }) {
  if (!activeOrgan) return null;
  const parts = activeOrgan.parts || [];
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <span className={styles.badge}>Preview Model 3D</span>
        <h1 className={styles.title}>{activeOrgan.title}</h1>
        <p className={styles.description}>
          Eksplorasi struktur lapisan otot utama manusia secara interaktif.
        </p>
      </div>

      <div className={styles.organSection}>
        <h2 className={styles.sectionTitle}>Pilih Bagian Anatomi</h2>
        
        {/* Render tombol secara otomatis (dinamis) berdasarkan isi 'parts' */}
        {parts.length > 0 ? (
          parts.map((part) => (
            <button 
              key={part.id} 
              className={styles.organButton} 
              // Ketika diklik, kirim wikiQuery dari part tersebut
              onClick={() => onSelectPart(part.wikiQuery)}
            >
              {part.name}
            </button>
          ))
        ) : (
          <p className={styles.description}>
            Tidak ada sub-bagian untuk model ini.
          </p>
        )}

        {/* Tombol Reset */}
        <button className={styles.resetButton} onClick={() => onSelectPart(activeOrgan.wikiQuery)}>
          🔄 Reset Posisi Kamera
        </button>
      </div>

      <div className={styles.authorCard}>
        Model oleh{' '}
        <a href="https://sketchfab.com" target="_blank" rel="noopener noreferrer" className={styles.authorLink}>
          Sketchfab
        </a>
      </div>
    </aside>
  );
}
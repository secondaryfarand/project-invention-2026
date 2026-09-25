import styles from './CategoryGrid.module.css';

const CATEGORY_DATA = [
  {
    id: 'fnb',
    title: 'F&B',
    description: 'Kelola inventaris bahan, resep, serta manajemen pesanan restoran dan kafe secara efisien.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'konstruksi',
    title: 'Konstruksi',
    description: 'Pantau proyek, anggaran, material, dan kontraktor dengan timeline yang akurat serta transparansi biaya.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pendidikan',
    title: 'Pendidikan',
    description: 'Sistem manajemen akademik, kurikulum, dan administrasi siswa yang terintegrasi.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pemerintahan',
    title: 'Pemerintahan',
    description: 'Digitalisasi layanan publik dan kearsipan dengan sistem keamanan tingkat tinggi.',
    image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pertanian',
    title: 'Pertanian',
    description: 'Monitoring kondisi lahan, penjadwalan panen, serta rantai pasok hasil tani modern.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pertambangan',
    title: 'Pertambangan',
    description: 'Pengawasan alat berat, logistik hasil tambang, dan manajemen keselamatan kerja.',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
  },
];

export default function CategoryGrid() {
  return (
    <section className={styles.sectionContainer} aria-label="Kategori Sektor">
      <div className={styles.cardGrid}>
        {CATEGORY_DATA.map((item) => (
          <article key={item.id} className={styles.categoryCard} tabIndex={0}>
            <figure className={styles.imageWrapper}>
              <img
                src={item.image}
                alt={`Sektor ${item.title}`}
                className={styles.cardImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
            </figure>

            <figcaption className={styles.cardCaption}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </figcaption>
          </article>
        ))}
      </div>
    </section>
  );
}
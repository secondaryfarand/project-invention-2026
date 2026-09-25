import React, { useState, useEffect } from 'react';
import styles from './InfoPanel.module.css';

export default function InfoPanel({ query }) {
  const [wikiData, setWikiData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Jika tidak ada query (misal belum ada bagian yang dipilih), kosongkan data
    if (!query) {
      setWikiData(null);
      return;
    }

    const fetchWikiData = async () => {
      setWikiData(null);
      setLoading(true);

      try {
        const url = `https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Respon Wikipedia API bermasalah: ' + response.status);
        }

        const data = await response.json();

        setWikiData({
          title: data.title,
          desc: data.extract || 'Informasi ringkasan medis belum tersedia dalam Bahasa Indonesia.',
          img: data.thumbnail?.source
        });
      } catch (error) {
        console.error('Gagal mengambil data dari API Wikipedia:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWikiData();
  }, [query]); // Re-fetch otomatis setiap kali 'query' berubah

  return (
    <section className={styles.infoPanel}>
      <h3 className={styles.sectionTitle}>Eksplorasi Ensiklopedia Medis</h3>

      {loading ? (
        <p className={styles.statusText}>
          Menghubungkan ke API Wikipedia & mengunduh ringkasan medis...
        </p>
      ) : wikiData ? (
        <div className={styles.content}>
          <h4 className={styles.wikiTitle}>{wikiData.title}</h4>
          {wikiData.img && (
            <img src={wikiData.img} alt={wikiData.title} className={styles.wikiImg} />
          )}
          <p className={styles.wikiText}>{wikiData.desc}</p>
        </div>
      ) : (
        <p className={styles.placeholderText}>
          Silakan klik salah satu target bagian pada menu bar sebelah kiri untuk menampilkan informasi medis.
        </p>
      )}
    </section>
  );
}

// import React, { useState, useEffect } from 'react';

// export default function InfoPanel({ selectedOrgan }) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!selectedOrgan) return;

//     const fetchMedData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`https://wikipedia.org{selectedOrgan}`);
//         const result = await res.json();
//         setData({
//           title: result.title,
//           description: result.extract,
//           img: result.thumbnail?.source,
//         });
//       } catch (err) {
//         console.error("Gagal memuat API Wikipedia", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMedData();
//   }, [selectedOrgan]);

//   if (!selectedOrgan) {
//     return <div style={{ padding: '20px', color: '#888' }}>Pilih/Klik salah satu organ 3D untuk melihat informasi medis.</div>;
//   }

//   return (
//     <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
//       {loading ? (
//         <p>Mengambil data medis terbaru dari API...</p>
//       ) : data ? (
//         <div>
//           <h2 style={{ marginTop: 0, color: '#333' }}>{data.title}</h2>
//           {data.img && <img src={data.img} alt={data.title} style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '15px' }} />}
//           <p style={{ color: '#555', lineHeight: '1.6' }}>{data.description}</p>
//         </div>
//       ) : (
//         <p>Data tidak ditemukan.</p>
//       )}
//     </div>
//   );
// }

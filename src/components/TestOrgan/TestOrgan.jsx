// import React, { useState, useEffect, useRef } from 'react';
// import styles from './TestOrgan.module.css';

// export default function TestOrgan() {
//   const [selectedOrgan, setSelectedOrgan] = useState(null);
//   const [wikiData, setWikiData] = useState(null);
//   const [loadingWiki, setLoadingWiki] = useState(false);

//   // Ref & State untuk Sketchfab API
//   const iframeRef = useRef(null);
//   const [sketchfabApi, setSketchfabApi] = useState(null);

//   // 1. Memuat Script Sketchfab API secara dinamis di React
//   useEffect(() => {
//     // Cek apakah script sudah pernah di-load sebelumnya
//     const existingScript = document.getElementById('sketchfab-api-script');

//     const initSketchfab = () => {
//       if (!iframeRef.current || !window.Sketchfab) return;

//       const client = new window.Sketchfab(iframeRef.current);
//       client.init('e8239f94d87b4e278f0cf02dbad1a330', {
//         success: (api) => {
//           api.start();
//           api.addEventListener('viewerready', () => {
//             setSketchfabApi(api); // Simpan API ketika viewer sudah siap
//           });
//         },
//         error: () => console.error('Gagal memuat Sketchfab Viewer API'),
//         autostart: 1,
//         ui_theme: 'light',
//         cardboard: 0,
//         ui_ar: 0
//       });
//     };

//     if (!existingScript) {
//       const script = document.createElement('script');
//       script.id = 'sketchfab-api-script';
//       script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
//       script.async = true;
//       script.onload = () => initSketchfab();
//       document.body.appendChild(script);
//     } else {
//       initSketchfab();
//     }
//   }, []);

//   // 2. Fetch Data dari API Wikipedia
//   useEffect(() => {
//     if (!selectedOrgan) return;

//     const fetchWikiData = async () => {
//       setWikiData(null);
//       setLoadingWiki(true);
      
//       try {
//         const domain = "https://id.wikipedia.org";
//         const pathPath = `/api/rest_v1/page/summary/${encodeURIComponent(selectedOrgan)}`;
//         const response = await fetch(domain + pathPath);
        
//         if (!response.ok) throw new Error("Respon Wikipedia bermasalah");

//         const data = await response.json();
//         setWikiData({
//           title: data.title,
//           desc: data.extract || 'Informasi ringkasan medis belum tersedia.',
//           img: data.thumbnail?.source
//         });
//       } catch (error) {
//         console.error("Gagal mengambil data dari API Wikipedia:", error);
//       } finally {
//         setLoadingWiki(false);
//       }
//     };

//     fetchWikiData();
//   }, [selectedOrgan]);

// // 1. Definisikan Titik Koordinat Kamera & Target untuk Masing-masing Otot
// // Format: [PosisiKamera_X, Y, Z], [TargetPandang_X, Y, Z], DurasiDetik
// const MUSCLE_CAMERA_PRESETS = {
//   Otot_biseps: {
//     eye: [30, 20, 90],      // Posisi kamera mendekat ke lengan depan
//     target: [0.15, 0.1, 40],    // Titik pusat pandangan di otot bisep kiri, kanan, tinggi
//     duration: 1.8
//   },
//   Otot_pektoralis_mayor: {
//     eye: [0.0, -1.4, 1.45],       // Posisi kamera lurus di depan dada
//     target: [0.0, 0.05, 1.35],    // Titik pusat pandangan di dada
//     duration: 1.8
//   },
//   Otot_deltoideus: {
//     eye: [0.55, -1.0, 1.5],       // Posisi kamera dari arah samping bahu
//     target: [0.2, 0.0, 1.45],     // Titik pusat pandangan di bahu
//     duration: 1.8
//   },
//   Hamstring: {
//     eye: [0.0, -1.8, 0.6],        // Posisi kamera lebih rendah ke area paha/betis
//     target: [0.0, 0.0, 0.5],      // Titik pusat pandangan di kaki
//     duration: 1.8
//   },
//   reset: {
//     eye: [50.0, -140.2, 100.0],        // Posisi kamera kembali ke tampilan awal (seluruh tubuh)
//     target: [0.0, 0.0, 40.9],
//     duration: 1.5
//   }
// };

// // 2. Perbarui Handler Tombol Pilih Otot
// const handleSelectMuscle = (muscleWikiName) => {
//   setSelectedOrgan(muscleWikiName);

//   if (!sketchfabApi) {
//     console.warn("API Sketchfab belum siap!");
//     return;
//   }

//   // Ambil data koordinat berdasarkan nama otot yang diklik
//   const presetKey = muscleWikiName || 'reset';
//   const preset = MUSCLE_CAMERA_PRESETS[presetKey];

//   if (preset) {
//     // Perintahkan kamera Sketchfab meluncur ke koordinat tujuan
//     sketchfabApi.setCameraLookAt(
//       preset.eye,      // Posisi Kamera
//       preset.target,   // Titik Fokus
//       preset.duration, // Durasi Animasi (detik)
//       (err) => {
//         if (err) console.error("Gagal menggerakkan kamera:", err);
//       }
//     );
//   }
// };
//   return (
//     <div className={styles.container}>
      
//       {/* KOLOM 1: SIDEBAR */}
//       <aside className={styles.sidebar}>
//         <div className={styles.header}>
//           <span className={styles.badge}>Preview Model 3D</span>
//           <h1 className={styles.title}>Anatomi Ecorche</h1>
//           <p className={styles.description}>
//             Eksplorasi struktur lapisan otot utama manusia secara interaktif.
//           </p>
//         </div>

//         <div className={styles.organSection}>
//           <h2 className={styles.sectionTitle}>Pilih Sistem Otot</h2>
          
//             <button 
//                 className={styles.organButton} 
//                 onClick={() => handleSelectMuscle('Otot_biseps')}
//                 >
//                 💪 Otot Bisep (Biceps)
//                 </button>

//                 <button 
//                 className={styles.organButton} 
//                 onClick={() => handleSelectMuscle('Otot_pektoralis_mayor')}
//                 >
//                 🫁 Otot Dada (Pectoralis)
//                 </button>

//                 <button 
//                 className={styles.organButton} 
//                 onClick={() => handleSelectMuscle('Otot_deltoideus')}
//                 >
//                 🦾 Otot Bahu (Deltoid)
//                 </button>

//                 <button 
//                 className={styles.organButton} 
//                 onClick={() => handleSelectMuscle('Hamstring')}
//                 >
//                 🦵 Otot Betis / Paha (Legs)
//                 </button>

//                 <button 
//                 className={styles.organButton}
//                 style={{ marginTop: '12px', background: '#e2e8f0' }}
//                 onClick={() => handleSelectMuscle(null)}
//                 >
//                 🔄 Reset Posisi Kamera
//             </button>
//         </div>

//         <div className={styles.authorCard}>
//           Model oleh{' '}
//           <a href="https://sketchfab.com" target="_blank" rel="noopener noreferrer" className={styles.authorLink}>
//             gorecraze
//           </a>{' '}
//           di Sketchfab
//         </div>
//       </aside>

//       {/* KOLOM 2: VIEWER 3D */}
//       <main className={styles.viewerContainer}>
//         <div className={styles.iframeWrapper}>
//           <iframe
//             ref={iframeRef}
//             id="api-frame"
//             title="Ecorche Anatomy Study"
//             className={styles.iframe}
//             allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
//           />
//         </div>
//       </main>

//       {/* KOLOM 3: WIKIPEDIA PANEL */}
//       <section className={styles.infoPanel}>
//         <h3 className={styles.sectionTitle}>Eksplorasi Ensiklopedia Medis</h3>
        
//         {loadingWiki ? (
//           <p style={{ color: '#475569', fontStyle: 'italic', fontSize: '14px', marginTop: '15px' }}>
//             Menghubungkan ke API Wikipedia...
//           </p>
//         ) : wikiData ? (
//           <div style={{ marginTop: '15px' }}>
//             <h4 className={styles.wikiTitle}>{wikiData.title}</h4>
//             {wikiData.img && (
//               <img src={wikiData.img} alt={wikiData.title} className={styles.wikiImg} />
//             )}
//             <p className={styles.wikiText}>{wikiData.desc}</p>
//           </div>
//         ) : (
//           <p style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '14px', marginTop: '15px' }}>
//             Silakan klik salah satu target sistem otot pada menu bar sebelah kiri.
//           </p>
//         )}
//       </section>

//     </div>
//   );
// }





import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Viewer3D from '../Viewer3D/Viewer3D';
import InfoPanel from '../InfoPanel/InfoPanel';

import { ORGAN_LIST } from '../../data/organData';
import { MUSCLE_CAMERA_PRESETS } from '../../constants/musclePresets';
import styles from './TestOrgan.module.css';

export default function TestOrgan() {
  const { id } = useParams();
  const navigate = useNavigate();

  const activeOrgan = ORGAN_LIST.find((item) => item.id === id);
  const [selectedOrgan, setSelectedOrgan] = useState(activeOrgan?.wikiQuery || null);
  // const [wikiData, setWikiData] = useState(null);
  // const [loadingWiki, setLoadingWiki] = useState(false);
  const [sketchfabApi, setSketchfabApi] = useState(null);

  const handleApiReady = useCallback((api) => {
    setSketchfabApi(api);
  }, []);

  // useEffect(() => {
  //   if (!selectedOrgan) return;

  //   const fetchWikiData = async () => {
  //     setWikiData(null);
  //     setLoadingWiki(true);
      
  //     try {
  //       const url = `https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(selectedOrgan)}`;
  //       const response = await fetch(url);
        
  //       if (!response.ok) {
  //         throw new Error('Respon Wikipedia API bermasalah: ' + response.status);
  //       }
  //       const data = await response.json();
  //       setWikiData({
  //         title: data.title,
  //         desc: data.extract || 'Informasi ringkasan medis belum tersedia dalam Bahasa Indonesia.',
  //         img: data.thumbnail?.source
  //       });
  //     } catch (error) {
  //       console.error('Gagal mengambil data dari API Wikipedia:', error);
  //     } finally {
  //       setLoadingWiki(false);
  //     }
  //   };

  //   fetchWikiData();
  // }, [selectedOrgan]);

  const handleSelectParts = (partsWikiName) => {
    setSelectedOrgan(partsWikiName);

    if (sketchfabApi) {
      const presetKey = partsWikiName || 'reset';
      const preset = MUSCLE_CAMERA_PRESETS[presetKey];

      if (preset) {
        sketchfabApi.setCameraLookAt(preset.eye, preset.target, preset.duration);
      }
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate('/menu')}>
        ← Kembali ke Galeri
      </button>
      <Sidebar activeOrgan={activeOrgan} onSelectPart={handleSelectParts} />
      <Viewer3D modelId={activeOrgan?.sketchfabId} onApiReady={handleApiReady} />
      <InfoPanel query={selectedOrgan} />
    </div>
  );
}




// import React, { useState, useEffect, useRef } from 'react';
// import styles from './TestOrgan.module.css';

// // Preset Koordinat Kamera & Fokus untuk Setiap Otot
// const MUSCLE_CAMERA_PRESETS = {
//   Otot_biseps: {
//     eye: [0.35, -1.2, 1.35],      // Posisi kamera mendekat ke lengan depan
//     target: [0.15, 0.1, 1.25],    // Titik pusat pandangan di otot bisep
//     duration: 1.8
//   },
//   Otot_pektoralis_mayor: {
//     eye: [0.0, -1.4, 1.45],       // Posisi kamera lurus di depan dada
//     target: [0.0, 0.05, 1.35],    // Titik pusat pandangan di dada
//     duration: 1.8
//   },
//   Otot_deltoideus: {
//     eye: [0.55, -1.0, 1.5],       // Posisi kamera dari arah samping bahu
//     target: [0.2, 0.0, 1.45],     // Titik pusat pandangan di bahu
//     duration: 1.8
//   },
//   Hamstring: {
//     eye: [0.0, -1.8, 0.6],        // Posisi kamera lebih rendah ke area paha/betis
//     target: [0.0, 0.0, 0.5],      // Titik pusat pandangan di kaki
//     duration: 1.8
//   },
//   reset: {
//     eye: [0.0, -3.2, 1.0],        // Posisi kamera kembali ke tampilan awal
//     target: [0.0, 0.0, 0.9],
//     duration: 1.5
//   }
// };

// export default function TestOrgan() {
//   const [selectedOrgan, setSelectedOrgan] = useState(null);
//   const [wikiData, setWikiData] = useState(null);
//   const [loadingWiki, setLoadingWiki] = useState(false);

//   // Ref dan State untuk mengendalikan API Sketchfab pada iframe
//   const iframeRef = useRef(null);
//   const [sketchfabApi, setSketchfabApi] = useState(null);

//   // 1. Memuat Script API Sketchfab dan menghubungkannya ke ref iframe
//   useEffect(() => {
//     const initSketchfabAPI = () => {
//       if (!iframeRef.current || !window.Sketchfab) return;

//       const client = new window.Sketchfab(iframeRef.current);
//       client.init('92f7c2ab8f5246d2b15b8fc950ad31dd', {
//       // client.init('911272d9f7c146bea5403d1e4d2dfb31', {
//       // client.init('8634c4334f4d4059a2c89e8eafef5bc8', {
//         success: (api) => {
//           api.start();
//           api.addEventListener('viewerready', () => {
//             setSketchfabApi(api); // Instance API siap digunakan
//           });
//         },
//         error: () => console.error('Gagal menginisialisasi Sketchfab Viewer API')
//       });
//     };

//     // Muat script SDK Sketchfab secara dinamis jika belum ada
//     const existingScript = document.getElementById('sketchfab-api-script');
//     if (!existingScript) {
//       const script = document.createElement('script');
//       script.id = 'sketchfab-api-script';
//       script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
//       script.async = true;
//       script.onload = () => initSketchfabAPI();
//       document.body.appendChild(script);
//     } else {
//       initSketchfabAPI();
//     }
//   }, []);

//   // 2. Hook Efek untuk memanggil API Wikipedia saat organ dipilih
//   useEffect(() => {
//     if (!selectedOrgan) return;

//     const fetchWikiData = async () => {
//       setWikiData(null);
//       setLoadingWiki(true);
      
//       try {
//         const domain = "https://id.wikipedia.org";
//         const pathPath = `/api/rest_v1/page/summary/${encodeURIComponent(selectedOrgan)}`;
//         const finalValidUrl = domain + pathPath;

//         console.log("Menembak API Resmi ke: ", finalValidUrl);

//         const response = await fetch(finalValidUrl);
        
//         if (!response.ok) {
//           throw new Error("Respon Wikipedia API bermasalah: " + response.status);
//         }

//         const data = await response.json();
        
//         setWikiData({
//           title: data.title,
//           desc: data.extract || 'Informasi ringkasan medis belum tersedia dalam Bahasa Indonesia.',
//           img: data.thumbnail?.source
//         });
//       } catch (error) {
//         console.error("Gagal mengambil data dari API Wikipedia:", error);
//       } finally {
//         setLoadingWiki(false);
//       }
//     };

//     fetchWikiData();
//   }, [selectedOrgan]);

//   // 3. Handler Tombol Otot (Mengatur Wikipedia + Menggerakkan Kamera 3D)
//   const handleSelectMuscle = (muscleWikiName) => {
//     setSelectedOrgan(muscleWikiName); // Picu Wikipedia API

//     // Pergerakan Kamera 3D menggunakan SDK Sketchfab
//     if (sketchfabApi) {
//       const presetKey = muscleWikiName || 'reset';
//       const preset = MUSCLE_CAMERA_PRESETS[presetKey];

//       if (preset) {
//         sketchfabApi.setCameraLookAt(preset.eye, preset.target, preset.duration, (err) => {
//           if (err) console.error("Error menggerakkan kamera:", err);
//         });
//       }
//     }
//   };

//   return (
//     <div className={styles.container}>
      
//       {/* ==========================================
//           KOLOM 1: SIDEBAR NAVIGASI INTERAKTIF ORGAN 
//           ========================================== */}
//       <aside className={styles.sidebar}>
//         <div className={styles.header}>
//           <span className={styles.badge}>Preview Model 3D</span>
//           <h1 className={styles.title}>Anatomi Ecorche</h1>
//           <p className={styles.description}>
//             Eksplorasi struktur lapisan otot utama manusia secara interaktif.
//           </p>
//         </div>

//         <div className={styles.organSection}>
//           <h2 className={styles.sectionTitle}>Pilih Sistem Otot</h2>
          
//           <button 
//             className={styles.organButton} 
//             onClick={() => handleSelectMuscle('Otot_biseps')}
//           >
//             💪 Otot Bisep (Biceps)
//           </button>
          
//           <button 
//             className={styles.organButton} 
//             onClick={() => handleSelectMuscle('Otot_pektoralis_mayor')}
//           >
//             🫁 Otot Dada (Pectoralis)
//           </button>
          
//           <button 
//             className={styles.organButton} 
//             onClick={() => handleSelectMuscle('Otot_deltoideus')}
//           >
//             🦾 Otot Bahu (Deltoid)
//           </button>
          
//           <button 
//             className={styles.organButton} 
//             onClick={() => handleSelectMuscle('Hamstring')}
//           >
//             🦵 Otot Betis (Gastrocnemius)
//           </button>

//           <button 
//             className={styles.organButton}
//             style={{ marginTop: '12px', background: '#e2e8f0' }}
//             onClick={() => handleSelectMuscle(null)}
//           >
//             🔄 Reset Posisi Kamera
//           </button>
//         </div>

//         <div className={styles.authorCard}>
//           Model oleh{' '}
//           <a href="https://sketchfab.com" target="_blank" rel="noopener noreferrer" className={styles.authorLink}>
//             gorecraze
//           </a>{' '}
//           di {' '}
//           <a href="https://sketchfab.com" target="_blank" rel="noopener noreferrer" className={styles.authorLink}>
//             Sketchfab
//           </a>
//         </div>
//       </aside>

//       {/* ==========================================
//           KOLOM 2: AREA VIEWER 3D EMBED LOKAL 
//           ========================================== */}
//       <main className={styles.viewerContainer}>
//         <div className={styles.iframeWrapper}>
//           <iframe
//             ref={iframeRef}
//             title="Ecorche Anatomy Study"
//             className={styles.iframe}
//             src={`https://sketchfab.com/models/92f7c2ab8f5246d2b15b8fc950ad31dd/embed?autostart=1&preload=1&ui_theme=light&ui_ar=0&cardboard=0`} 
//             allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
//             xr-spatial-tracking="true"
//             execution-while-out-of-viewport="true"
//             execution-while-not-rendered="true"
//             web-share="true"
//             mozallowfullscreen="true"
//             webkitallowfullscreen="true"
//           />
//         </div>
//       </main>

//       {/* ==========================================
//           KOLOM 3: PANEL INTEGRASI TEKS API WIKIPEDIA 
//           ========================================== */}
//       <section className={styles.infoPanel}>
//         <h3 className={styles.sectionTitle}>Eksplorasi Ensiklopedia Medis</h3>
        
//         {loadingWiki ? (
//           <p style={{ color: '#475569', fontStyle: 'italic', fontSize: '14px', marginTop: '15px' }}>
//             Menghubungkan ke API Wikipedia & mengunduh ringkasan medis...
//           </p>
//         ) : wikiData ? (
//           <div style={{ marginTop: '15px' }}>
//             <h4 className={styles.wikiTitle}>{wikiData.title}</h4>
//             {wikiData.img && (
//               <img src={wikiData.img} alt={wikiData.title} className={styles.wikiImg} />
//             )}
//             <p className={styles.wikiText}>{wikiData.desc}</p>
//           </div>
//         ) : (
//           <p style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '14px', marginTop: '15px' }}>
//             Silakan klik salah satu target sistem otot pada menu bar sebelah kiri untuk memicu request integrasi data API.
//           </p>
//         )}
//       </section>

//     </div>
//   );
// }
   

     
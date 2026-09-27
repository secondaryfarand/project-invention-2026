// import React, { useState, useEffect } from 'react';
// import { supabase } from './supabaseClient';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// // ==========================================
// // KASUS FALLBACK & DESKRIPSI KUSTOM MEDIS
// // ==========================================
// // Menghubungkan nama medis biner spesifik ke nama pencarian Wikipedia / Deskripsi kustom
// const ORGAN_DICTIONARY = {
//   "tooth": {
//     wikiTitle: "Human_tooth",
//     customDesc: "Gigi manusia berfungsi untuk memotong dan mengunyah makanan. Terdiri dari lapisan email, dentin, dan pulpa."
//   },
//   "molar": {
//     wikiTitle: "Molar_(tooth)",
//     customDesc: "Gigi geraham yang terletak di bagian belakang mulut, dirancang untuk menggiling dan menghaluskan makanan."
//   },
//   "eye": {
//     wikiTitle: "Human_eye",
//     customDesc: "Mata manusia adalah organ penglihatan yang merefleksikan cahaya ke retina untuk diproses oleh otak."
//   },
//   "bone": {
//     wikiTitle: "Bone",
//     customDesc: "Struktur tulang keras yang membentuk kerangka tubuh dan melindungi organ internal."
//   }
// };

// function getOrganDetails(organName) {
//   if (!organName) return { searchKeyword: '', fallbackDesc: '' };
  
//   const lower = organName.toLowerCase();
//   for (const key in ORGAN_DICTIONARY) {
//     if (lower.includes(key)) {
//       return {
//         searchKeyword: ORGAN_DICTIONARY[key].wikiTitle,
//         fallbackDesc: ORGAN_DICTIONARY[key].customDesc
//       };
//     }
//   }
//   return { searchKeyword: organName, fallbackDesc: null };
// }

// // ==========================================
// // 1. COMPONENT LOADER DATA BINARY ANATOMI
// // ==========================================
// function Model3D({ path, onSelect, onLoadingChange, onPartsLoaded }) {
//   const [meshes, setMeshes] = useState([]);

//   useEffect(() => {
//     onLoadingChange("Membaca data indeks atlas...");

//     fetch(path)
//       .then((res) => res.json())
//       .then(async (atlasData) => {
//         const partsList = atlasData.parts || [];
//         const targetParts = partsList.slice(0, 30); 
//         const loadedMeshes = [];

//         // Kirim daftar nama organ ke komponen utama untuk Dropdown
//         if (onPartsLoaded) {
//           onPartsLoaded(targetParts.map(p => p.name));
//         }

//         onLoadingChange("Mengekstraksi file geometri biner .bin...");

//         for (let i = 0; i < targetParts.length; i++) {
//           const part = targetParts[i];
//           const chunkUrl = '/models/body-' + part.chunk + '.bin';
          
//           try {
//             const binRes = await fetch(chunkUrl);
//             const buffer = await binRes.arrayBuffer();
            
//             const posArray = new Float32Array(buffer, part.positions, part.vertexCount * 3);
//             const indexArray = new Uint16Array(buffer, part.indices, part.indexCount);

//             let organColor = '#ff7675';
//             if (part.system === 'skeletal') organColor = '#ffeaa7';
//             if (part.system === 'nervous') organColor = '#74b9ff';
//             if (part.system === 'sensory') organColor = '#a29bfe';

//             const safePosition = part.bounds && part.bounds[0] ? [0, 0, 0] : [0, 0, 0];

//             loadedMeshes.push({
//               name: part.name,
//               positions: posArray,
//               indices: indexArray,
//               color: organColor,
//               position: safePosition
//             });
//           } catch (err) {
//             console.error("Gagal parsing segmen biner organ: " + part.name, err);
//           }
//         }

//         setMeshes(loadedMeshes);
//         onLoadingChange(null);
//       })
//       .catch((err) => {
//         console.error("Gagal memuat file atlas.json:", err);
//         onLoadingChange("Error: Periksa file atlas.json di folder public.");
//       });
//   }, [path]);

//   return (
//     <group>
//       {meshes.map((meshData, idx) => (
//         <mesh 
//           key={idx} 
//           position={meshData.position}
//           onClick={(e) => {
//             e.stopPropagation();
//             onSelect(meshData.name);
//           }}
//         >
//           <bufferGeometry>
//             <bufferAttribute 
//               attach="attributes-position"
//               array={meshData.positions}
//               count={meshData.positions.length / 3}
//               itemSize={3}
//             />
//             <bufferAttribute 
//               attach="index"
//               array={meshData.indices}
//               count={meshData.indices.length}
//               itemSize={1}
//             />
//           </bufferGeometry>
//           <meshStandardMaterial 
//             color={meshData.color} 
//             roughness={0.4} 
//             metalness={0.1} 
//             side={2}
//           />
//         </mesh>
//       ))}
//     </group>
//   );
// }

// // ==========================================
// // 2. APLIKASI UTAMA (AUTH + DASHBOARD + API)
// // ==========================================
// export default function App() {
//   const [session, setSession] = useState(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [organList, setOrganList] = useState([]);
//   const [selectedOrgan, setSelectedOrgan] = useState(null);
//   const [wikiData, setWikiData] = useState(null);
//   const [loadingWiki, setLoadingWiki] = useState(false);
//   const [loadingModel, setLoadingModel] = useState("Membaca data indeks atlas...");

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });
//   }, []);

//   // Ambil Data Wikipedia + Fallback Deskripsi Kustom
//   useEffect(() => {
//     if (!selectedOrgan) return;

//     const fetchWiki = async () => {
//       setLoadingWiki(true);
//       const { searchKeyword, fallbackDesc } = getOrganDetails(selectedOrgan);

//       try {
//         const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchKeyword)}`;
//           //  console.log(encodeURIComponent)
//         const res = await fetch(apiUrl);
//         const data = await res.json();

//         setWikiData({
//           title: selectedOrgan,
//           desc: data.extract || fallbackDesc || 'Informasi ringkasan medis mendalam belum tersedia untuk bagian spesifik ini.',
//           img: data.thumbnail?.source
//         });
//       } catch (err) {
//         setWikiData({
//           title: selectedOrgan,
//           desc: fallbackDesc || 'Gagal terhubung ke API Wikipedia. Menampilkan data fallback.',
//           img: null
//         });
//       } finally {
//         setLoadingWiki(false);
//       }
//     };

//     fetchWiki();
//   }, [selectedOrgan]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     if (error) alert(error.message);
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     const { error } = await supabase.auth.signUp({ email, password });
//     if (error) alert(error.message);
//     else alert('Pendaftaran sukses!');
//   };

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     setSelectedOrgan(null);
//     setWikiData(null);
//   };

//   if (!session) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'sans-serif' }}>
//         <div style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', width: '350px' }}>
//           <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#1f2937', fontWeight: 'bold' }}>MediLearn Auth</h2>
//           <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//             <input type="email" placeholder="Alamat Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
//             <input type="password" placeholder="Kata Sandi" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
//             <button onClick={handleLogin} style={{ padding: '12px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Masuk</button>
//             <button onClick={handleSignUp} style={{ padding: '12px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Daftar</button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
//       <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb', paddingBottom: '15px', marginBottom: '20px' }}>
//         <div>
//           <h1 style={{ margin: 0, color: '#2563eb', fontSize: '28px', fontWeight: 'bold' }}>MediLearn 3D Explorer</h1>
//           <p style={{ margin: '5px 0 0 0', color: '#4b5563' }}>Akun: <strong>{session.user.email}</strong></p>
//         </div>
//         <button onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Log Out</button>
//       </header>

//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '25px' }}>
//         <div style={{ height: '550px', backgroundColor: '#0f172a', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          
//           {loadingModel && (
//             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center', zIndex: 10 }}>
//               <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '10px' }}>{loadingModel}</p>
//               <div style={{ width: '30px', height: '30px', border: '4px solid #334155', borderTop: '4px solid #38bdf8', borderRadius: '50%', margin: '0 auto', animation: 'spin 1s linear infinite' }}></div>
//               <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
//             </div>
//           )}

//           <Canvas camera={{ position: [0, 1.55, 0.25], fov: 35 }}>
//             <ambientLight intensity={0.9} />
//             <pointLight position={[10, 10, 10]} intensity={1.5} />
//             <directionalLight position={[-5, 5, -5]} intensity={1} />
//             <OrbitControls enableZoom={true} target={[0, 1.55, 0]} />
//             <Model3D 
//               path="/models/atlas.json" 
//               onSelect={(name) => setSelectedOrgan(name)} 
//               onLoadingChange={setLoadingModel}
//               onPartsLoaded={(parts) => setOrganList(parts)}
//             />
//           </Canvas>

//           <div style={{ position: 'absolute', bottom: '15px', left: '15px', color: '#f8fafc', fontSize: '12px', background: 'rgba(15, 23, 42, 0.8)', padding: '8px 14px', borderRadius: '8px', border: '1px solid #334155', zIndex: 5 }}>
//             💡 Geser klik kiri mouse untuk memutar. Klik organ 3D atau pilih di panel kanan.
//           </div>
//         </div>

//         {/* PANEL INFORMASI & DROPDOWN PILIH ORGAN */}
//         <div style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', border: '1px solid #e5e7eb', height: 'fit-content' }}>
          
//           {/* FITUR MEMILIH ORGAN SECARA MANUAL */}
//           <div style={{ marginBottom: '20px' }}>
//             <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>
//               Pilih Organ / Bagian Anatomi:
//             </label>
//             <select 
//               value={selectedOrgan || ''} 
//               onChange={(e) => setSelectedOrgan(e.target.value)}
//               style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: '#f9fafb', fontSize: '14px' }}
//             >
//               <option value="" disabled>-- Pilih dari daftar organ --</option>
//               {organList.map((organ, i) => (
//                 <option key={i} value={organ}>{organ}</option>
//               ))}
//             </select>
//           </div>

//           <h3 style={{ marginTop: 0, borderBottom: '2px solid #2563eb', paddingBottom: '10px', color: '#1f2937', fontWeight: 'bold' }}>
//             Informasi Medis
//           </h3>

//           {loadingWiki ? (
//             <p style={{ color: '#4b5563', fontStyle: 'italic', fontSize: '14px', marginTop: '15px' }}>
//               Memuat deskripsi medis...
//             </p>
//           ) : wikiData ? (
//             <div style={{ marginTop: '15px' }}>
//               <h4 style={{ fontSize: '20px', margin: '0 0 10px 0', color: '#1e3a8a', fontWeight: 'bold' }}>{wikiData.title}</h4>
//               {wikiData.img && <img src={wikiData.img} alt={wikiData.title} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px', border: '1px solid #e5e7eb' }} />}
//               <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '14px' }}>{wikiData.desc}</p>
//             </div>
//           ) : (
//             <p style={{ color: '#9ca3af', fontStyle: 'italic', fontSize: '14px', marginTop: '15px' }}>
//               Silakan klik organ pada tampilan 3D atau pilih dari daftar dropdown di atas.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import TestOrgan from './components/TestOrgan/TestOrgan';
import Coba from './components/Coba/Coba';
import Landing from './pages/Landing/Landing';
import Kuis from './pages/Kuis/Kuis';
import VideoComponent from './components/VideoComponent/VideoComponent';
import Dashboard from './pages/Dashboard/Dashboard';
import ModuleStudy from './pages/ModuleStudy/ModuleStudy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/organ/:id" element={<TestOrgan />} />
      <Route path="/coba" element={<Coba />} />
      <Route path="/kuis" element={<Kuis />} />
      <Route path="/video" element={<VideoComponent
        videoSrc="/assets/preview-1-skull.webm"
        coverImage="/assets/skull-cover.webp"
        title="Membangun Website Modern" 
        description="Pelajari cara membuat transisi card video interaktif menggunakan React secara bersih dan cepat."  
       />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/module" element={<ModuleStudy />} />
    </Routes>
  );
}

export default App;
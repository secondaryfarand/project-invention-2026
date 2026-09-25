import React, { useState } from 'react';
import ModelViewer from '../components/ModelViewer';
import InfoPanel from '../components/InfoPanel/InfoPanel';
// import { auth, signOut } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ user }) {
  // const [selectedOrgan, setSelectedOrgan] = useState(null);
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   signOut(auth).then(() => navigate('/'));
  // };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px' }}>
        <div>
          <h1 style={{ margin: 0 }}>Human Anatomy Explorer 3D</h1>
          <p style={{ margin: 0, color: '#666' }}>Selamat belajar, {user?.displayName || 'User'}!</p>
        </div>
        {/* <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Logout</button> */}
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '20px' }}>
        <div>
          {/* <ModelViewer onOrganSelect={setSelectedOrgan} /> */}
        </div>
        <div>
          {/* <InfoPanel selectedOrgan={selectedOrgan} /> */}
        </div>
      </div>
    </div>
  );
}

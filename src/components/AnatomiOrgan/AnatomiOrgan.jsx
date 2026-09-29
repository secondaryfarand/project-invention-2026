import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Viewer3D from '../Viewer3D/Viewer3D';
import InfoPanel from '../InfoPanel/InfoPanel';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import { ORGAN_LIST } from '../../data/organData';
import { MUSCLE_CAMERA_PRESETS } from '../../constants/musclePresets';
import styles from './AnatomiOrgan.module.css';

export default function AnatomiOrgan({onGoToDashboard}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const activeOrgan = ORGAN_LIST.find((item) => item.id === id);
  const [selectedOrgan, setSelectedOrgan] = useState(activeOrgan?.wikiQuery || null);
  const [sketchfabApi, setSketchfabApi] = useState(null);

  const handleApiReady = useCallback((api) => {
    setSketchfabApi(api);
  }, []);

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
      <Navbar onNavigateDashboard={onGoToDashboard} />
      
      <button className={styles.backButton} onClick={() => navigate('/anatomi')}>
        ← Kembali ke Galeri
      </button>

      <div className={styles.mainLayout}>
        <Sidebar activeOrgan={activeOrgan} onSelectPart={handleSelectParts} />
        <Viewer3D modelId={activeOrgan?.sketchfabId} onApiReady={handleApiReady} />
        <InfoPanel query={selectedOrgan} />
      </div>
      <Footer />
    </div>
  );
}


   

     
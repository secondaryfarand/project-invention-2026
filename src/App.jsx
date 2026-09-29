import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import AnatomiOrgan from './components/AnatomiOrgan/AnatomiOrgan';
import Landing from './pages/Landing/Landing';
import Kuis from './pages/Kuis/Kuis';
import VideoComponent from './components/VideoComponent/VideoComponent';
import Dashboard from './pages/Dashboard/Dashboard';
import ModuleStudy from './pages/ModuleStudy/ModuleStudy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/anatomi" element={<Menu />} />
      <Route path="/anatomi/:id" element={<AnatomiOrgan />} />
      <Route path="/kuis" element={<Kuis />} />
      <Route path="/video" element={<VideoComponent
        videoSrc="/assets/preview-1-skull.webm"
        coverImage="/assets/skull-cover.webp"
        title="Membangun Website Modern" 
        description="Pelajari cara membuat transisi card video interaktif menggunakan React secara bersih dan cepat."  
       />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/modul" element={<ModuleStudy />} />
      <Route path="/modul/:moduleId" element={<ModuleStudy />} />
    </Routes>
  );
}

export default App;
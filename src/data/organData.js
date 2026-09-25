// Data Kamera Preset Global (opsional untuk reset)
export const DEFAULT_CAMERA = {
  eye: [0.0, -3.2, 1.0],
  target: [0.0, 0.0, 0.9],
  duration: 1.5
};

export const ORGAN_LIST = [
  {
    id: 'muscle-tissue',
    title: 'Types of Muscle Tissue',
    views: '3.7k',
    comments: 0,
    likes: 13,
    thumbnail: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=600&q=80',
    wikiQuery: 'Jaringan_otot',
    sketchfabId: 'e8239f94d87b4e278f0cf02dbad1a330', // ID Model Utama
    defaultCamera: DEFAULT_CAMERA,
    // Sub-bagian spesifik beserta koordinat kameranya
    parts: [
      {
        id: 'biseps',
        name: 'Otot Bisep',
        wikiQuery: "Otot_biseps",
        camera: {
          eye: [0.35, -1.2, 1.35],
          target: [0.15, 0.1, 1.25],
          duration: 1.8
        }
      },
      {
        id: 'pektoralis',
        name: 'Otot Pektoralis Mayor',
        wikiQuery: "Otot_pektoralis_mayor",
        camera: {
          eye: [0.0, -1.4, 1.45],
          target: [0.0, 0.05, 1.35],
          duration: 1.8
        }
      },
      {
        id: 'deltoideus',
        name: 'Otot Deltoideus',
        wikiQuery: 'Otot_deltoideus',
        camera: {
          eye: [0.55, -1.0, 1.5],
          target: [0.2, 0.0, 1.45],
          duration: 1.8
        }
      },
      {
        id: 'hamstring',
        name: 'Otot Hamstring',
        wikiQuery:"Hamstring",
        camera: {
          eye: [0.0, -1.8, 0.6],
          target: [0.0, 0.0, 0.5],
          duration: 1.8
        }
      }
    ]
  },
  {
    id: 'pancreas',
    title: 'Anatomi Pankreas',
    views: '26.3k',
    comments: 0,
    likes: 28,
    thumbnail: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80',
    wikiQuery: 'Pankreas',
    sketchfabId: '8acf64dc315b49308b4fcbd47e48b92b',
    defaultCamera: DEFAULT_CAMERA,
    parts: [
      {
        id: 'head',
        name: 'Kepala Pankreas',
        camera: { eye: [0.1, -1.1, 0.9], target: [0.0, 0.0, 0.8], duration: 1.5 }
      },
      {
        id: 'body',
        name: 'Badan Pankreas',
        camera: { eye: [0.0, -1.3, 1.0], target: [0.0, 0.0, 0.9], duration: 1.5 }
      }
    ]
  },
  {
    id: 'tongue',
    title: 'Tongue Anatomy (Dorsum Surface)',
    views: '14.2k',
    comments: 3,
    likes: 17,
    thumbnail: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=600&q=80',
    wikiQuery: 'Lidah',
    sketchfabId: 'afa408912123471fb1c0e999a9c0e27a',
    defaultCamera: DEFAULT_CAMERA,
    parts: []
  }
];
export const MODULE_DATA = [
  {
    id: 'jantung',
    title: 'Anatomi & Fisiologi Jantung',
    category: 'Sistem Kardiovaskular',
    readTime: '8 Menit',
    description: 'Pelajari struktur anatomi organ jantung, sistem ruang, katup, serta mekanisme sirkulasi darah sistemik dan pulmonal secara mendalam.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Jantung (Heart) adalah organ berotot berbentuk kerucut tumpul yang terletak di dalam rongga dada (mediastinum) di antara kedua paru-paru. Organ ini berdetak rata-rata 100.000 kali per hari untuk memompa sekitar 7.500 liter darah, membawa oksigen dan nutrisi vital ke seluruh jaringan tubuh manusia.',
      sections: [
        {
          heading: '1. Struktur Ruang Jantung',
          text: 'Jantung terbagi menjadi empat ruang utama yang bekerja secara terkoordinasi:',
          list: [
            'Atrium Kanan (Serambi Kanan): Menerima darah deoksigenasi (kaya CO2) dari seluruh tubuh melalui Vena Cava Superior dan Inferior.',
            'Ventrikel Kanan (Bilik Kanan): Memompa darah kotor menuju paru-paru melalui Arteri Pulmonalis untuk pertukaran gas.',
            'Atrium Kiri (Serambi Kiri): Menerima darah kaya oksigen dari paru-paru melalui Vena Pulmonalis.',
            'Ventrikel Kiri (Bilik Kiri): Memiliki dinding miokardium paling tebal; memompa darah kaya O2 ke seluruh jaringan tubuh melalui Aorta.'
          ]
        },
        {
          heading: '2. Sistem Katup Jantung (Cardiac Valves)',
          text: 'Katup jantung berfungsi menjaga agar aliran darah tetap mengalir searah dan mencegah aliran balik (backflow):',
          list: [
            'Katup Trikuspid: Terletak di antara atrium kanan dan ventrikel kanan.',
            'Katup Mitral (Bikuspid): Terletak di antara atrium kiri dan ventrikel kiri.',
            'Katup Semilunar Pulmonal & Aorta: Mengatur aliran darah keluar dari ventrikel menuju pembuluh darah utama.'
          ]
        }
      ],
      clinicalNote: 'Catatan Klinis: Penyakit Jantung Koroner (PJK) terjadi ketika penyempitan akibat plak aterosklerosis menghambat suplai darah melalui arteri koroner, yang berpotensi menyebabkan infark miokard (serangan jantung).'
    }
  },
  {
    id: 'pankreas',
    title: 'Sistem Endokrin & Eksokrin Pankreas',
    category: 'Sistem Pencernaan & Hormonal',
    readTime: '7 Menit',
    description: 'Pahami fungsi ganda kelenjar pankreas dalam memproduksi enzim pencernaan serta hormon insulin dan glukagon.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Pankreas adalah kelenjar memanjang yang terletak di belakang lambung (retroperitoneal). Pankreas unik karena memiliki dua fungsi utama sekaligus: sebagai kelenjar eksokrin (pencernaan) dan kelenjar endokrin (metabolisme gula darah).',
      sections: [
        {
          heading: '1. Fungsi Eksokrin (Enzim Pencernaan)',
          text: 'Sekitar 99% jaringan pankreas menghasilkan getah pankreas yang disalurkan ke duodenum via saluran pankreas:',
          list: [
            'Amilase Pankreas: Mencerna karbohidrat kompleks menjadi disakarida.',
            'Tripsin & Kimotripsin: Memecah protein menjadi peptida sederhana.',
            'Lipase Pankreas: Memecah molekul lemak menjadi asam lemak dan gliserol.'
          ]
        },
        {
          heading: '2. Fungsi Endokrin (Pulau Langerhans)',
          text: 'Mengontrol kadar glukosa darah melalui sekresi hormon secara langsung ke pembuluh darah:',
          list: [
            'Sel Alfa: Menghasilkan hormon Glukagon untuk meningkatkan kadar gula darah saat berpuasa.',
            'Sel Beta: Menghasilkan hormon Insulin yang memicu penyerapan glukosa oleh sel-sel tubuh.'
          ]
        }
      ],
      clinicalNote: 'Catatan Klinis: Kerusakan sel beta pankreas akibat reaksi autoimun memicu Diabetes Melitus Tipe 1, sedangkan resistensi jaringan terhadap insulin menyebabkan Diabetes Tipe 2.'
    }
  },

  // --- 15 ORGAN TAMBAHAN ---
  {
    id: 'paru-paru',
    title: 'Sistem Respirasi & Alveolus Paru-Paru',
    category: 'Sistem Respirasi',
    readTime: '8 Menit',
    description: 'Mempelajari anatomi paru-paru, mekanika pernapasan, serta proses difusi gas oksigen dan karbon dioksida pada alveolus.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Paru-paru (Lungs) adalah organ utama sistem pernapasan manusia yang terletak di dalam rongga dada, dilindungi oleh tulang rusuk dan selaput pleura. Paru-paru kanan terdiri dari 3 lobus, sedangkan paru-paru kiri memiliki 2 lobus untuk memberi ruang bagi posisi jantung.',
      sections: [
        {
          heading: '1. Struktur Bronkus hingga Alveolus',
          text: 'Udara masuk melalui trakea yang bercabang menjadi bronkus kanan dan kiri, lalu terus bercabang menjadi bronkiolus hingga berujung di alveolus:',
          list: [
            'Alveolus: Kantung udara mikroskopis tempat terjadinya pertukaran gas secara difusi.',
            'Kapiler Pulmonalis: Pembuluh darah tipis yang melapisi alveolus untuk mengikat O2 ke hemoglobin dan melepaskan CO2.',
            'Surfaktan: Cairan lipoprotein yang diproduksi sel alveolus tipe II untuk mencegah paru-paru kolaps saat menghembuskan napas.'
          ]
        },
        {
          heading: '2. Mekanika Pernapasan (Inspirasi & Ekspirasi)',
          text: 'Proses keluar-masuknya udara diatur oleh perbedaan tekanan udara akibat kontraksi otot diafragma dan otot antartulang rusuk (interkostal).'
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Guyton and Hall Textbook of Medical Physiology (14th Ed.) & NIH / National Heart, Lung, and Blood Institute (NHLBI). Pneumonia adalah infeksi alveolus yang menyebabkan kantung udara terisi cairan atau nanah.'
    }
  },

  {
    id: 'hati',
    title: 'Fungsi Metabolik & Detoksifikasi Hati',
    category: 'Sistem Pencernaan & Metabolisme',
    readTime: '9 Menit',
    description: 'Memahami peran hati sebagai kelenjar terbesar tubuh dalam metabolisme nutrisi, sekresi empedu, dan detoksifikasi racun.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Hati (Liver/Hepar) adalah organ padat terbesar dalam tubuh manusia dengan berat sekitar 1.5 kg, terletak di kuadran kanan atas rongga perut. Hati menerima suplai darah ganda dari Arteri Hepatika (oksigen) dan Vena Porta Hepatika (nutrisi dari saluran pencernaan).',
      sections: [
        {
          heading: '1. Fungsi Utama Hati',
          text: 'Hati menjalankan lebih dari 500 fungsi vital dalam tubuh manusia, di antaranya:',
          list: [
            'Metabolisme Nutrisi: Mengonversi glukosa menjadi glikogen (glikogenesis) serta memecah asam amino.',
            'Sintesis Protein Plasma: Memproduksi albumin, fibrinogen, dan faktor pembekuan darah.',
            'Produksi Empedu: Menghasilkan garam empedu untuk mengemulsikan lemak di usus halus.',
            'Detoksifikasi: Mengubah senyawa beracun (seperti amonia menjadi urea dan memecah obat-obatan).'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Netter\'s Atlas of Human Anatomy & Johns Hopkins Medicine. Sirosis hati merupakan kondisi pembentukan jaringan parut irreversibel akibat hepatitis kronis atau konsumsi alkohol berlebih.'
    }
  },

  {
    id: 'ginjal',
    title: 'Filtrasi & Ekskresi Ginjal',
    category: 'Sistem Ekskresi',
    readTime: '9 Menit',
    description: 'Eksplorasi struktur nefron, proses pembentukan urine (filtrasi, reabsorpsi, sekresi), dan regulasi tekanan darah.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Ginjal (Kidney) adalah sepasang organ berbentuk kacang merah yang terletak di area pinggang (retroperitoneal). Setiap ginjal mengandung sekitar 1 juta unit fungsional yang disebut nefron untuk menyaring darah dan mempertahankan keseimbangan cairan serta elektrolit.',
      sections: [
        {
          heading: '1. Tahapan Pembentukan Urine',
          text: 'Proses penyaringan darah di ginjal berlangsung melalui tiga tahap utama:',
          list: [
            'Filtrasi Glomerulus: Menyaring air dan zat terlarut kecil dari darah menghasilkan urine primer.',
            'Reabsorpsi Tubulus: Menyerap kembali zat berguna (glukosa, asam amino, air) di tubulus kontortus proksimal.',
            'Sekresi Tubular (Augmentasi): Menambahkan zat sisa (seperti ion H+, K+, racun) di tubulus distal membentuk urine sejati.'
          ]
        },
        {
          heading: '2. Fungsi Endokrin Ginjal',
          text: 'Ginjal memproduksi hormon Erythropoietin (EPO) untuk merangsang pembentukan sel darah merah dan Renin untuk mengatur tekanan darah.'
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Vander\'s Human Physiology & National Kidney Foundation (NKF). Gagal Ginjal Kronis (GGK) terjadi ketika nefron mengalami kerusakan permanen sehingga membutuhkan hemodialisis.'
    }
  },

  {
    id: 'lambung',
    title: 'Anatomi & Pencernaan Kimiawi Lambung',
    category: 'Sistem Pencernaan',
    readTime: '7 Menit',
    description: 'Mempelajari fisiologi pencernaan mekanis dan kimiawi di lambung serta peran Asam Klorida (HCl) dan Pepsin.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Lambung (Stomach) adalah organ berbentuk kantung berotot tebal yang terletak di bagian atas rongga perut sebelah kiri. Lambung berfungsi meremas makanan (pencernaan mekanis) dan mencernanya secara kimiawi menggunakan getah lambung.',
      sections: [
        {
          heading: '1. Komponen Getah Lambung',
          text: 'Dinding lambung melapisi sel-sel sekretori parietal dan utama yang menghasilkan:',
          list: [
            'Asam Klorida (HCl): Membunuh patogen dan mengaktifkan pepsinogen menjadi pepsin.',
            'Pepsin: Enzim pencerna protein menjadi peptida pendek.',
            'Mukus (Lendir): Melindungi lapisan mukosa lambung dari pengikisan oleh asam kuat.'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Gray\'s Anatomy & Mayo Clinic. Gastritis atau tukak lambung ditandai dengan peradangan mukosa akibat infeksi bakteri Helicobacter pylori atau penggunaan obat NSAID berlebih.'
    }
  },

  {
    id: 'otak',
    title: 'Sistem Saraf Pusat & Fungsi Otak',
    category: 'Sistem Saraf',
    readTime: '10 Menit',
    description: 'Membedakan fungsi Cerebrum, Cerebellum, dan Batang Otak dalam mengontrol kesadaran, gerakan, dan fungsi otonom.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Otak (Brain) adalah pusat kendali utama dari seluruh aktivitas tubuh manusia. Dilindungi oleh tengkorak keras dan tiga lapisan membran meninges, otak mengandung sekitar 86 miliar neuron yang terhubung secara kompleks.',
      sections: [
        {
          heading: '1. Bagian-Bagian Utama Otak',
          text: 'Otak terbagi menjadi beberapa struktur dominan:',
          list: [
            'Cerebrum (Otak Besar): Mengontrol berpikir, memori, emosi, bahasa, dan persepsi sensori.',
            'Cerebellum (Otak Kecil): Mengatur koordinasi motorik halus, keseimbangan, dan postur tubuh.',
            'Batang Otak (Brainstem): Mengontrol fungsi vital otonom seperti detak jantung, pernapasan, dan tekanan darah.'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Principles of Neural Science (Kandel) & American Stroke Association. Stroke terjadi akibat penyumbatan (iskemik) atau pecahnya pembuluh darah (hemoragik) di otak.'
    }
  },

  {
    id: 'usus-halus',
    title: 'Usus Halus & Penyerapan Nutrisi',
    category: 'Sistem Pencernaan',
    readTime: '8 Menit',
    description: 'Memahami proses pencernaan akhir dan mekanisme penyerapan nutrisi melalui mikrovili di duodenum, jejunum, dan ileum.',
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Usus Halus (Small Intestine) adalah saluran pencernaan terpanjang (mencapai 6 meter pada orang dewasa) yang menghubungkan lambung dengan usus besar. Di sinilah mayoritas pencernaan kimiawi dan penyerapan (absorpsi) zat gizi berlangsung.',
      sections: [
        {
          heading: '1. Tiga Bagian Usus Halus',
          text: 'Usus halus terbagi secara fungsional menjadi tiga segmen:',
          list: [
            'Duodenum (Usus 12 Jari): Tempat bercampurnya chyme dengan enzim pankreas dan cairan empedu.',
            'Jejunum (Usus Kosong): Tempat utama penyerapan karbohidrat, protein, dan vitamin.',
            'Ileum (Usus Penyerapan): Menyerap asam empedu, garam, dan Vitamin B12.'
          ]
        },
        {
          heading: '2. Struktur Mikrovili',
          text: 'Dinding dalam usus halus dilapisi lipatan lipatan vili dan mikrovili yang memperluas permukaan absorpsi hingga seluas lapangan tenis.'
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Medical Physiology (Boron & Boulpaep) & NIDDK. Penyakit Celiac merupakan gangguan autoimun di mana konsumsi gluten merusak struktur vili usus halus.'
    }
  },

  {
    id: 'usus-besar',
    title: 'Usus Besar & Pembentukan Feses',
    category: 'Sistem Pencernaan',
    readTime: '6 Menit',
    description: 'Pelajari reabsorpsi air, pembentukan feses, serta peran penting mikrobioma usus pada Sekum, Kolon, dan Rektum.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Usus Besar (Large Intestine/Colon) memiliki panjang sekitar 1.5 meter yang mengelilingi usus halus. Fungsi utamanya adalah menyerap sisa air dan elektrolit dari sisa makanan yang tidak terdeteksi serta memadatkannya menjadi feses.',
      sections: [
        {
          heading: '1. Struktur Kolon & Peran Mikrobioma',
          text: 'Kolon terbagi menjadi kolon asendens, transversum, desendens, dan sigmoid:',
          list: [
            'Reabsorpsi Air: Mengubah sisa limbah cair menjadi feses semi-padat.',
            'Mikrobioma Gut: Triliunan bakteri baik (seperti E. coli) membantu memfermentasi serat dan memproduksi Vitamin K serta B12.',
            'Rektum & Anus: Tempat penyimpanan sementara feses sebelum dikeluarkan melalui proses defekasi.'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Sabiston Textbook of Surgery & American Gastroenterological Association (AGA). Konstipasi terjadi akibat penyerapan air berlebih di kolon.'
    }
  },

  {
    id: 'kulit',
    title: 'Anatomi Kulit & Sistem Integumen',
    category: 'Sistem Integumen',
    readTime: '7 Menit',
    description: 'Mempelajari lapisan Epidermis, Dermis, dan Hipodermis dalam proteksi tubuh, termoregulasi, dan sensori.',
    image: 'https://images.unsplash.com/photo-1512290900676-26c2a4d0b5ae?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kulit (Skin) adalah organ terbesar tubuh manusia berdasarkan luas permukaan dan beratnya (mencapai 15% berat badan). Kulit bertindak sebagai benteng pertahanan utama (barrier) dari bahaya patogen, radiasi UV, dan trauma fisik.',
      sections: [
        {
          heading: '1. Tiga Lapisan Utama Kulit',
          text: 'Secara struktural, kulit tersusun atas tiga lapisan:',
          list: [
            'Epidermis: Lapisan terluar yang mengandung sel keratinosit dan melanosit (pembuat pigmen kulit).',
            'Dermis: Lapisan tengah berisi pembuluh darah, saraf sensori, folikel rambut, kelenjar keringat, dan kolagen.',
            'Hipodermis (Subkutan): Lapisan lemak terdalam yang berfungsi sebagai isolator panas dan cadangan energi.'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Fitzpatricks Dermatology in General Medicine & American Academy of Dermatology (AAD). Dermatitis Atopik (Eksim) adalah kondisi peradangan kulit kronis akibat terganggunya barrier epidermis.'
    }
  },

  {
    id: 'limpa',
    title: 'Sistem Imun & Filtrasi Darah Limpa',
    category: 'Sistem Limfatik & Imun',
    readTime: '6 Menit',
    description: 'Memahami peran Pulpa Merah dan Pulpa Putih limpa dalam memfilter eritrosit tua dan memproduksi limfosit.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Limpa (Spleen) adalah organ limfoid terbesar yang terletak di bagian kiri atas perut, tepat di bawah diafragma. Walau bukan organ vital mutlak, limpa memegang peran kunci dalam sistem kekebalan tubuh dan sirkulasi darah.',
      sections: [
        {
          heading: '1. Dua Komponen Fungsional Limpa',
          text: 'Limpa terbagi menjadi dua area jaringan utama:',
          list: [
            'Pulpa Merah: Menyaring darah, menghancurkan sel darah merah yang sudah tua/rusak, dan menyimpan cadangan trombosit.',
            'Pulpa Putih: Mengandung limfosit (sel B dan T) yang memicu respon imun terhadap infeksi patogen dalam darah.'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Janeway\'s Immunobiology & CDC. Splenomegali (pembesaran limpa) dapat terjadi akibat infeksi berat seperti malaria atau kanker darah (leukemia).'
    }
  },

  {
    id: 'kandung-kemih',
    title: 'Sistem Perkemihan & Kandung Kemih',
    category: 'Sistem Ekskresi',
    readTime: '5 Menit',
    description: 'Pelajari struktur epitel transisional dan kerja otot detrusor dalam menampung serta mengeluarkan urine.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kandung Kemih (Urinary Bladder) adalah organ berongga berotot elastis yang terletak di bagian dasar panggul. Organ ini berfungsi menampung urine sementara dari ginjal sebelum dibuang melalui saluran uretra.',
      sections: [
        {
          heading: '1. Fisiologi Penampungan & Refleks Mikturisi',
          text: 'Dinding kandung kemih dilapisi oleh epitel transisional yang dapat meregang dan mengkerut:',
          list: [
            'Otot Detrusor: Otot polos tebal yang merelaksasi saat penampungan dan berkontraksi saat buang air kecil.',
            'Kapasitas Normal: Mampu menampung sekitar 400-600 mL urine pada dewasa sebelum memicu sinyal rasa ingin berkemih.'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Campbell-Walsh Urology & Urology Care Foundation. Sistitis adalah peradangan kandung kemih yang paling sering disebabkan oleh Infeksi Saluran Kemih (ISK).'
    }
  },

  {
    id: 'lambung-empedu',
    title: 'Kandung Empedu & Metabolisme Lipid',
    category: 'Sistem Pencernaan',
    readTime: '5 Menit',
    description: 'Memahami proses penyimpanan dan pelepasan cairan empedu menuju usus halus untuk mengemulsikan lemak makanan.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kandung Empedu (Gallbladder) adalah organ berbentuk buah pir kecil berukuran sekitar 7-10 cm yang terletak di bawah organ hati. Organ ini memegang peran pendukung penting dalam sistem pencernaan makanan berlemak.',
      sections: [
        {
          heading: '1. Konsentrasi & Sekresi Empedu',
          text: 'Kandung empedu tidak memproduksi empedu sendiri, melainkan menyimpannya dari hati:',
          list: [
            'Penyimpanan: Mempekatkan cairan empedu hingga 10 kali lipat dengan menyerap air dan elektrolit.',
            'Hormon Cholecystokinin (CCK): Memicu kontraksi kandung empedu saat makanan berlemak masuk ke duodenum.'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Sleisenger and Fordtran\'s Gastrointestinal and Liver Disease & Mayo Clinic. Kolelitiasis (batu empedu) terbentuk akibat pengkristalan kolesterol berlebih atau bilirubin dalam cairan empedu.'
    }
  },

  {
    id: 'tiroid',
    title: 'Kelenjar Tiroid & Metabolisme Tubuh',
    category: 'Sistem Endokrin',
    readTime: '7 Menit',
    description: 'Pelajari peran hormon Tiroksin (T4) dan Triiodotironin (T3) dalam mengatur laju metabolisme basal sel.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kelenjar Tiroid (Thyroid Gland) adalah kelenjar endokrin berbentuk kupu-kupu yang terletak di bagian depan leher, tepat di bawah jakun. Hormon yang dihasilkannya mengatur kecepatan sel-sel tubuh dalam membakar energi.',
      sections: [
        {
          heading: '1. Hormon Utama Tiroid',
          text: 'Kelenjar tiroid memproduksi hormon vital menggunakan yodium dari makanan:',
          list: [
            'Tiroksin (T4) & Triiodotironin (T3): Mengatur Laju Metabolisme Basal (BMR), suhu tubuh, serta detak jantung.',
            'Kalsitonin: Mengatur kadar kalsium darah dengan memicu penyerapan kalsium ke dalam tulang.'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Williams Textbook of Endocrinology & American Thyroid Association (ATA). Hipertiroidisme ditandai dengan detak jantung cepat dan penurunan berat badan akibat produksi hormon tiroid berlebih.'
    }
  },

  {
    id: 'mata',
    title: 'Anatomi Mata & Fisiologi Penglihatan',
    category: 'Sistem Sensori',
    readTime: '8 Menit',
    description: 'Eksplorasi pembiasan cahaya dari Kornea, Lensa, hingga transmisi impuls saraf visual oleh Sel Batang dan Kerucut Retina.',
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Mata (Eye) adalah organ fotoreseptor kompleks yang menangkap rangsangan cahaya dan mengonversinya menjadi impuls saraf yang diterjemahkan oleh otak sebagai gambaran visual.',
      sections: [
        {
          heading: '1. Struktur Refraksi Cahaya',
          text: 'Cahaya melewati beberapa media refraksi sebelum sampai ke saraf:',
          list: [
            'Kornea & Lensa: Membiaskan dan memfokuskan bayangan cahaya tepat pada retina.',
            'Iris & Pupil: Mengatur intensitas cahaya yang masuk ke dalam bola mata.',
            'Retina: Mengandung sel fotoreseptor Batang (penglihatan redup/hitam-putih) dan Kerucut (penglihatan warna).'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Ophthalmology (Yanoff & Duker) & American Academy of Ophthalmology (AAO). Katarak adalah kondisi kekeruhan pada lensa mata yang menghalangi masuknya cahaya.'
    }
  },

  {
    id: 'telinga',
    title: 'Anatomi Telinga & Pendengaran',
    category: 'Sistem Sensori & Keseimbangan',
    readTime: '7 Menit',
    description: 'Memahami konversi gelombang suara di Tulang Pendengaran, Koklea, serta sistem Keseimbangan Vestibular.',
    image: 'https://images.unsplash.com/photo-1590159763121-7c9fc312190d?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Telinga (Ear) memiliki fungsi ganda sebagai organ pendengaran (auditori) sekaligus organ pengatur keseimbangan tubuh (vestibular). Telinga terbagi menjadi tiga area: Luar, Tengah, dan Dalam.',
      sections: [
        {
          heading: '1. Mekanisme Pendengaran & Keseimbangan',
          text: 'Gelombang mekanis suara diubah menjadi sinyal listrik:',
          list: [
            'Telinga Tengah: Membran timpani dan 3 tulang pendengaran (Maleus, Inkus, Stapes) memperkuat getaran suara.',
            'Koklea (Rumah Siput): Mengandung sel rambut sel sensorik yang mengubah getaran cairan menjadi sinyal listrik saraf.',
            'Kanal Semisirkularis: Mengdeteksi posisi kepala dan gerak tubuh untuk menjaga keseimbangan.'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Ballenger\'s Otorhinolaryngology & NIH / NIDCD. Otitis Media adalah infeksi bakteri/virus yang kerap terjadi pada rongga telinga tengah.'
    }
  },

  {
    id: 'timus',
    title: 'Kelenjar Timus & Maturasi Sel T',
    category: 'Sistem Limfatik & Imun',
    readTime: '6 Menit',
    description: 'Pelajari peran kelenjar timus dalam proses diferensiasi dan edukasi sel limfosit T untuk kekebalan tubuh.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    content: {
      overview: 'Kelenjar Timus (Thymus Gland) adalah organ limfoid primer yang terletak di rongga dada atas, tepat di belakang tulang dada (sternum). Timus sangat aktif pada masa kanak-kanak dan mengalami penyusutan (involusi) seiring bertambahnya usia.',
      sections: [
        {
          heading: '1. Edukasi & Pematangan Limfosit T',
          text: 'Fungsi utama timus adalah "sekolah" bagi sel-sel kekebalan tubuh:',
          list: [
            'Maturasi Sel T: Mengubah prekursor limfosit dari sumsum tulang menjadi Sel T matang yang siap melawan antigen spesifik.',
            'Seleksi Positif & Negatif: Mengeliminasi sel T yang berpotensi menyerang sel-sel tubuh sendiri (mencegah penyakit autoimun).'
          ]
        }
      ],
      clinicalNote: 'Sumber Informasi & Referensi Medis: Cellular and Molecular Immunology (Abbas) & Nature Reviews Immunology. Gangguan maturasi timus dapat menyebabkan sindrom defisiensi imun berat seperti DiGeorge Syndrome.'
    }
  }
];
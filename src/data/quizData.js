export const QUIZ_BANK = [
  {
    id: 1,
    question: "Organ manakah yang berfungsi memompa darah ke seluruh tubuh?",
    options: ["Paru-Paru", "Jantung", "Hati", "Ginjal"],
    answerIndex: 1
  },
  {
    id: 2,
    question: "Berapa jumlah tulang pada rangka manusia dewasa normal?",
    options: ["206 Tulang", "300 Tulang", "150 Tulang", "210 Tulang"],
    answerIndex: 0
  },
  {
    id: 3,
    question: "Bagian otak mana yang berfungsi menjaga keseimbangan tubuh?",
    options: ["Cerebrum", "Cerebellum (Otak Kecil)", "Batang Otak", "Thalamus"],
    answerIndex: 1
  },
  {
    id: 4,
    question: "Organ apakah yang memproduksi hormon Insulin?",
    options: ["Pankreas", "Hati", "Kelenjar Tiroid", "Lambung"],
    answerIndex: 0
  },
  {
    id: 5,
    question: "Gas apakah yang diserap oleh paru-paru saat manusia menghirup napas?",
    options: ["Karbondioksida", "Nitrogen", "Oksigen", "Helium"],
    answerIndex: 2
  },
  {
    id: 6,
    question: "Enzim Ptialin pada air liur berfungsi mencerna karbohidrat di dalam...",
    options: ["Lambung", "Mulut", "Usus Halus", "Kerongkongan"],
    answerIndex: 1
  },
  {
    id: 7,
    question: "Pembuluh darah yang membawa darah kembali menuju ke jantung disebut...",
    options: ["Arteri", "Vena", "Kapiler", "Aorta"],
    answerIndex: 1
  },
  {
    id: 8,
    question: "Bagian mata yang memberi warna pada mata manusia adalah...",
    options: ["Kornea", "Retina", "Iris", "Pupil"],
    answerIndex: 2
  }
];

export function getRandomQuestions(count = 5) {
  const shuffled = [...QUIZ_BANK].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
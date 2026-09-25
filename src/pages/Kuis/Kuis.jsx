import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { getRandomQuestions } from '../../data/quizData';
import styles from './Kuis.module.css';

export default function Kuis() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [turn, setTurn] = useState('A');
  const [isCompleted, setIsCompleted] = useState(false);

  const startNewQuiz = () => {
    setQuestions(getRandomQuestions(5));
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScoreA(0);
    setScoreB(0);
    setTurn('A');
    setIsCompleted(false);
  };

  useEffect(() => {
    startNewQuiz();
  }, []);

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const currentQ = questions[currentIndex];
    if (index === currentQ.answerIndex) {
      if (turn === 'A') {
        setScoreA((prev) => prev + 10);
      } else {
        setScoreB((prev) => prev + 10);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTurn((prev) => (prev === 'A' ? 'B' : 'A'));
    } else {
      setIsCompleted(true);
    }
  };

  if (questions.length === 0) {
    return null;
  }

  const currentQ = questions[currentIndex];

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        <header className={styles.headerSection}>
          <span className={styles.badge}>Mode Edukasi Interaktif</span>
          <h1 className={styles.pageTitle}>Kuis Anatomi Medis</h1>
          <p className={styles.pageSubtitle}>
            Uji pengetahuan anatomi tubuh secara bergiliran. Kumpulkan skor tertinggi bersama rekan Anda!
          </p>
        </header>

        <section className={styles.quizCard}>
          {!isCompleted ? (
            <>
              <div className={styles.quizTop}>
                <span className={styles.qProgress}>
                  Soal {currentIndex + 1} dari {questions.length}
                </span>
                <div className={styles.scorePills}>
                  <span className={`${styles.scorePill} ${styles.scoreA}`}>
                    Ortu <strong>{scoreA}</strong>
                  </span>
                  <span className={`${styles.scorePill} ${styles.scoreB}`}>
                    Anak <strong>{scoreB}</strong>
                  </span>
                </div>
              </div>

              <div className={styles.turnIndicator}>
                Giliran: <strong className={turn === 'A' ? styles.turnA : styles.turnB}>
                  {turn === 'A' ? 'Ortu' : 'Anak'}
                </strong>
              </div>

              <p className={styles.qText}>{currentQ.question}</p>

              <div className={styles.qOptions}>
                {currentQ.options.map((opt, idx) => {
                  let btnClass = styles.optionBtn;
                  if (isAnswered) {
                    if (idx === currentQ.answerIndex) {
                      btnClass += ` ${styles.correct}`;
                    } else if (idx === selectedOption) {
                      btnClass += ` ${styles.wrong}`;
                    }
                  } else if (selectedOption === idx) {
                    btnClass += ` ${styles.selected}`;
                  }

                  return (
                    <button
                      key={idx}
                      className={btnClass}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                    >
                      <span className={styles.optLetter}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              <div className={styles.quizActions}>
                {isAnswered && (
                  <button className={styles.nextBtn} onClick={handleNext}>
                    {currentIndex + 1 === questions.length ? 'Lihat Hasil 🎉' : 'Lanjut →'}
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className={styles.resultView}>
              <h2 className={styles.resultTitle}>Kuis Selesai! 👏</h2>
              <div className={styles.resultBoard}>
                <div className={styles.resultBox}>
                  <span>Skor Ortu</span>
                  <h3>{scoreA}</h3>
                </div>
                <div className={styles.resultBox}>
                  <span>Skor Anak</span>
                  <h3>{scoreB}</h3>
                </div>
              </div>
              <p className={styles.winnerMsg}>
                {scoreA > scoreB
                  ? '🎉 Selamat, Ortu Memenangkan Permainan!'
                  : scoreB > scoreA
                  ? '🎉 Selamat, Anak Memenangkan Permainan!'
                  : '🤝 Hasil Seri! Pertandingan Yang Luar Biasa!'}
              </p>
              <button className={styles.restartBtn} onClick={startNewQuiz}>
                Main Lagi (Soal Acak) 🔄
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
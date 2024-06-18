import React, { useRef, useState } from 'react';
import styles from '../../../scss/ChargeModal.module.scss';
import styles2 from '../../../scss/Section1.module.scss';

const [modalOpen, setModalOpen] = useState(false);
const modalBackground = useRef();

const ChargeModal = () => {
  return (
    <>
      <div className={styles.btnWrapper}>
        <button
          className={styles.section1More}
          onClick={() => setModalOpen(true)}
        >
          모달 열기
        </button>
      </div>
      {modalOpen && (
        <div
          className={styles.modalContainer}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className={styles.modalContent}>
            <p>리액트로 모달 구현하기</p>
            <button
              className={styles.modalCloseBtn}
              onClick={() => setModalOpen(false)}
            >
              모달 닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChargeModal;

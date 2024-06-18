import React, { useRef, useState } from 'react';
import styles from '../../../scss/Section1.module.scss';
import rectangle from '../../../assets/img/home2.jpg';
import goldMedal from '../../../assets/img/gold.png';
import silverMedal from '../../../assets/img/silver.png';
import bronzeMedal from '../../../assets/img/bronze.png';
import { useNavigate } from 'react-router-dom';

const Section1 = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/Login');
  };

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <>
      <div className={styles.section1Body}>
        <div className={styles.section1Left}>
          <h1 className={styles.section1Title}>
            Exchange
            <br />
            Travel
          </h1>
          <h5 className={styles.section1Small}>
            환전하면 적립되는 포인트로 투어 패키지를 구매해
            더욱 큰 혜택을 누리세요.
          </h5>
          <button
            className={styles.section1Explore}
            onClick={goToLogin}
          >
            Explore
          </button>
        </div>
        <div className={styles.section1SideRectangle}>
          <div>
            5 best places <br /> to visit <br />
            <button
              className={styles.section1More}
              onClick={() => setModalOpen(true)}
            >
              More →
            </button>
          </div>
          <img src={rectangle} />
        </div>
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
            <h1>
              ETP 충전하기
              <h5>ExTravel Point</h5>
            </h1>

            <div className={styles.chargeTable}>
              <div className={styles.tableHeader}>
                <div>등급</div>
                <div>기준</div>
                <div>혜택</div>
              </div>
              <div className={styles.goldGrade}>
                <div>
                  <img src={goldMedal} />
                </div>
                <div>
                  포인트 전환 누적 금액
                  <br /> 1천만 원 이상
                </div>
                <div>
                  포인트 충전 금액의
                  <br />
                  1.5% 적립
                </div>
              </div>
              <div className={styles.silverGrade}>
                <div>
                  <img src={silverMedal} />
                </div>
                <div>
                  포인트 전환 누적 금액 <br />
                  5백만 원 이상
                </div>
                <div>
                  포인트 충전 금액의 <br />
                  1.0% 적립
                </div>
              </div>
              <div className={styles.bronzeGrade}>
                <div>
                  <img src={bronzeMedal} />
                </div>
                <div>회원가입한 모든 회원</div>
                <div>
                  포인트 충전 금액의 <br />
                  0.5% 적립
                </div>
              </div>
            </div>

            <button
              className={styles.modalCloseBtn}
              onClick={() => setModalOpen(false)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Section1;

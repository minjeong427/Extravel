import React, { useRef, useState } from 'react';
import styles from '../../../scss/ChargeModal.module.scss';
import { BsXLg } from 'react-icons/bs';
import goldMedal from '../../../assets/img/gold.png';
import silverMedal from '../../../assets/img/silver.png';
import bronzeMedal from '../../../assets/img/bronze.png';

const ChargeModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const [text, setText] = useState(true);
  function handleChange(e) {
    setText(e.target.value);
  }

  return (
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
        <BsXLg
          className={styles.modalCloseBtn}
          onClick={() => setModalOpen(false)}
        />

        <h1>
          ETP 충전하기
          <h5>ExTravel Point</h5>
        </h1>

        <div className={styles.chargeTable}>
          <div className={styles.tableHeader}>
            <div className={styles.grade}>등급</div>
            <div className={styles.criteria}>기준</div>
            <div className={styles.benefit}>혜택</div>
          </div>
          <div className={styles.goldGrade}>
            <div>
              <img src={goldMedal} />
            </div>
            <div className={styles.money}>
              포인트 충전 누적 금액
              <br />
              <strong> 1천만 원</strong> 이상
            </div>
            <div>
              포인트 충전 금액의
              <br />
              <strong>1.5% </strong>적립
            </div>
          </div>
          <div className={styles.silverGrade}>
            <div>
              <img src={silverMedal} />
            </div>
            <div className={styles.money}>
              포인트 충전 누적 금액 <br />
              <strong>5백만 원 </strong>이상
            </div>
            <div>
              포인트 충전 금액의 <br />
              <strong>1.0% </strong>적립
            </div>
          </div>
          <div className={styles.bronzeGrade}>
            <div>
              <img src={bronzeMedal} />
            </div>
            <div className={styles.money}>
              <strong>회원가입한 모든 회원</strong>
            </div>
            <div>
              포인트 충전 금액의 <br />
              <strong>0.5%</strong> 적립
            </div>
          </div>
        </div>
        <div className={styles.currentMoney}>
          보유 포인트
          <input
            className={styles.currentMoneyInput}
            type='text'
          />
          포인트
        </div>
        <div className={styles.bottom}>
          <div className={styles.chargeAmount}>
            <div className={styles.chargeAmountTitle}>
              충전 금액
            </div>
            <div className={styles.chargeInput}>
              <div>충전할 금액을 입력하세요.</div>
              <input
                type='number'
                value={text}
                onChange={handleChange}
              />
              원 <br />
            </div>
            <div className={styles.pointContainer}>
              <div className={styles.upPoint}>
                적립 포인트
              </div>
              <input
                type='number'
                value={text * 0.005}
                onChange={handleChange}
                disabled
              />
              P <br />
            </div>
            <div className={styles.explain}>
              홍길동 님의 등급은 브론즈입니다. <br />
              포인트 충전 금액의 0.5%가 적립됩니다.{' '}
            </div>
            <div className={styles.total}>
              = {Number(text) + Number(text * 0.005)} P
            </div>
          </div>

          <div className={styles.totalAmount}>
            <div className={styles.totalAmountTitle}>
              충전 후 예상 포인트
            </div>
            <div
              className={styles.totalAmountInput}
              type='text'
            >
              {Number(text) + Number(text * 0.005)} P{' '}
            </div>
            <button className={styles.chargeBtn}>
              충전하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargeModal;

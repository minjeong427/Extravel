import React, {
  useCallback,
  useReducer,
  useRef,
  useState,
} from 'react';
import styles from '../../../scss/Section1.module.scss';
import rectangle from '../../../assets/img/home2.jpg';

import { useNavigate } from 'react-router-dom';

import { debounce } from 'lodash';
import ChargeModal from './ChargeModal';

const Section1 = () => {
  // useRef를 사용해서 태그 참조하기
  const $fileTag = useRef();

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

      {modalOpen && <ChargeModal />}
    </>
  );
};

export default Section1;

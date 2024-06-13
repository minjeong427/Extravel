import React from 'react';
import styles from '../../../scss/Section1.module.scss';
import rectangle from '../../../assets/img/home2.jpg';

import { KAKAO_AUTH_URL } from '../../../config/kakao-config';

import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import Login from '../../user/Login';

const Section1 = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/Login');
  };

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
            <button className={styles.section1More}>
              More →
            </button>
          </div>
          <a href={KAKAO_AUTH_URL}>
            <img src={rectangle} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Section1;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/host-config';

//컨텍스트 생성
export const AuthContext = React.createContext({
  isLoggedIn: false,
  name: '',
  nation: '',
  email: '',
  id: '',
  grade: '',
  phoneNumber: '',
  onRedirect: () => {},
  onLogout: () => {},
  onLogin: (res) => {},
  onChangeNation: (nationCode) => {},
  onChangeGrade: (grade) => {},
});

//컨텍스트 프로바이더
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [nation, setNation] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [grade, setGrade] = useState('');
  const [phone, setPhone] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navi = useNavigate();

  const loginHandler = (res) => {
    // localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('NAME', res.name);
    localStorage.setItem('NATION', res.nationCode);
    localStorage.setItem('EMAIL', res.email);
    localStorage.setItem('ID', res.id);
    localStorage.setItem('GRADE', res.grade);
    localStorage.setItem(
      'ACCESS_TOKEN',
      res.token.access_token,
    );
    localStorage.setItem(
      'REFRESH_TOKEN',
      res.token.refresh_token,
    );
    localStorage.setItem('PHONE', res.phoneNumber);
    //localStorage 토큰 넣기
    // localStorage.setItem('ROLE', role);
    setPhone(res.phoneNumber);
    setUserName(res.name);
    setEmail(res.email);
    setNation(res.nationCode);
    setId(res.id);
    setGrade(res.grade);
    setIsLoggedIn(true);
  };
  const redirectHandler = () => {
    setRedirect(!redirect);
  };

  const nationHandler = (nationCode) => {
    if (email === '') {
      alert('로그인을 먼저 해주세요.');
      navi('/login');
    } else {
      const userInfo = {
        email,
        nationCode,
      };
      axios
        .put(`${API_BASE_URL}/user/auth/nation`, userInfo)
        .then((res) => {
          setNation(res.data);
          localStorage.setItem('NATION', res.data);
        });
    }
  };

  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUserName('');
    setEmail('');
    setNation('US');
    setId('');
    setGrade('');
    setPhone('');
  };

  const gradeHandler = (grade) => {
    localStorage.setItem('GRADE', grade);
    setGrade(grade);
  };

  //컴포넌트가 마운트될 때 로그인 상태 유지 (useEffect):
  useEffect(() => {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem('NAME'));
      setNation(localStorage.getItem('NATION'));
      setEmail(localStorage.getItem('EMAIL'));
      setId(localStorage.getItem('ID'));
      setGrade(localStorage.getItem('GRADE'));
      setPhone(localStorage.getItem('PHONE'));
    }
  }, []);

  return (
    //컨텍스트 값 -> 하위 컴포넌트에 제공
    <AuthContext.Provider
      value={{
        isLoggedIn,
        name: userName,
        nation,
        id,
        email,
        grade,
        phoneNumber: phone,
        redirect,
        onRedirect: redirectHandler,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onChangeNation: nationHandler,
        onChangeGrade: gradeHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

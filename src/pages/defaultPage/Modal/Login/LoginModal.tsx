import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import "../mainModal.css";
import "./LoginModal.css";
import { useActions } from '../../../../hooks/useActions'; 
import { useTypedSelector } from '../../../../hooks/useTypedSelector'; 
import Step1Modal from '../forgotPassword/step1';
import Step2Modal from '../forgotPassword/step2';
import Step3Modal from '../forgotPassword/step3';

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  setShowModal: (show: boolean) => void;
  onSwitchToRegister?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose, setShowModal, onSwitchToRegister }) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);
  const { LoginUser } = useActions();
    const [passwordVisible, setPasswordVisible] = useState(false);

  if (!show) return null;

    const validationSchema = Yup.object({
    email: Yup.string()
      .email('Невірна електронна адреса')
      .required('Обов’язкове поле'),
    password: Yup.string()
      .min(8, 'Пароль повинен містити не менше 8 символів')
      .max(20, 'Пароль не може містити більше 20 символів')
      .matches(/^(?=.*[a-z])(?=.*[A-Z]).*$/, 'Пароль повинен містити принаймні одну велику літеру і одну малу літеру англійського алфавіту')
      .matches(/\d/, 'Пароль повинен містити принаймні одну цифру')
      .required('Обов’язкове поле'),
  });

  const resetToLogin = () => {
    setShowForgotPassword(false);
    setShowStep2(false);
    setShowStep3(false);
  };

  const handleSwitchToForgotPassword = () => {
    resetToLogin();
    setShowForgotPassword(true);
  };

  const handleSwitchToStep2 = () => {
    resetToLogin();
    setShowStep2(true);
  };

  const handleSwitchToStep3 = () => {
    resetToLogin();
    setShowStep3(true);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      resetToLogin();
      onClose();
    }
  };

    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

    const handleSubmit = async (values: { email: string; password: string; rememberMe: boolean }) => {
      await LoginUser(values);
      setShowModal(false);
    onClose();
  };

    const handleSwitchToLogin = () => {
    setShowForgotPassword(false);
    setShowStep2(false);
    setShowStep3(false);
  };

  return (
    <>
      {!showForgotPassword && !showStep2 && !showStep3 ? (
               <div className="modal-overlay" onClick={handleBackgroundClick}>
          <div className="modal-content">
            <h2 className="modal-title">ВХІД</h2>
            
            <Formik
              initialValues={{
                email: '',
                password: '',
                rememberMe: false
              }}
              validationSchema={validationSchema}
              validateOnMount={true}
              onSubmit={handleSubmit}
            >
              {({ isValid }) => (
                <Form>
                  {/* <button className="google-button">
                    <img src="/Registerimg/google.png" alt="Google" className="google-icon" />
                    Вхід через Google
                  </button>

                  <div className="or-divider">
                    <span className="line"></span>
                    <span className="or-text">або</span>
                    <span className="line"></span>
                  </div> */}

                  <label className="input-label" htmlFor="email">Адреса електронної пошти</label>
                  <Field 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="ivan@example.com" 
                    className="input-field email-input" 
                  />
                  <ErrorMessage name="email" component="div" className="error-message" />

                  <label className="input-label" htmlFor="password">Пароль</label>
                  <div className="password-wrapper">
                    <Field 
                      id="password" 
                      name="password" 
                      type={passwordVisible ? "text" : "password"} 
                      placeholder="* * * * * * * *" 
                      className="input-field password-input" 
                    />
                    <img 
                      src={passwordVisible ? "/Registerimg/hide-icon.png" : "/Registerimg/open-icon.png"} 
                      alt={passwordVisible ? "Hide Password" : "Show Password"} 
                      className="eye-icon" 
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                  <ErrorMessage name="password" component="div" className="error-message" />

                  <p className="password-requirement">Повинен містити не менше 8 символів і не більше 20</p>
                  <label className="checkbox-container">
                    <div className="checkbox-label" style={{ marginBottom: 2 }}>
                      <Field 
                        type="checkbox" 
                        name="rememberMe"
                      />
                      Запам'ятати мене
                    </div>
                    <button className="text-link" style={{ fontSize: 13, textAlign: 'center' }} onClick={handleSwitchToForgotPassword}>Забули пароль?</button>
                  </label>
                  <button 
                    type="submit"
                    className="register-login-button" 
                    disabled={!isValid}
                    style={{ 
                      backgroundColor: isValid ? "#DA0037" : "#555",
                      cursor: isValid ? "pointer" : "default"
                    }}
                  >
                    Увійти
                  </button>
                </Form>
              )}
            </Formik>
            <div className="or-divider">
                    <span className="line"></span>
                    <span className="or-text">або</span>
                    <span className="line"></span>
                  </div>
            <p className="signin-signup-prompt">Не маєте акаунта? <button className="text-link" onClick={onSwitchToRegister}>Зареєструватись</button></p>
          </div>
        </div>
      ) : showForgotPassword && !showStep2 && !showStep3 ? (
        <Step1Modal 
          show={show} 
          onClose={() => {
            resetToLogin();
            onClose();
          }} 
          onSwitchToLogin={handleSwitchToLogin} 
          onSwitchToStep2={handleSwitchToStep2} 
        />
      ) : showStep2 && !showStep3 ? (
        <Step2Modal 
          show={show} 
          onClose={() => {
            resetToLogin();
            onClose();
          }} 
          onSwitchToStep1={handleSwitchToForgotPassword} 
          onSwitchToStep3={handleSwitchToStep3} 
        />
      ) : (
        <Step3Modal 
          show={show} 
          onClose={() => {
            resetToLogin();
            onClose();
          }} 
          onSwitchToStep2={handleSwitchToStep2} 
        />
      )}
    </>
  );
};

export default LoginModal;

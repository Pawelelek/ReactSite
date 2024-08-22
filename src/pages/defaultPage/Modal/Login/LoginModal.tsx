import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../mainModal.css"
import "./LoginModal.css"
import { useActions } from '../../../../hooks/useActions'; 
import { useTypedSelector } from '../../../../hooks/useTypedSelector'; 

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose, onSwitchToRegister }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { LoginUser } = useActions();
  const { loading } = useTypedSelector((state) => state.UserReducer);
  if (!show) return null;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Невірна електронна адреса')
      .required('Обов’язкове поле'),
    password: Yup.string()
      .min(8, 'Пароль повинен містити не менше 8 символів')
      .max(20, 'Пароль не може містити більше 20 символів')
      .matches(/^(?=.*[a-z])(?=.*[A-Z]).*$/, 'Пароль повинен містити принаймні одну велику літеру і одну малу літеру англійського алфавіту')
      .required('Обов’язкове поле'),
  });

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

const handleSubmit = async(values: { email: string; password: string; rememberMe: boolean }) => {
    await LoginUser(values);
    onClose();
  };

  return (
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
<button className="google-button">
          <img src="/Registerimg/google.png" alt="Google" className="google-icon" />
          Вхід через Google
        </button>

        <div className="or-divider">
          <span className="line"></span>
          <span className="or-text">або</span>
          <span className="line"></span>
        </div>

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
                  src={passwordVisible ? "/Registerimg/open-icon.png" : "/Registerimg/hide-icon.png"} 
                  alt={passwordVisible ? "Hide Password" : "Show Password"} 
                  className="eye-icon" 
                  onClick={togglePasswordVisibility}
                />
              </div>
              <ErrorMessage name="password" component="div" className="error-message" />

              <p className="password-requirement">Повинен містити не менше 8 символів і не більше 20</p>
                <label className="checkbox-container">
  <div className="checkbox-label" style={{marginBottom:2}}>
    <Field 
      type="checkbox" 
      name="rememberMe"
    />
    Запам'ятати мене
  </div>
  <a href="#" className="text-link" style={{fontSize:13, textAlign: 'center'}}>Забули пароль?</a>
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
        <p className="signin-signup-prompt">Не маєте акаунта? <a href="#" className="text-link" onClick={onSwitchToRegister}>Зареєструватись</a></p>
      </div>
    </div>
  );
};

export default LoginModal;

import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, useActionData } from 'react-router-dom';
import * as Yup from 'yup';
import "../mainModal.css";
import "./Forgot.css";
import { http } from '../../../../http';
import { toast } from 'react-toastify';
import { useEmail } from './EmailContext';
import { useActions } from '../../../../hooks/useActions';
import { useLoading } from '../../../../components/loader/LoadingContext';

interface Step3ModalProps {
  show: boolean;
  onClose: () => void;
  onSwitchToStep2: () => void;
}

const Step3Modal: React.FC<Step3ModalProps> = ({ show, onClose, onSwitchToStep2 }) => {
  const { email, setEmail } = useEmail();
  const { setLoading } = useLoading();
  const { LoginUser } = useActions();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  if (!show) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBackClick = () => {
    onSwitchToStep2();
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Пароль повинен містити не менше 8 символів')
      .max(20, 'Пароль не може містити більше 20 символів')
      .matches(/^(?=.*[a-z])(?=.*[A-Z]).*$/, 'Пароль повинен містити принаймні одну велику літеру і одну малу літеру англійського алфавіту')
      .matches(/\d/, 'Пароль повинен містити принаймні одну цифру')
      .required('Обов’язкове поле'),
    confirmPassword: Yup.string()
        .min(8, 'Пароль повинен містити не менше 8 символів')
        .max(20, 'Пароль не може містити більше 20 символів')
        .matches(/^(?=.*[a-z])(?=.*[A-Z]).*$/, 'Пароль повинен містити принаймні одну велику літеру і одну малу літеру англійського алфавіту')
        .matches(/\d/, 'Пароль повинен містити принаймні одну цифру')
      .oneOf([Yup.ref('password')], 'Паролі повинні співпадати')
      .required('Обов’язкове поле'),
  });

  const handleSubmit1 = (values: { password: string; confirmPassword: string }) => {
    console.log("Form submitted:", values);
    onClose();
  };
  const handleSubmit = async (values: { email: string, password: string; confirmPassword: string }) => {
    const loginForm = {
      email: values.email,
      password: values.password,
      rememberMe: false
    }
    http.post("api/User/ForgotPasswordStep3", values)
    .then((res) => {
      setLoading(true);
      const data= res.data
      toast(data.message, {
        style: {
          backgroundColor: '#333',
          color: '#fff',
        },
      });
      console.log(data.success)
      if(data.success) {
        setEmail(values.email);
        
        LoginUser(loginForm);
        onClose();
      }
      setLoading(false);
    });
    //await LoginUser(loginForm);
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <div className="back-arrow-container">
          <img
            onClick={handleBackClick}
            src="/Forgotimg/arrow.png"
            alt="Back"
            className="back-arrow"
          />
          <h2 className="modal-title" style={{ marginBottom: 10, marginLeft: 35 }}>До входу</h2>
        </div>
        
        <p className="step-indicator">Етап 3 з 3</p>

        <Formik
          initialValues={{
            email: email,
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          validateOnMount={true}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form>
              <label className="input-label" htmlFor="password">Введіть новий пароль</label>
              <div className="password-wrapper">
                <Field 
                  id="password" 
                  name="password" 
                  type={passwordVisible ? "text" : "password"} 
                  placeholder="********" 
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
              <p className="password-requirement">Повинен містити не менше 8 символів</p>

              <label className="input-label" htmlFor="confirmPassword">Повторити пароль</label>
              <div className="password-wrapper">
                <Field 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  type={confirmPasswordVisible ? "text" : "password"} 
                  placeholder="********" 
                  className="input-field password-input"
                />
                <img 
                  src={confirmPasswordVisible ? "/Registerimg/hide-icon.png" : "/Registerimg/open-icon.png"} 
                  alt={confirmPasswordVisible ? "Hide Password" : "Show Password"} 
                  className="eye-icon" 
                  onClick={toggleConfirmPasswordVisibility}
                />
              </div>
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />

              {/* <div className="checkbox-container">
                <label className="checkbox-label">
                  <Field 
                    type="checkbox" 
                    name="rememberMe"
                    className="checkbox"
                  />
                  Запам'ятати мене
                </label>
              </div> */}

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
      </div>
    </div>
  );
};

export default Step3Modal;

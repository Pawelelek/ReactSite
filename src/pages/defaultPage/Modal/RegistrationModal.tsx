import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./RegistrationModal.css";

interface RegistrationModalProps {
  show: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ show, onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
    firstCheckbox: Yup.boolean()
      .oneOf([true], 'Потрібно підтвердити, що вам є 21 рік'),
    secondCheckbox: Yup.boolean()
      .oneOf([true], 'Потрібно погодитись з умовами')
  });

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <h2 className="modal-title">РЕЄСТРАЦІЯ</h2>
        
        <Formik
          initialValues={{
            email: '',
            password: '',
            firstCheckbox: false,
            secondCheckbox: false,
          }}
          validationSchema={validationSchema}
          validateOnMount={true}
          onSubmit={(values) => {
            alert('Хелоу ворлд');
          }}
        >
          {({ isValid }) => (
            <Form>
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

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <Field 
                    type="checkbox" 
                    name="firstCheckbox" 
                  />
                  Я підтверджую, що мені є 21 і не перебуваю в реєстрі осіб, яким обмежено доступ до гральних закладів та/або участь в азартних іграх
                </label>

                <label className="checkbox-label">
                  <Field 
                    type="checkbox" 
                    name="secondCheckbox" 
                  />
                  <span>
                    Ознайомлений(-на) та погоджуюсь з  
                    <a href="#" className="checkbox-link" style={{marginLeft: 4}}>умовами договору оферти</a>, 
                    <a href="#" className="checkbox-link"> правилами організатора азартних ігор</a>, 
                    <a href="#" className="checkbox-link"> політикою конфіденційності</a>
                  </span>
                </label>

                <label className="checkbox-label">
                  <Field 
                    type="checkbox" 
                    name="thirdCheckbox"
                  />
                  Даю згоду на обробку моїх персональних даних
                </label>
              </div>

              <button 
                type="submit"
                className="register-button2" 
                disabled={!isValid}
                style={{ 
                  backgroundColor: isValid ? "#DA0037" : "#555",
                  cursor: isValid ? "pointer" : "default"
                }}
              >
                Зареєструватись
              </button>
            </Form>
          )}
        </Formik>

        <div className="or-divider">
          <span className="line"></span>
          <span className="or-text">або</span>
          <span className="line"></span>
        </div>

        <button className="google-button">
          <img src="/Registerimg/google.png" alt="Google" className="google-icon" />
          Вхід через Google
        </button>

        <p className="signin-prompt">Маєте акаунт? <a href="#" className="signin-link">Увійти</a></p>
      </div>
    </div>
  );
};

export default RegistrationModal;

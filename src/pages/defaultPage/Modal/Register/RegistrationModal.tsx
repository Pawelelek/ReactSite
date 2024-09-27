import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import "./RegistrationModal.css";
import "../mainModal.css"
import { jwtDecode } from "jwt-decode";
import { gapi } from "gapi-script";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { APP_ENV } from '../../../../env';
import { http } from '../../../../http';
import { useActions } from '../../../../hooks/useActions';
import { useDispatch } from 'react-redux';

interface RegistrationModalProps {
  show: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ show, onClose, onSwitchToLogin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigator = useNavigate();
  const { LoginUser } = useActions();
  useEffect(() => {
    const start = () => {
      gapi.client.init({ 
        clientId: APP_ENV.GOOGLE_AUTH_CLIENT_ID,
        scope: ''
      })
    }
  }, []);
  const dispatch = useDispatch();
  if (!show) return null;
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const responseGoogle = (responce: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const model = {
      provider: "Google",
      token: (responce as GoogleLoginResponse).tokenId 
    }

    console.log("Send data to googleExtLogin",model)
    http.post("api/User/GoogleExternalLogin", model)
      .then(x =>
      {
        console.log("x.Data.Payload ", x.data.payload);
        const user = jwtDecode(x.data.payload.token);
        console.log("UserJWTDecode: ", user)
        localStorage.token = x.data.payload;
        
        // dispatch({
        //   type: AuthReducerActionType.LOGIN_USER,
        //   payload: IUserPayload(user)
        // });
        navigator("/");
      });
    console.log("Login google response", responce);
  }
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
    firstCheckbox: Yup.boolean()
      .oneOf([true], 'Потрібно підтвердити, що вам є 21 рік'),
    secondCheckbox: Yup.boolean()
      .oneOf([true], 'Потрібно погодитись з умовами'),
    thirdCheckbox: Yup.boolean()
      .oneOf([true], 'Згода на обробку даних')
  });

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (values: { email: string; password: string; rememberMe: boolean }) => {
    await LoginUser(values);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <h2 className="modal-title">РЕЄСТРАЦІЯ</h2>
        
        <Formik
          initialValues={{
            email: '',
            password: '',
            phoneNumber: '',
            firstCheckbox: false,
            secondCheckbox: false,
            thirdCheckbox: false
          }}
          
          validationSchema={validationSchema}
          validateOnMount={true}
          onSubmit={(values) => {
            //alert('Хелоу ворлд');
            const user = {
              email: values.email,
              password: values.password,
              confirmPassword: values.password,
            };
            const values2 = { email: user.email, password: user.password, rememberMe: false }
            http.post("api/User/Create", user).then(() => {
              handleSubmit(values2);
              navigator("/");
              onClose();
            });
            
            
            // Create(values);
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
                  src={passwordVisible ? "/Registerimg/hide-icon.png" : "/Registerimg/open-icon.png"} 
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
                className="register-login-button" 
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

        {/* <button className="google-button">
          <img src="/Registerimg/google.png" alt="Google" className="google-icon" />
          Вхід через Google
        </button>
        <GoogleLogin clientId={APP_ENV.GOOGLE_AUTH_CLIENT_ID}
                  buttonText="Login with google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                /> */}
        <p className="signin-signup-prompt">Маєте акаунт? <button className="text-link" onClick={onSwitchToLogin}>Увійти</button></p>
      </div>
    </div>
  );
};

export default RegistrationModal;

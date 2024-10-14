import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import "../mainModal.css";
import "./Forgot.css";
import { http } from '../../../../http';
import { useEmail } from './EmailContext';
import { toast } from 'react-toastify';
import { useLoading } from '../../../../components/loader/LoadingContext';

interface Step1ModalProps {
  show: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
  onSwitchToStep2: () => void;
}

const Step1Modal: React.FC<Step1ModalProps> = ({ show, onClose, onSwitchToLogin, onSwitchToStep2 }) => {
  const { email, setEmail } = useEmail();
  const { setLoading } = useLoading();
  if (!show) return null;
  
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Невірна електронна адреса')
      .required('Обов’язкове поле'),
  });

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleSubmit = async (values: { email: string }) => {
    http.post("api/User/ForgotPasswordStep1", values)
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
          onSwitchToStep2();
        }
        setLoading(false);
      });
  };

  const handleImageClick = () => {
    onSwitchToLogin();
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <div className="back-arrow-container">
          <img
            onClick={handleImageClick}
            src="/Forgotimg/arrow.png"
            alt="Back"
            className="back-arrow"
          />
          <h2 className="modal-title" style={{marginBottom: 10}}>Забули пароль?</h2>
        </div>
        
        <p className="step-indicator">Етап 1 з 3</p>
        
        <p className="instructions">
          Введіть адресу електронної пошти, що була вказана Вами при реєстрації. Ми надішлемо листа з кодом для відновлення паролю.
        </p>

        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={validationSchema}
          validateOnMount={true}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form>
              <label className="input-label" htmlFor="email">Адреса електронної пошти</label>
              <Field 
                id="email" 
                name="email" 
                type="email" 
                placeholder="ivaniuk@example.com" 
                className="input-field email-input" 
              />
              <ErrorMessage name="email" component="div" className="error-message" />
              <button 
                type="submit"
                className="register-login-button" 
                disabled={!isValid}
                style={{ 
                  backgroundColor: isValid ? "#DA0037" : "#555",
                  cursor: isValid ? "pointer" : "default"
                }}
              >
                Отримати код
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Step1Modal;

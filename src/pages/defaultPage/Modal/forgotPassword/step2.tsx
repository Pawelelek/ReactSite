import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import "../mainModal.css";
import "./Forgot.css";
import { http } from '../../../../http';
import { useEmail } from './EmailContext';
import { toast } from 'react-toastify';

interface Step2ModalProps {
  show: boolean;
  onClose: () => void;
  onSwitchToStep1: () => void;
  onSwitchToStep3: () => void;
}

const Step2Modal: React.FC<Step2ModalProps> = ({ show, onClose, onSwitchToStep1, onSwitchToStep3 }) => {
  const { email, setEmail } = useEmail();
  if (!show) return null;
  const validationSchema = Yup.object().shape({
    receivedCodeFromEmail: Yup.string()
      .length(6, 'Код повинен містити 6 символів')
      .required('Обов’язкове поле'),
  });

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBackClick = () => {
    onSwitchToStep1();
  };

  const handleSubmit = async (values: { email: string, receivedCodeFromEmail: string }) => {
    http.post("api/User/ForgotPasswordStep2", values)
    .then((res) => {
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
        onSwitchToStep3();
      }
    });
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
          <h2 className="modal-title" style={{ marginBottom: 10 }}>Забули пароль?</h2>
        </div>
        
        <p className="step-indicator">Етап 2 з 3</p>
        
        <p className="instructions">
          Введіть код з листа, що надійшов на електронну адресу
        </p>

        <Formik
          initialValues={{
            email: email,
            receivedCodeFromEmail: '',
          }}
          validationSchema={validationSchema}
          validateOnMount={true}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form>
              <div className="code-input-container">
                <Field 
                  name="receivedCodeFromEmail"
                  type="text" 
                  placeholder="00-00-00"
                  className="input-field code-input"
                  maxLength={6}
                />
                <ErrorMessage name="receivedCodeFromEmail" component="div" className="error-message2" />
              </div>

              <p className="resend-code-text">
                Не отримали листа? <span className="resend-link">Надіслати код ще раз</span>
              </p>

              <button 
                type="submit"
                className={`register-login-button ${!isValid ? 'disabled-button' : ''}`}
                disabled={!isValid}
                style={{ 
                    backgroundColor: isValid ? "#DA0037" : "#555",
                    cursor: isValid ? "pointer" : "default"
                  }}
              >
                Підтвердити
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Step2Modal;
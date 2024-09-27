import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../style.css';
import { getbyid } from '../../../../../services/api-user-service';
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { http } from '../../../../../http';
import { toast } from 'react-toastify';

const validationSchemaMyData = Yup.object({
  firstName: Yup.string()
    .min(3, "Ім'я повинно містити мінімум 3 символи")
    .max(20, "Ім'я повинно містити максимум 20 символів")
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄє]+$/, "Ім'я може містити тільки літери")
    .required("Ім'я є обов'язковим"),
  lastName: Yup.string()
    .min(3, "Прізвище повинно містити мінімум 3 символи")
    .max(20, "Прізвище повинно містити максимум 20 символів")
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄє]+$/, "Прізвище може містити тільки літери")
    .required("Прізвище є обов'язковим"),
  email: Yup.string().email('Некоректна електронна пошта').required('Електронна пошта є обов\'язковою'),
  phoneNumber: Yup.string().matches(/^(\+380|380|0)\d{9}$/, 'Некоректний номер телефону').required('Номер телефону є обов\'язковим')
});

const validationSchemaChangePassword = Yup.object({
  oldPassword: Yup.string()
  .min(8, 'Пароль повинен містити не менше 8 символів')
  .max(20, 'Пароль не може містити більше 20 символів')
  .matches(/^(?=.*[a-z])(?=.*[A-Z]).*$/, 'Пароль повинен містити принаймні одну велику літеру і одну малу літеру англійського алфавіту')
  .matches(/\d/, 'Пароль повинен містити принаймні одну цифру')
  .required('Старий пароль є обов\'язковим'),
  newPassword: Yup.string()
  .min(8, 'Пароль повинен містити не менше 8 символів')
  .max(20, 'Пароль не може містити більше 20 символів')
  .matches(/^(?=.*[a-z])(?=.*[A-Z]).*$/, 'Пароль повинен містити принаймні одну велику літеру і одну малу літеру англійського алфавіту')
  .matches(/\d/, 'Пароль повинен містити принаймні одну цифру')
  .notOneOf([Yup.ref('oldPassword')], 'Новий пароль не може бути таким же, як старий пароль')
  .required('Новий пароль є обов\'язковим'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Паролі не співпадають')
    .required('Підтвердження пароля є обов\'язковим')
});

const Profile = () => {
  const [activeProfileTab, setActiveProfileTab] = useState<'myData' | 'changePassword'>('myData');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {user} = useTypedSelector((store) => store.UserReducer);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  const formikMyData = useFormik({
    initialValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber
    },
    enableReinitialize: true,
    validationSchema: validationSchemaMyData,
    validateOnMount: true, 
    onSubmit: (values) => {
      console.log('Дані збережено:', values);
      const setProfile = {
        id: user.Id,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber
      };
    http.put('api/User/UpdatePersonalInfo', setProfile).then(() =>
        {
            toast.success("Успішне змінення!", {
                style: {
                  backgroundColor: '#333',
                  color: '#fff',
                },
              })
        })
    }
  });

  const formikChangePassword = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: validationSchemaChangePassword,
    validateOnMount: true, 
    onSubmit: (values) => {
      const setPassword = {
        id: user.Id,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmPassword
      };
      http.put('api/User/ChangePassword', setPassword).then((res) =>
        {
          var data = res.data;
            toast(data.message, {
                style: {
                  backgroundColor: '#333',
                  color: '#fff',
                },
              })
        })
    }
  });

  useEffect(() => {
    const fetchUser = async (id: string) => {
      const result = await getbyid(id);
      setData({
        email: result.response.payload[0].email || '',
        firstName: result.response.payload[0].firstName || '',
        lastName: result.response.payload[0].lastName || '',
        phoneNumber: result.response.payload[0].phoneNumber || '',
      });
      
    };

    if (user.Id) {
      fetchUser(user.Id);
      console.log(data.email);
      console.log(data.firstName);
      console.log(data.lastName);
      console.log(data.phoneNumber);
    }
  }, [user.Id]);

  return (
    <div>
      <div className="custom-frame-440">
        <div
          className={`custom-choice ${activeProfileTab === 'myData' ? 'active-tab' : ''}`}
          onClick={() => setActiveProfileTab('myData')}
        >
          Мої дані
        </div>
        <div
          className={`custom-choice ${activeProfileTab === 'changePassword' ? 'active-tab' : ''}`}
          onClick={() => setActiveProfileTab('changePassword')}
        >
          Змінити пароль
        </div>
      </div>

      {activeProfileTab === 'myData' && (
        <form onSubmit={formikMyData.handleSubmit}>
          <div className="custom-frame-425">
            <div className="custom-div4">Ім'я</div>
            <input
              type="text"
              placeholder="Введіть ім'я"
              name="firstName"
              value={formikMyData.values.firstName}
              onChange={formikMyData.handleChange}
              onBlur={formikMyData.handleBlur}
              style={{
                width: '100%',
                height: '25px',
                background: '#2d2d2d',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '10px',
              }}
            />
            {formikMyData.touched.firstName && formikMyData.errors.firstName && (
              <div className="error-text">{formikMyData.errors.firstName}</div>
            )}
          </div>

          <div className="custom-frame-426">
            <div className="custom-div4">Прізвище</div>
            <input
              type="text"
              placeholder="Введіть прізвище"
              name="lastName"
              value={formikMyData.values.lastName}
              onChange={formikMyData.handleChange}
              onBlur={formikMyData.handleBlur}
              style={{
                width: '100%',
                height: '25px',
                background: '#2d2d2d',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '10px',
              }}
            />
            {formikMyData.touched.lastName && formikMyData.errors.lastName && (
              <div className="error-text">{formikMyData.errors.lastName}</div>
            )}
          </div>

          <div className="custom-frame-443">
            <div className="custom-div4">Електронна пошта</div>
            <input
              type="email"
              placeholder="novic@gmail.com"
              name="email"
              value={formikMyData.values.email}
              onChange={formikMyData.handleChange}
              onBlur={formikMyData.handleBlur}
              style={{
                width: '100%',
                height: '25px',
                background: '#2d2d2d',
                color: '#aaa',
                border: 'none',
                padding: '10px',
                borderRadius: '10px',
              }}
              readOnly
            />
            {formikMyData.touched.email && formikMyData.errors.email && (
              <div className="error-text">{formikMyData.errors.email}</div>
            )}
          </div>

          <div className="custom-frame-449">
            <div className="custom-div4">Номер телефону</div>
            <input
              type="tel"
              placeholder="+380(XX)XXX-XX-XX"
              name="phoneNumber"
              value={formikMyData.values.phoneNumber}
              onChange={formikMyData.handleChange}
              onBlur={formikMyData.handleBlur}
              style={{
                width: '100%',
                height: '25px',
                background: '#2d2d2d',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '10px',
              }}
            />
            {formikMyData.touched.phoneNumber && formikMyData.errors.phoneNumber && (
              <div className="error-text">{formikMyData.errors.phoneNumber}</div>
            )}
          </div>

          <div className="custom-modal-footer">
            <div className="custom-frame-2" style={{
                  backgroundColor: formikMyData.isValid ? '#da0037' : '#aaa',
                  cursor: formikMyData.isValid ? 'pointer' : 'not-allowed',
                  pointerEvents: formikMyData.isValid ? 'auto' : 'none'
                }}>
              <button
                type="submit"
                disabled={!formikMyData.isValid}
                style={{
                    backgroundColor: formikMyData.isValid ? '#da0037' : '#aaa',
                    cursor: formikMyData.isValid ? 'pointer' : 'not-allowed',
                    pointerEvents: formikMyData.isValid ? 'auto' : 'none',
                    border: 'none',
                    color: '#fff'
                  }}
              >
                ЗБЕРЕГТИ ЗМІНИ
              </button>
            </div>
          </div>
        </form>
      )}
       {activeProfileTab === 'changePassword' && (
        <form onSubmit={formikChangePassword.handleSubmit}>
          <div className="custom-frame-425">
            <div className="custom-div4">Старий пароль</div>
            <div style={{ position: 'relative' }}>
              <input
                className="custom-input"
                type={showOldPassword ? 'text' : 'password'}
                placeholder="Введіть старий пароль"
                name="oldPassword"
                value={formikChangePassword.values.oldPassword}
                onChange={formikChangePassword.handleChange}
                onBlur={formikChangePassword.handleBlur}
              />
              <img
                src={showOldPassword ? '/Registerimg/open-icon.png' : '/Registerimg/hide-icon.png'}
                alt="Toggle password visibility"
                className="custom-toggle-password-visibility"
                onClick={() => setShowOldPassword(!showOldPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  width: '20px',
                  height: '20px',
                }}
              />
            </div>
            {formikChangePassword.touched.oldPassword && formikChangePassword.errors.oldPassword && (
              <div className="error-text">{formikChangePassword.errors.oldPassword}</div>
            )}
          </div>

          <div className="custom-frame-426">
            <div className="custom-div4">Новий пароль</div>
            <div style={{ position: 'relative' }}>
              <input
                className="custom-input"
                type={showNewPassword ? 'text' : 'password'}
                placeholder="Введіть новий пароль"
                name="newPassword"
                value={formikChangePassword.values.newPassword}
                onChange={formikChangePassword.handleChange}
                onBlur={formikChangePassword.handleBlur}
              />
              <img
                src={showNewPassword ? '/Registerimg/open-icon.png' : '/Registerimg/hide-icon.png'}
                alt="Toggle password visibility"
                className="custom-toggle-password-visibility"
                onClick={() => setShowNewPassword(!showNewPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  width: '20px',
                  height: '20px',
                }}
              />
            </div>
            {formikChangePassword.touched.newPassword && formikChangePassword.errors.newPassword && (
              <div className="error-text">{formikChangePassword.errors.newPassword}</div>
            )}
          </div>

          <div className="custom-frame-426" style={{top: 371.57}}>
            <div className="custom-div4">Підтвердження нового паролю</div>
            <div style={{ position: 'relative' }}>
              <input
                className="custom-input"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Підтвердіть новий пароль"
                name="confirmPassword"
                value={formikChangePassword.values.confirmPassword}
                onChange={formikChangePassword.handleChange}
                onBlur={formikChangePassword.handleBlur}
              />
              <img
                src={showConfirmPassword ? '/Registerimg/open-icon.png' : '/Registerimg/hide-icon.png'}
                alt="Toggle password visibility"
                className="custom-toggle-password-visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  width: '20px',
                  height: '20px',
                }}
              />
            </div>
            {formikChangePassword.touched.confirmPassword && formikChangePassword.errors.confirmPassword && (
              <div className="error-text">{formikChangePassword.errors.confirmPassword}</div>
            )}
          </div>

          <div className="custom-modal-footer">
            <div className="custom-frame-2" style={{
                  backgroundColor: formikChangePassword.isValid ? '#da0037' : '#aaa',
                  cursor: formikChangePassword.isValid ? 'pointer' : 'not-allowed',
                  pointerEvents: formikChangePassword.isValid ? 'auto' : 'none'
                }}>
              <button
                type="submit"
                disabled={!formikChangePassword.isValid}
                style={{
                    backgroundColor: formikChangePassword.isValid ? '#da0037' : '#aaa',
                    cursor: formikChangePassword.isValid ? 'pointer' : 'not-allowed',
                    pointerEvents: formikChangePassword.isValid ? 'auto' : 'none',
                    border: 'none',
                    color: '#fff'
                  }}
              >
                ЗМІНИТИ ПАРОЛЬ
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../style.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { http } from '../../../../../http';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useBalance } from '../BalanceContext';

const validationSchemaDeposit = Yup.object({
    amount: Yup.number()
      .typeError('Введіть коректну суму')
      .min(100, 'Мінімальна сума 100 ГРН')
      .max(100000, 'Максимальна сума 100000 ГРН')
      .required('Сума є обов\'язковою'),
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, 'Номер картки повинен містити 16 цифр')
      .required('Номер картки є обов\'язковим'),  
    month: Yup.number()
      .min(1, 'Місяць повинен бути між 1 та 12')
      .max(12, 'Місяць повинен бути між 1 та 12')
      .required('Місяць є обов\'язковим'),
    year: Yup.number()
      .min(2023, 'Рік повинен бути не раніше 2023')
      .max(2050, 'Рік повинен бути не пізніше 2050')
      .required('Рік є обов\'язковим'),
    cvv: Yup.string()
      .matches(/^\d{3}$/, 'CVV повинен містити 3 цифри')
      .required('CVV є обов\'язковим'),
    cardHolderName: Yup.string()
      .min(3, 'Ім\'я власника картки повинно містити мінімум 3 символи')
      .max(20, 'Ім\'я власника картки повинно містити максимум 20 символів')
      .required('Ім\'я власника картки є обов\'язковим')
  });

  const validationSchemaWithdrawal = Yup.object({
    amount2: Yup.number()
      .typeError('Введіть коректну суму')
      .max(100000, 'Максимальна сума 100000 ГРН')
      .required('Сума є обов\'язковою'),
    cardNumber2: Yup.string()
      .matches(/^\d{16}$/, 'Номер картки повинен містити 16 цифр')
      .required('Номер картки є обов\'язковим'),  
  });

  const Balance: React.FC<{ activeTab: 'myBalance' | 'Deposit' | 'transactionHistory' | 'Withdrawal'}> = ({ activeTab}) => {
  const [activeProfileTab, setActiveProfileTab] = useState<'myBalance' | 'Deposit'| 'transactionHistory' | 'Withdrawal'>('myBalance');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Усі');
  const [selectedCategory, setSelectedCategory] = useState('Усі');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [calendarStartOpen, setCalendarStartOpen] = useState(false);
  const [calendarEndOpen, setCalendarEndOpen] = useState(false);
  const { balanceRef, refreshBalance } = useBalance();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
    setCategoryDropdownOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
  
    if (target && !target.closest('.select-field-wrapper')) {
      setDropdownOpen(false);
      setCategoryDropdownOpen(false);
    }
  };

// useEffect(() => {
//     getBalanceByUserId();
// }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActiveProfileTab(activeTab);
  }, [activeTab]);
  
  // window.onload = function() {
  //   getBalanceByUserId();
  // };

  // const [balance2, setBalance] = useState({
  //   money: 0,
  //   id: ''
  // });
  
  //const balanceRef = useRef({ money: 0, id:'' });
  // var balanceRef = useRef(balance2);

  // const getBalanceByUserId = () => {
  //   console.log("userId: " + user.Id);
  //   http.get('api/Balance/getByUserId?userId=' + user.Id)
  //     .then((res) =>
  //     {
  //       {
  //         var data = res.data.payload[0];
  //         console.log("money:", data.money);
  //         setBalance(data);
  //         balanceRef.current.id = data.id;
  //         balanceRef.current.money = data.money;
  //       }
  //     })
  // }

  const handleSubmitClick = () => {
    const setWithdrawal = {
      balanceId: balanceRef.current.id,
      money: parseInt(formikWithdrawal.values.amount2)
    };
    console.log(setWithdrawal);
  http.put('api/Balance/Withdrawal', setWithdrawal).then(() =>
      {
        console.log(setWithdrawal);
        //getBalanceByUserId();
        refreshBalance();
        if (parseInt(formikWithdrawal.values.amount2) > balanceRef.current.money)
        {
          toast.error("Помилка!", {
            style: {
              backgroundColor: '#333',
              color: '#fff',
            },
          })
          return;
        }
        toast.success("Успішне зняття!", {
          style: {
            backgroundColor: '#333',
            color: '#fff',
          },
        })
      })
  }
  
  const formikDeposit = useFormik({
    initialValues: {
      amount: '100',
      cardNumber: '',
      month: '',
      year: '',
      cvv: '',
      cardHolderName: ''
    },
    validationSchema: validationSchemaDeposit,
    validateOnMount: true, 
    onSubmit: (values) => {
        // console.log(parseInt(values.amount))
        const setTransaction = {
            balanceId: balanceRef.current.id,
            money: parseInt(values.amount)
          };
        http.put('api/Balance/Deposit', setTransaction).then(() =>
            {
              //getBalanceByUserId();
              refreshBalance();
                toast("Успішне поповнення!", {
                    style: {
                      backgroundColor: '#333',
                      color: '#fff',
                    },
                  })
            })
    }
  });

  useEffect(() => {
    console.log('isValid:', formikDeposit.isValid, 'errors:', formikDeposit.errors, 'touched:', formikDeposit.touched);
  }, [formikDeposit.values, formikDeposit.isValid, formikDeposit.errors, formikDeposit.touched]);
  

  const formikWithdrawal = useFormik({
    initialValues: {
      amount2: '',
      cardNumber2: ''
    },
    validationSchema: validationSchemaWithdrawal,
    validateOnMount: true, 
    onSubmit: (values) => {
    
        
    }
  });

  const handleCardChange = (e: any) => {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value === '') {
        formikDeposit.setFieldValue('cardNumber', '');
        return;
      }

      formikDeposit.setFieldValue('cardNumber', value);
  };

  const handleCardChange2 = (e: any) => {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value === '') {
        formikWithdrawal.setFieldValue('cardNumber2', '');
        return;
      }

      formikWithdrawal.setFieldValue('cardNumber2', value);
  };

  const handleAmountChange = (e: any) => {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value === '' || value === '0') {
      formikDeposit.setFieldValue('amount', '');
      return;
    }

    if (parseInt(value) > 100000) {
      value = '100000';
    }

    formikDeposit.setFieldValue('amount', value);
  };

  const handleAmountChange2 = (e: any) => {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value === '0') {
      formikWithdrawal.setFieldValue('amount2', '');
      return;
    }

    if (parseInt(value) > 100000) {
      value = '100000';
    }

    formikWithdrawal.setFieldValue('amount2', value);
  };

  const handleMonthChange = (e: any) => {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value === '') {
      formikDeposit.setFieldValue('month', '');
      return;
    }

    if (parseInt(value) > 12) {
      value = '12';
    }

    if (value.startsWith('0')) {
        value = ''; 
      }

    formikDeposit.setFieldValue('month', value);
  };

  const handleYearChange = (e: any) => {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value === '') {
      formikDeposit.setFieldValue('year', '');
      return;
    }

    if (!value.startsWith('20')) {
      value = '20'; 
    }

    if (value.length > 4) {
      value = value.slice(0, 4); 
    }

    formikDeposit.setFieldValue('year', value);
  };

  const handleCVVChange = (e: any) => {
    let value = e.target.value.replace(/\D/g, ''); 

    if (value === '') {
      formikDeposit.setFieldValue('cvv', '');
      return;
    }

    if (value.length > 3) {
      value = value.slice(0, 3); 
    }

    if (value.startsWith('0')) {
      value = ''; 
    }

    formikDeposit.setFieldValue('cvv', value);
  };

  const handleBlur = () => {
    if (formikDeposit.values.amount === '' || parseInt(formikDeposit.values.amount) < 100) {
      formikDeposit.setFieldValue('amount', '100');
    }
  };

  return (
    <div>
              <div className="custom-frame-440">
                <div
                  className={`custom-choice ${activeProfileTab === 'myBalance' ? 'active-tab' : ''}`}
                  onClick={() => setActiveProfileTab('myBalance')}
                >
                  Мій баланс
                </div>
                <div
                  className={`custom-choice ${activeProfileTab === 'Deposit' ? 'active-tab' : ''}`}
                  onClick={() => setActiveProfileTab('Deposit')}
                >
                  Депозит
                </div>
                <div
                  className={`custom-choice ${activeProfileTab === 'transactionHistory' ? 'active-tab' : ''}`}
                  onClick={() => setActiveProfileTab('transactionHistory')}
                >
                  Історія транзакцій
                </div>
                <div
                  className={`custom-choice ${activeProfileTab === 'Withdrawal' ? 'active-tab' : ''}`}
                  onClick={() => setActiveProfileTab('Withdrawal')}
                >
                  Вивід
                </div>
              </div>

              {activeProfileTab === 'myBalance' && (
                <div className="custom-frame-425">
                <div className="balance-container">
                  <div className="balance-row">
                    <span className="balance-label">Реальні гроші:</span>
                    <span className="balance-value">{balanceRef.current.money} UAH</span>
                  </div>
                  <div className="balance-row">
                    <span className="balance-label">Доступно на виведення:</span>
                    <span className="balance-value">{balanceRef.current.money} UAH</span>
                  </div>
                </div>
              </div>
              )}

               {activeProfileTab === 'Deposit' && (
                <form onSubmit={formikDeposit.handleSubmit}>
                <div className="custom-frame-425">
                <div className="deposit-form">
                  <div className="custom-input-row">
                    <label className="custom-input-label" style={{paddingTop: '0px'}}>Введіть суму</label>
                    <label className="custom-input-label" style={{paddingTop: '0px',marginRight:'-25px'}}>мін.сума 100.00 ГРН</label>
                  </div>
                  <input
                    type="text"
                    className="custom-input-field"
                    placeholder="10000"
                    name="amount"
                    value={formikDeposit.values.amount}
                    onChange={handleAmountChange} 
                    onBlur={handleBlur} 
                    maxLength={6} 
                  />
                  {formikDeposit.touched.amount && formikDeposit.errors.amount && (
                    <div className="error-text">{formikDeposit.errors.amount}</div>
                  )}
      
                  <div className="custom-input-row">
                    <label className="custom-input-label">Номер картки</label>
                  </div>
                  <input
                    type="text"
                    className="custom-input-field"
                    placeholder="0000 0000 0000 0000"
                    name="cardNumber"
                    value={formikDeposit.values.cardNumber}
                    onChange={handleCardChange}
                    onBlur={formikDeposit.handleBlur}
                    maxLength={16}
                  />
                  {formikDeposit.touched.cardNumber && formikDeposit.errors.cardNumber && (
                    <div className="error-text">{formikDeposit.errors.cardNumber}</div>
                  )}
      
                  <div className="custom-input-row">
                    <div className="custom-input-group">
                      <label className="custom-input-label">Місяць</label>
                      <input
                        type="text"
                        className="input-small"
                        placeholder="1-12"
                        name="month"
                        value={formikDeposit.values.month}
                        onChange={handleMonthChange}
                        onBlur={formikDeposit.handleBlur}
                        maxLength={2}
                      />
                      {formikDeposit.touched.month && formikDeposit.errors.month && (
                        <div className="error-text" >{formikDeposit.errors.month}</div>
                      )}
                    </div>
                    <div className="custom-input-group">
                      <label className="custom-input-label">Рік</label>
                      <input
                        type="text"
                        className="input-small"
                        placeholder="YYYY"
                        name="year"
                        value={formikDeposit.values.year}
                        onChange={handleYearChange}
                        onBlur={formikDeposit.handleBlur}
                        maxLength={4}
                      />
                      {formikDeposit.touched.year && formikDeposit.errors.year && (
                        <div className="error-text" >{formikDeposit.errors.year}</div>
                      )}
                    </div>
                    <div className="custom-input-group" style={{top:-0.3}}>
                      <label className="custom-input-label">CVV</label>
                      <input
                        type="text"
                        className="input-small"
                        placeholder="123"
                        name="cvv"
                        value={formikDeposit.values.cvv}
                        onChange={handleCVVChange}
                        onBlur={formikDeposit.handleBlur}
                        maxLength={3}
                      />
                      {formikDeposit.touched.cvv && formikDeposit.errors.cvv && (
                        <div className="error-text" >{formikDeposit.errors.cvv}</div>
                      )}
                    </div>
                  </div>
      
                  <div className="custom-input-row" style={{marginTop:'15px'}}>
                    <label className="custom-input-label">Ім'я власника картки</label>
                  </div>
                  <input
                    type="text"
                    className="custom-input-field"
                    placeholder="Ім'я власника картки"
                    name="cardHolderName"
                    value={formikDeposit.values.cardHolderName}
                    onChange={formikDeposit.handleChange}
                    onBlur={formikDeposit.handleBlur}
                  />
                  {formikDeposit.touched.cardHolderName && formikDeposit.errors.cardHolderName && (
                    <div className="error-text">{formikDeposit.errors.cardHolderName}</div>
                  )}
                </div>
                </div>
                <div className="custom-modal-footer">
                  <div className="custom-frame-2" style={{
                        backgroundColor: formikDeposit.isValid ? '#da0037' : '#aaa',
                        cursor: formikDeposit.isValid ? 'pointer' : 'not-allowed',
                        pointerEvents: formikDeposit.isValid ? 'auto' : 'none',
                        left: '1170px'
                      }}>
                    <button
                      type="submit"
                      disabled={!formikDeposit.isValid}
                      style={{
                          backgroundColor: formikDeposit.isValid ? '#da0037' : '#aaa',
                          cursor: formikDeposit.isValid ? 'pointer' : 'not-allowed',
                          pointerEvents: formikDeposit.isValid ? 'auto' : 'none',
                          border: 'none',
                          color: '#fff'
                        }}
                    >
                      ОПЛАТИТИ
                    </button>
                  </div>
                </div>
              </form>
              )}

              {activeProfileTab === 'transactionHistory' && ( 
                <>
                <div className='custom-frame-425'>
    <div className="transaction-history-form">
      <div className="custom-input-row">
        <div className="custom-input-group">
          <label className="custom-input-label">Тип транзакції</label>
          <div className="select-field-wrapper">
            <div className="select-field">
              {selectedOption}
            </div>
            <img className={`custom-dropdown-icon ${dropdownOpen ? 'flipped' : ''}`} src="/Profileimg/downArrow.png" alt="dropdown" onClick={toggleDropdown} />
            <div className={`custom-dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
              <div className="custom-dropdown-item" onClick={() => handleOptionSelect('Усі')}>Усі</div>
              <div className="custom-dropdown-item" onClick={() => handleOptionSelect('Депозит')}>Депозит</div>
              <div className="custom-dropdown-item" onClick={() => handleOptionSelect('Вивід')}>Вивід</div>
            </div>
          </div>
        </div>

        <div className="custom-input-group">
              <label className="custom-input-label">Категорія</label>
              <div className="select-field-wrapper">
                <div className="select-field">
                  {selectedCategory}
                </div>
                <img
                  className={`custom-dropdown-icon ${categoryDropdownOpen ? 'flipped' : ''}`} // Перевертаємо іконку для категорії
                  src="/Profileimg/downArrow.png"
                  alt="dropdown"
                  onClick={toggleCategoryDropdown}
                />
                <div className={`custom-dropdown-menu ${categoryDropdownOpen ? 'active' : ''}`}>
                  <div className="custom-dropdown-item" onClick={() => handleCategorySelect('Усі')}>Усі</div>
                </div>
              </div>
            </div>

        <div className="custom-input-group">
          <label className="custom-input-label">Від</label>
          <div className="date-picker-wrapper">
          <DatePicker
      selected={startDate}
      onChange={(date: Date | null) => {
        if (date) {
          setStartDate(date);
          if (endDate < date) {
            setEndDate(date); 
          }
        }
      }}
      onMonthChange={(newMonth) => {
        const updatedStartDate = new Date(startDate);
        updatedStartDate.setMonth(newMonth.getMonth());
        setStartDate(updatedStartDate);
        if (endDate < updatedStartDate) {
          setEndDate(updatedStartDate);
        }
      }}
      dateFormat="dd.MM.yyyy"
      className="date-picker"
      placeholderText="01.01.2000"
      popperPlacement="bottom"
      open={calendarStartOpen}
      onClickOutside={() => setCalendarStartOpen(false)}
      readOnly
    />
  <img className="date-icon" src="/Profileimg/calendarPic.png" alt="calendar" onClick={() => setCalendarStartOpen(!calendarStartOpen)} />
</div>
        </div>

        <div className="custom-input-group">
              <label className="custom-input-label">До</label>
              <div className="date-picker-wrapper">
              <DatePicker
      selected={endDate}
      onChange={(date: Date | null) => {
        if (date) {
          if (date < startDate) {
            setStartDate(date);
          }
          setEndDate(date);
        }
      }}
      onMonthChange={(newMonth) => {
        const updatedEndDate = new Date(endDate);
        updatedEndDate.setMonth(newMonth.getMonth());
        if (updatedEndDate < startDate) {
          setStartDate(updatedEndDate);
        }
        setEndDate(updatedEndDate);
      }}
      dateFormat="dd.MM.yyyy"
      className="date-picker"
      placeholderText="01.01.2000"
      popperPlacement="bottom"
      open={calendarEndOpen}
      onClickOutside={() => setCalendarEndOpen(false)}
      readOnly
    />
                <img
                  className="date-icon"
                  src="/Profileimg/calendarPic.png"
                  alt="calendar"
                  onClick={() => setCalendarEndOpen(!calendarEndOpen)}
                />
              </div>
            </div>
          </div>

      <div className="custom-center-text">Немає транзакцій для показу</div>
    </div>
  </div>
                <div className="custom-modal-footer">
                <div className="custom-frame-2" style={{
                      backgroundColor: '#da0037',
                      cursor: 'pointer',
                      left: '1170px',
                      top: '270px'
                    }}>
                  <button
                    style={{
                        backgroundColor: '#da0037',
                        cursor: 'pointer',
                        border: 'none',
                        color: '#fff'
                      }}
                  >
                    ПОКАЗАТИ
                  </button>
                </div>
              </div>
              </>
              )}

{activeProfileTab === 'Withdrawal' && (
                <form onSubmit={formikWithdrawal.handleSubmit}>
                <div className="custom-frame-425">
                <div className="deposit-form">
                  <div className="custom-input-row">
                    <label className="custom-input-label" style={{paddingTop: '0px'}}>Введіть суму</label>
                    <label className="custom-input-label" style={{paddingTop: '0px',marginRight:'-25px'}}>макс.сума 100000.00 ГРН</label>
                  </div>
                  <input
                    type="text"
                    className="custom-input-field"
                    placeholder="10000"
                    name="amount2"
                    value={formikWithdrawal.values.amount2}
                    onChange={handleAmountChange2} 
                    onBlur={formikWithdrawal.handleBlur} 
                    maxLength={6} 
                  />
                  {formikWithdrawal.touched.amount2 && formikWithdrawal.errors.amount2 && (
                    <div className="error-text">{formikWithdrawal.errors.amount2}</div>
                  )}
      
                  <div className="custom-input-row">
                    <label className="custom-input-label">Номер картки</label>
                  </div>
                  <input
                    type="text"
                    className="custom-input-field"
                    placeholder="0000 0000 0000 0000"
                    name="cardNumber2"
                    value={formikWithdrawal.values.cardNumber2}
                    onChange={handleCardChange2}
                    onBlur={formikWithdrawal.handleBlur}
                    maxLength={16}
                  />
                  {formikWithdrawal.touched.cardNumber2 && formikWithdrawal.errors.cardNumber2 && (
                    <div className="error-text">{formikWithdrawal.errors.cardNumber2}</div>
                  )}
                </div>
                </div>
                <div className="custom-modal-footer">
                  <div className="custom-frame-2" style={{
                        backgroundColor: formikWithdrawal.isValid ? '#da0037' : '#aaa',
                        cursor: formikWithdrawal.isValid ? 'pointer' : 'not-allowed',
                        pointerEvents: formikWithdrawal.isValid ? 'auto' : 'none',
                        left: '1170px'
                      }}>
                    <button
                      onClick={handleSubmitClick}
                      disabled={!formikWithdrawal.isValid}
                      style={{
                          backgroundColor: formikWithdrawal.isValid ? '#da0037' : '#aaa',
                          cursor: formikWithdrawal.isValid ? 'pointer' : 'not-allowed',
                          pointerEvents: formikWithdrawal.isValid ? 'auto' : 'none',
                          border: 'none',
                          color: '#fff'
                        }}
                    >
                      ВИВЕСТИ
                    </button>
                  </div>
                </div>
              </form>
              )}
            </div>
  );
};

export default Balance;
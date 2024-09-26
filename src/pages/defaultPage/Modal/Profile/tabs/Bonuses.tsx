import React, { useState, useEffect } from 'react';
import '../style.css';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

interface BonusesProps {
  onDepositClick: () => void;
}

const Bonuses: React.FC<BonusesProps> = ({ onDepositClick }) => {
  const [activeProfileTab, setActiveProfileTab] = useState<'Funds' | 'Promocode'>('Funds');
  const [promo, setPromo] = useState('');

  const initialHours = 7; // You can change this to any initial hours
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getInitialTime = () => {
      const savedEndTime = localStorage.getItem('endTime');
      
      if (savedEndTime) {
        return new Date(parseInt(savedEndTime)); // Convert savedEndTime string to a number
      } else {
        const newEndTime = new Date();
        newEndTime.setHours(newEndTime.getHours() + initialHours); // Add 7 hours initially
        localStorage.setItem('endTime', newEndTime.getTime().toString()); // Store as string in localStorage
        return newEndTime;
      }
    };
  
    const endTime = getInitialTime().getTime(); // Convert to timestamp (number)
  
    const updateTimer = () => {
      const currentTime = new Date().getTime(); // Convert current time to number
      const timeDifference = endTime - currentTime; // Now both are numbers
  
      if (timeDifference <= 0) {
        // Reset countdown
        const newEndTime = new Date();
        newEndTime.setHours(newEndTime.getHours() + initialHours); // Reset to 7 hours
        localStorage.setItem('endTime', newEndTime.getTime().toString());
        setTimeLeft({ hours: initialHours, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        setTimeLeft({ hours, minutes, seconds });
      }
    };
  
    // Start the countdown interval
    const intervalId = setInterval(updateTimer, 1000);
  
    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const buttonOnClick = () => {
    if (promo.trim() === '')
    {
        return;
    }
    if (promo.trim().toLowerCase() === '2024go1bet')
    {
        toast("Промокод зараховано", {
            style: {
              backgroundColor: '#333',
              color: '#fff',
            },
          })
    }
    else
    {
        toast.error("Невірний промокод", {
            style: {
              backgroundColor: '#333',
              color: '#fff',
            }})
    }
  }
  return (
    <div>
              <div className="custom-frame-440">
                <div
                  className={`custom-choice ${activeProfileTab === 'Funds' ? 'active-tab' : ''}`}
                  onClick={() => setActiveProfileTab('Funds')}
                >
                  Кошти
                </div>
                <div
                  className={`custom-choice ${activeProfileTab === 'Promocode' ? 'active-tab' : ''}`}
                  onClick={() => setActiveProfileTab('Promocode')}
                >
                  Промокод
                </div>
              </div>

              {activeProfileTab === 'Funds' && (
                <div className="custom-frame-425">
                <div className="custom-funds-tab">
      <div className="custom-bonus-item">
        <img src="/Profileimg/money.png" alt="Money Stack" className="custom-bonus-image" />
        <div style={{marginLeft:'-100px'}}>
          <h3 className="custom-bonus-details">Вітальний бонус - 100%</h3>
          <h3 className="custom-bonus-details">до депозиту</h3>
          <h3 className="custom-bonus-details" style={{marginTop:'20px'}}>Бонус: 3000$</h3>
        </div>
        <div className="custom-bonus-timer">
          <p style={{marginRight:'40px', marginTop:'0px', marginBottom: '11px'}}>час до депозиту</p>
          <div className="custom-timer">
            <span style={{marginLeft:'3px', fontSize:'20px'}}>07</span> 
            <span style={{marginLeft:'7px', fontSize:'20px'}}>{String(timeLeft.hours).padStart(2, '0')}</span>
            <span style={{marginLeft:'15px', fontSize:'20px'}}>{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span style={{marginLeft:'22px', fontSize:'20px'}}>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
          <div className="custom-timer">
            <span style={{fontSize:'13px'}}>днів</span>  
            <span style={{fontSize:'13px'}}>годин</span> 
            <span style={{fontSize:'13px'}}>хвилин</span>  
            <span style={{fontSize:'13px'}}>секунд</span> 
          </div>
        </div>
        <div className="custom-deposit-button">
          <button onClick={onDepositClick}>ДЕПОЗИТ</button>
        </div>
      </div>
    </div>
              </div>
              )}

               {activeProfileTab === 'Promocode' && (
                <>
                <div className="custom-frame-425">
                <div className="custom-div4">Промокод</div>
                <input
                  type="text"
                  placeholder="Введіть Промокод"
                  name="promo"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
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
              </div>

<div className="custom-modal-footer">
<div className="custom-frame-2" onClick={buttonOnClick} style={{
      backgroundColor: '#da0037',
      cursor: 'pointer',
      left: '1070px',
      top: '530px'
    }}>
  <button
    style={{
        backgroundColor: '#da0037',
        cursor: 'pointer',
        border: 'none',
        color: '#fff'
      }}
  >
    ВИКОРИСТАТИ ПРОМОКОД
  </button>
</div>
</div>
</>
              )}
            </div>
  );
};

export default Bonuses;
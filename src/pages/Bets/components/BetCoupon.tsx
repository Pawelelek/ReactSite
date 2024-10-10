import './BetCoupon.css'
import {useState, useEffect} from "react";
import RegistrationModal from '../../defaultPage/Modal/Register/RegistrationModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LoginModal from '../../defaultPage/Modal/Login/LoginModal';

const BetCoupon = ({coefficient, teams}: any) => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuth } = useTypedSelector((state) => state.UserReducer);
  const [stake, setStake] = useState('50');
  const [potentialWinnings, setPotentialWinnings] = useState('0');

  const handleOpenRegistrationModal = () => setShowRegistrationModal(true);
  const handleCloseRegistrationModal = () => setShowRegistrationModal(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const onSwitchToLogin = () => {
    setShowRegistrationModal(false);
    setShowLoginModal(true);
  };

  const onSwitchToRegister = () => {
    setShowLoginModal(false);
    setShowRegistrationModal(true);
  };

  const handleStakeChange = (value: any) => {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue === '') {
      setStake('0');
    } else if (parseInt(numericValue) <= 100000) {
      setStake(numericValue);
    }
  };

  const handleStakeButtonClick = (value: any) => {
    setStake(value);
  };

  const handleBet = () => {
    if (!isAuth) {
      handleOpenRegistrationModal();
      return;
    }
    
  };

  useEffect(() => {
    const winnings = (parseFloat(stake) * coefficient).toFixed(2);
    setPotentialWinnings(winnings);
  }, [stake, coefficient]);

  return (
    <>
    <div className="custom-coupon-detailed-frame">
      <div className="custom-coupon-header2">
        <div className="custom-coupon-title2">КУПОН</div>
        {/* <div className="custom-coupon-tab2">МОЇ СТАВКИ</div> */}
      </div>
      {/* <div className="custom-coupon-tabs2">
        <button className="custom-coupon-tab-button2 active">Ординар</button>
        <button className="custom-coupon-tab-button2">Експрес</button>
        <button className="custom-coupon-tab-button2">Система</button>
      </div> */}
      <div className="custom-coupon-bet2">
        <div className="custom-coupon-bet-info2">
          <div className="custom-coupon-bet-type2">Більше (4.5)</div>
          {/* <div className="custom-coupon-bet-odds2">1.53</div> */}
          <div className="custom-coupon-stake-buttons2" style={{width:'25%'}}>
          <button className="stake-button" >{coefficient}</button>
        </div>
          {/* <button className="custom-coupon-remove2">&times;</button> */}
        </div>
        <div className="custom-coupon-bet-detail2" style={{color:'#fff'}}>Виграш</div>
        <div className="custom-coupon-bet-detail2">{teams.team1} – {teams.team2}</div>
      </div>
      {/* <div className="custom-coupon-stake2">
        <input type="text" className="custom-coupon-input2" value="50" /> UAH
        <div className="custom-coupon-stake-buttons2">
          <button>10</button>
          <button>20</button>
          <button className="active2">50</button>
          <button>100</button>
          <button>200</button>
        </div>
      </div> */}
     <div className="custom-coupon-stake2">
        {/* Stake input section */}
        <div className="custom-coupon-input-container">
          <input type="text" className="custom-coupon-input2" value={stake}
              onChange={(e) => handleStakeChange(e.target.value)}/>
          <span className="custom-coupon-currency">UAH</span>
        </div>
        
        {/* Buttons section */}
        {/* <div className="custom-coupon-stake-buttons2">
          <button className="stake-button">10</button>
          <button className="stake-button">20</button>
          <button className="stake-button active2">50</button>
          <button className="stake-button">100</button>
          <button className="stake-button">200</button>
        </div> */}
        <div className="custom-coupon-stake-buttons2">
            {['10', '20', '50', '100', '200'].map((amount) => (
              <button
                key={amount}
                className={`stake-button ${stake === amount ? 'active2' : ''}`}
                onClick={() => handleStakeButtonClick(amount)}
              >
                {amount}
              </button>
            ))}
          </div>
      </div>
      <div className="custom-coupon-summary2">
        <div className="custom-coupon-summary-row2" style={{paddingBottom:'10px'}}>
          <div className="custom-coupon-bet-type2" style={{marginTop:'10px', color:'#b0b0b0'}}>Загальний коефіцієнт</div>
          <div className="custom-coupon-stake-buttons2" style={{width:'25%'}}>
          <button className="stake-button">{coefficient}</button>
        </div>
        </div>
        <div className="custom-coupon-summary-row2">
          <div style={{fontSize:'14px'}}>Сума потенційного виграшу</div>
          <div style={{width:'25%', fontSize:'14px'}}>{potentialWinnings} UAH</div>
        </div>
      </div>
      <button className="custom-coupon-submit2" onClick={handleBet}>Зробити ставку</button>
      {/* <button className="custom-coupon-clear2">
        <img src="/icons/trash-icon.svg" alt="clear" />
      </button> */}
    </div>
    <RegistrationModal 
    show={showRegistrationModal} 
    onClose={handleCloseRegistrationModal} 
    onSwitchToLogin={onSwitchToLogin}
  />
  <LoginModal 
  show={showLoginModal} 
  setShowModal={setShowLoginModal}
  onClose={handleCloseLoginModal} 
  onSwitchToRegister={onSwitchToRegister}
/>
</>
  );
};

export default BetCoupon;
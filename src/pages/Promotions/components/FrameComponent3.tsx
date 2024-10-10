import { FunctionComponent, useState } from "react";
import "./FrameComponent3.css";
import RegistrationModal from '../../defaultPage/Modal/Register/RegistrationModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LoginModal from '../../defaultPage/Modal/Login/LoginModal';
import ProfileModal from "../../defaultPage/Modal/Profile/ProfileModal";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuth } = useTypedSelector((state) => state.UserReducer);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'balance' | 'bonuses' | 'betHistory' | 'favourite'>('profile');
  const [balanceTab, setBalanceTab] = useState<'myBalance' | 'Deposit' | 'transactionHistory' | 'Withdrawal'>('myBalance');
  const [bonusesTab, setBonusesTab] = useState<'Funds' | 'Promocode'>('Funds');
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

  const handleOpenProfileModalOnBonuses = () => {
    if (!isAuth)
    {
       handleOpenRegistrationModal();
       return;
    }
    toast.warning("User is already authorised", {
      style: {
        backgroundColor: '#333',
        color: '#fff',
      },
    })
    // setActiveTab('bonuses');
    // setShowProfileModal(false);
    // setTimeout(() => setShowProfileModal(true), 0);
  };

  return (
    <>
    <div className={`custom-promotions-bonus-offer-wrapper ${className}`}>
      <div className="custom-promotions-bonus-offer">
        <img
          className="custom-promotions-bonus-offer-child"
          loading="lazy"
          alt=""
          src="Promotionsimg/scene.png"
        />
        <div className="custom-promotions-parent">
                <h1 className="h1">
                  <p className="p" style={{paddingBottom:'30px', paddingTop:'30px'}}>
                    <span style={{fontSize:'60px'}}>ВІТАЛЬНИЙ БОНУС</span>
                  </p>
                  <span className="custom-promotions-span" style={{paddingLeft:'130px'}}>ЗАРЕЄСТРУЙСЯ І</span>
                  <p className="custom-promotions-p1" style={{color:'#ebade6', paddingLeft:'115px'}}>ОТРИМУЙ БОНУСИ</p>
                </h1>
                <div className="bonus-link" style={{paddingLeft:'130px'}}>
                  <div className="bonus-term">
                    <div className="wrapper">
                      <h1 className="h11">ДО</h1>
                    </div>
                    <b className="custom-promotions-empty-bonus">300$</b>
                  </div>
                </div>
                <div
                  className="custom-promotions-register-now-button"
                  onClick={handleOpenProfileModalOnBonuses}
                  style={{paddingLeft:'150px'}}
                >
                  <button className="custom-promotions-register-now-link">
                    <b className="b">Отримати бонус</b>
                  </button>
                </div>
        </div>
      </div>
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
<ProfileModal 
        show={showProfileModal} 
        onClose={() => setShowProfileModal(false)} 
        activeTab={activeTab}
        balanceTab={balanceTab}
        bonusesTab={bonusesTab}
      />
  </>
  );
}
export default FrameComponent3;

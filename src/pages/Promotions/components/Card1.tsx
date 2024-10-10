import { FunctionComponent, useState, useEffect } from "react";
import "./CardComponent.css"
import RegistrationModal from '../../defaultPage/Modal/Register/RegistrationModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LoginModal from '../../defaultPage/Modal/Login/LoginModal';
import ProfileModal from "../../defaultPage/Modal/Profile/ProfileModal";

export type EventsType = {
  className?: string;
};

const Card1: FunctionComponent<EventsType> = ({ className = "" }) => {
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

  const handleOpenProfileModal = (tab: 'Funds' | 'Promocode') => {
    if (!isAuth) {
      handleOpenRegistrationModal();
      return;
    }
    setActiveTab('bonuses');
    setBonusesTab(tab);
    setShowProfileModal(true);
  };

  // Use useEffect to synchronize state only when modal is opened
  useEffect(() => {
    if (showProfileModal) {
      // This forces ProfileModal to re-render with correct activeTab
      setActiveTab((prevTab) => prevTab);
      setBonusesTab((prevBonusesTab) => prevBonusesTab);
    }
  }, [showProfileModal]);

  return (
    <>
    <div className="custom-card-frame-498">
  <img className="custom-card-rectangle-10" src="Promotionsimg/romb.png" />
  <div className="custom-card-frame-497">
    <div className="custom-card-frame-496">
      <div className="custom-card-frame-501">
        <div className="custom-card-frame-495">
          <div className="custom-card-_3000">Промокоди</div>
        </div>
        <div className="custom-card-frame-555">
          <div className="custom-card-div">Введи промокод START і отримуй бонуси</div>
        </div>
      </div>
      <div className="custom-card-frame-394" onClick={() => handleOpenProfileModal('Promocode')}>
        <div className="custom-card-div3">Ввести промокод</div>
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
};

export default Card1;

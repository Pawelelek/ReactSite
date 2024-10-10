import { FunctionComponent, useState, useEffect } from "react";
import "./CardComponent.css"
import RegistrationModal from '../../defaultPage/Modal/Register/RegistrationModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LoginModal from '../../defaultPage/Modal/Login/LoginModal';
import ProfileModal from "../../defaultPage/Modal/Profile/ProfileModal";
import Card1 from "./Card1";
import Card2 from "./Card2";
import {useNavigate} from "react-router-dom";

export type EventsType = {
  className?: string;
};

const CardComponent: FunctionComponent<EventsType> = ({ className = "" }) => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuth } = useTypedSelector((state) => state.UserReducer);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'balance' | 'bonuses' | 'betHistory' | 'favourite'>('profile');
  const [balanceTab, setBalanceTab] = useState<'myBalance' | 'Deposit' | 'transactionHistory' | 'Withdrawal'>('myBalance');
  const [bonusesTab, setBonusesTab] = useState<'Funds' | 'Promocode'>('Funds');
  const handleOpenRegistrationModal = () => setShowRegistrationModal(true);
  const handleCloseRegistrationModal = () => setShowRegistrationModal(false);
  const navigator = useNavigate();

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const onSwitchToLogin = () => {
    setShowRegistrationModal(false);
    setShowLoginModal(true);
  };

  const onSwitchToRegister = () => {
    setShowLoginModal(false);
    setShowRegistrationModal(true);
  };

  // const handleOpenProfileModalOnBonuses = () => {
  //   if (!isAuth)
  //   {
  //      handleOpenRegistrationModal();
  //      return;
  //   }
  //   //setShowProfileModal(false);
  //   setActiveTab('bonuses');
  //   setBonusesTab('Funds');
  //   //setShowProfileModal(false);
  //   setShowProfileModal(false);
  //   setShowProfileModal(true);
  // };

  // const handleOpenProfileModalOnPromocode = () => {
  //   if (!isAuth)
  //   {
  //      handleOpenRegistrationModal();
  //      return;
  //   }
  //   //setShowProfileModal(false);
  //   setActiveTab('bonuses');
  //   setBonusesTab('Promocode');
  //   //setShowProfileModal(false);
  //   setShowProfileModal(false);
  //   setShowProfileModal(true);
  //   //setShowProfileModal(false);
  //   //setTimeout(() => setShowProfileModal(true), 0);
  // };

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
        <div className="custom-league-cards">
  <Card1></Card1>
  <Card2></Card2>
            <div className="custom-card-frame-498">
  <img className="custom-card-rectangle-10" src="Promotionsimg/ring.png" />
  <div className="custom-card-frame-497">
    <div className="custom-card-frame-496">
      <div className="custom-card-frame-501">
        <div className="custom-card-frame-495">
          <div className="custom-card-_3000">СТАВКА ДНЯ</div>
        </div>
        <div className="custom-card-frame-555">
          <div className="custom-card-div">Зроби першу ставку і отримуй бонуси</div>
        </div>
      </div>
      <div className="custom-card-frame-394" onClick={() => navigator("/bets")}>
        <div className="custom-card-div3">ЗРОБИТИ СТАВКУ</div>
      </div>
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

export default CardComponent;

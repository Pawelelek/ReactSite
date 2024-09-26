import { FunctionComponent, useState } from "react";
import "./FrameComponent2.css";
import RegistrationModal from '../Modal/Register/RegistrationModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LoginModal from '../Modal/Login/LoginModal';
import ProfileModal from "../Modal/Profile/ProfileModal";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuth } = useTypedSelector((state) => state.UserReducer);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'balance' | 'bonuses' | 'betHistory' | 'favourite'>('profile');
  const [balanceTab, setBalanceTab] = useState<'myBalance' | 'Deposit' | 'transactionHistory'>('myBalance');
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
    setActiveTab('bonuses');
    setShowProfileModal(false);
    setTimeout(() => setShowProfileModal(true), 0);
  };

  return (
    <>
    <div className={`bonus-offer-wrapper ${className}`}>
      <div className="bonus-offer">
        <img
          className="bonus-offer-child"
          loading="lazy"
          alt=""
          src={isAuth ? "Homeimg/secondMain.png" : "Homeimg/man-blood.png"}
        />
        <div className="parent">
        {!isAuth ? (
              <>
          <h1 className="h1">
            <p className="p">
              <span>{`ЗАРЕЄСТРУЙСЯ І `}</span>
              <span className="span">ОТРИМУЙ</span>
            </p>
            <p className="p1">{`БОНУСИ `}</p>
          </h1>
          <div className="bonus-link">
            <div className="bonus-term">
              <div className="wrapper">
                <h1 className="h11">ДО</h1>
              </div>
              <b className="empty-bonus">3000$</b>
            </div>
          </div>
          <div 
            className="register-now-button"
            style={{ opacity: isAuth ? 0 : 1, pointerEvents: isAuth ? 'none' : 'auto' }}
          >
            <button 
              className="register-now-link" 
              onClick={handleOpenRegistrationModal}
            >
              <b className="b">Зареєструйся зараз</b>
            </button>
          </div>
          </>
            ) : (
              <>
                <h1 className="h1">
                  <p className="p">
                    <span>Вітальний бонус - </span>
                    <span className="span">100%</span>
                  </p>
                  <p className="p1">до депозиту</p>
                </h1>
                <div className="bonus-link">
                  <div className="bonus-term">
                    <div className="wrapper">
                      <h1 className="h11">ДО</h1>
                    </div>
                    <b className="empty-bonus">3000$</b>
                  </div>
                </div>
                <div
                  className="register-now-button"
                  style={{ opacity: isAuth ? 1 : 0 }}
                  onClick={handleOpenProfileModalOnBonuses}
                >
                  <button className="register-now-link">
                    <b className="b">Отримати зараз</b>
                  </button>
                </div>
              </>
            )}
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
      />
  </>
  );
}
export default FrameComponent2;

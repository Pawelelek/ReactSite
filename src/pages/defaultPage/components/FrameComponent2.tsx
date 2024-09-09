import { FunctionComponent, useState } from "react";
import "./FrameComponent2.css";
import RegistrationModal from '../Modal/Register/RegistrationModal';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import LoginModal from '../Modal/Login/LoginModal';

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuth } = useTypedSelector((state) => state.UserReducer);

  const handleOpenRegistrationModal = () => setShowRegistrationModal(true);
  const handleCloseRegistrationModal = () => setShowRegistrationModal(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  console.log("User is authenticated:", isAuth);
  const onSwitchToLogin = () => {
    setShowRegistrationModal(false);
    setShowLoginModal(true);
  };

  const onSwitchToRegister = () => {
    setShowLoginModal(false);
    setShowRegistrationModal(true);
  };
  return (
    <>
    <div className={`bonus-offer-wrapper ${className}`}>
      <div className="bonus-offer">
        <img
          className="bonus-offer-child"
          loading="lazy"
          alt=""
          src="Homeimg/man-blood.png"
        />
        <div className="parent">
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
    onClose={handleCloseLoginModal} 
    onSwitchToRegister={onSwitchToRegister}
  />
  </>
  );

export default FrameComponent2;

import React, { useState } from "react";
import "./Counter.css";
import { Link, useNavigate } from 'react-router-dom';
import RegistrationModal from '../Modal/Register/RegistrationModal';
import LoginModal from "../Modal/Login/LoginModal";

export type CounterType = {
  className?: string;
};

const Counter: React.FC<CounterType> = ({ className = "" }) => {
  const [showRegModal, setShowRegModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const navigator = useNavigate();
  const handleOpenRegModal = () => {
    setShowLogModal(false);
    setShowRegModal(true);
  };

  const handleCloseRegModal = () => setShowRegModal(false);
  const handleOpenLogModal = () => {
    setShowRegModal(false);
    setShowLogModal(true);
  };
  const handleCloseLogModal = () => setShowLogModal(false);

  return (
    <header className={`counter ${className}`}>
      <div className="counter-child" />
      <div className="counter-inner">
        <div className="asset-24x-1-parent">
          <img
            className="asset-24x-1"
            loading="lazy"
            alt=""
            src="/Homeimg/asset-24x-1@2x.png"
            onClick={()=>navigator("/")}
            style={{ cursor: "pointer" }}
          />
          <nav className="counter-parent">
            <nav className="live-label">
              {/* <a className="live" style={{ cursor: "pointer" }}>LIVE</a> */}
              <a className="a" style={{ cursor: "pointer", left:'0px' }} onClick={()=>navigator("/bets")}>СПОРТ</a>
              {/* <a className="a1" style={{ cursor: "pointer" }} onClick={()=>navigator("/bets")}>КІБЕРСПОРТ</a> */}
              <a className="a2" style={{ cursor: "pointer", left:'120px' }} onClick={()=>navigator("/promotions")}>АКЦІЇ</a>
            </nav>
          </nav>
        </div>
      </div>
      <div className="account">
        <div className="login-button-parent">
          {/* <Link to="/" className="login-button" onClick={handleOpenLogModal}>
            Увійти
          </Link> */}
          <button className="login-button" onClick={handleOpenLogModal}>
  Увійти
</button>
        </div>
        {/* <Link to="/" className="register-button" onClick={handleOpenRegModal}>
          Реєстрація
        </Link> */}
        <button className="register-button" onClick={handleOpenRegModal}>Реєстрація</button>
      </div>
      <RegistrationModal
        show={showRegModal}
        onClose={handleCloseRegModal}
        onSwitchToLogin={handleOpenLogModal}
      />
      
      <LoginModal
      
        setShowModal={setShowLogModal}
        show={showLogModal}
        onClose={handleCloseLogModal}
        onSwitchToRegister={handleOpenRegModal}
      />
    </header>
  );
};

export default Counter;

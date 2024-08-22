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
            src="Homeimg/asset-24x-1@2x.png"
            onClick={()=>navigator("/")}
            style={{ cursor: "pointer" }}
          />
          <nav className="counter-parent">
            <nav className="live-label">
              <a className="live">LIVE</a>
              <a className="a">СПОРТ</a>
              <a className="a1">КІБЕРСПОРТ</a>
              <a className="a2">АКЦІЇ</a>
            </nav>
          </nav>
        </div>
      </div>
      <div className="account">
        <div className="login-button-parent">
          <Link to="/" className="login-button" onClick={handleOpenLogModal}>
            Увійти
          </Link>
        </div>
        <Link to="/" className="register-button" onClick={handleOpenRegModal}>
          Реєстрація
        </Link>
      </div>
      <RegistrationModal
        show={showRegModal}
        onClose={handleCloseRegModal}
        onSwitchToLogin={handleOpenLogModal}
      />
      <LoginModal
        show={showLogModal}
        onClose={handleCloseLogModal}
        onSwitchToRegister={handleOpenRegModal}
      />
    </header>
  );
};

export default Counter;

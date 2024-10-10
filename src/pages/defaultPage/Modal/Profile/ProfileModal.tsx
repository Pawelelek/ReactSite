import React, { useState, useEffect } from 'react';
import './style.css';
import Profile from './tabs/Profile';
import Balance from './tabs/Balance';
import Bonuses from './tabs/Bonuses';
import BetHistory from './tabs/betHistory';
import Favourite from './tabs/Favourite';
import { http } from '../../../../http';
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useBalance } from './BalanceContext';

interface ProfileModalProps {
  show: boolean;
  onClose: () => void;
  activeTab?: 'profile' | 'balance' | 'bonuses' | 'betHistory' | 'favourite';
  balanceTab?: 'myBalance' | 'Deposit' | 'transactionHistory' | 'Withdrawal';
  bonusesTab?: 'Funds' | 'Promocode';
}

const ProfileModal: React.FC<ProfileModalProps> = ({ show, onClose, activeTab='profile', balanceTab='myBalance', bonusesTab='Funds' }) => {
  const [activeMainTab, setActiveMainTab] = useState<'profile' | 'balance' | 'bonuses' | 'betHistory' | 'favourite'>(activeTab);
  const [activeBalanceTab, setActiveBalanceTab] = useState<'myBalance' | 'Deposit' | 'transactionHistory' | 'Withdrawal'>(balanceTab);
  const [bonusTab, setBonusTab] = useState<'Funds' | 'Promocode'>(bonusesTab);
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const { balanceRef } = useBalance();
  // useEffect(() => {
  //   if (show) {
  //     
  //     setActiveMainTab(activeTab);
  //   }
  // }, [show, activeTab]);

  useEffect(() => {
    if (show) {
      setActiveMainTab(activeTab);
      setActiveBalanceTab(balanceTab);
      setBonusTab(bonusesTab);
    }
  }, [show, activeTab, balanceTab, bonusesTab]);

  const {user} = useTypedSelector((store) => store.UserReducer);

  const [balance, setBalance] = useState({
    money: 0
  });

  // var balanceRef = useRef(balance);

  // const getBalanceByUserId = () => {
  //   console.log("userId: " + user.Id);
  //   http.get('api/Balance/getByUserId?userId=' + user.Id)
  //     .then((res) =>
  //     {
  //       {
  //         var data = res.data.payload[0];
  //         setBalance(data);
  //         balanceRef.current.money = data.money;
  //       }
  //     })
  // }

  // useEffect(() => {
  //   getBalanceByUserId();
  // }, []);

  if (!show) return null;

  return (
    <div className="custom-modal-overlay" onClick={handleBackgroundClick}>
      <div className="custom-modal-content">
        <div className="custom-modal-body">
          <div className="custom-menu-16">
            <div className="custom-rectangle-27"></div>
            <div className="custom-rectangle-29"></div>
            <div className="custom-rectangle-30"></div>
            <div className="custom-div2">
  {activeMainTab === 'profile' && 'ПРОФІЛЬ'}
  {activeMainTab === 'balance' && 'БАЛАНС'}
  {activeMainTab === 'bonuses' && 'БОНУСИ'}
  {activeMainTab === 'betHistory' && 'ІСТОРІЯ СТАВОК'}
  {activeMainTab === 'favourite' && 'УЛЮБЛЕНІ ІГРИ'}
</div>
            <div
              className={`custom-frame-444 ${activeMainTab === 'profile' ? 'active-main-tab' : ''}`}
              onClick={() => setActiveMainTab('profile')}
            >
              <div className="custom-profi">
                <img className="custom-group" src="/Profileimg/profile.png" />
              </div>
              <div className="custom-div3" style={{ left: -5 }}>ПРОФІЛЬ</div>
            </div>
            <div
              className={`custom-frame-50 ${activeMainTab === 'balance' ? 'active-main-tab' : ''}`}
              onClick={() => {setActiveMainTab('balance'); setActiveBalanceTab('myBalance');}}
            >
              <img className="custom-co" src="/Profileimg/balance.png" />
              <div className="custom-div3">БАЛАНС</div>
            </div>

            <div className={`custom-frame-75 ${activeMainTab === 'bonuses' ? 'active-main-tab' : ''}`}
              onClick={() => {setActiveMainTab('bonuses'); setBonusTab('Funds');}}>
              <div className="custom-frame-752">
                <img className="custom-gift" src="/Profileimg/bonus.png" />
                <div className="custom-div3">БОНУСИ</div>
              </div>
              {/* <div className="custom-frame-73">
                <div className="custom-_00">1</div>
              </div> */}
            </div>

            <div className={`custom-frame-52 ${activeMainTab === 'betHistory' ? 'active-main-tab' : ''}`}
              onClick={() => setActiveMainTab('betHistory')}>
              <img className="custom-tim" src="/Profileimg/history.png" />
              <div className="custom-div3">ІСТОРІЯ СТАВОК</div>
            </div>

            <div className={`custom-frame-53 ${activeMainTab === 'favourite' ? 'active-main-tab' : ''}`}
              onClick={() => setActiveMainTab('favourite')}>
              <img className="custom-email" src="/Profileimg/favourite.png" />
              <div className="custom-div3">УЛЮБЛЕНІ ІГРИ</div>
            </div>

            <div className="custom-frame-429">
              <div className="custom-frame-428">
                <div className="custom-div4">БАЛАНС</div>
                <div className="custom-_0-00-uah">{balanceRef.current.money} UAH</div>
              </div>
              <div className="custom-frame-427">
                <div className="custom-frame-63">
                  <div className="custom-div" onClick={() => {
                  setActiveMainTab('balance');
                  setActiveBalanceTab('Deposit');
                  }}>ДЕПОЗИТ</div>
                </div>
                <div className="custom-frame-64">
                  <div className="custom-div" onClick={() => {
                  setActiveMainTab('balance');
                  setActiveBalanceTab('Withdrawal');
                  }}>ВИВЕСТИ</div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-content">
            {activeMainTab === 'profile' && (
              <Profile></Profile>
            )}

            {activeMainTab === 'balance' && (
            <Balance activeTab={activeBalanceTab} ></Balance>
            )}

            {activeMainTab === 'bonuses' && (
            <Bonuses bonusesSelTab={bonusTab} onDepositClick={() => {
              setActiveMainTab('balance');
              setActiveBalanceTab('Deposit');
            }} />
            
            )}

            {activeMainTab === 'betHistory' && (
            <BetHistory></BetHistory>
            )}

            {activeMainTab === 'favourite' && (
            <Favourite></Favourite>
            )}
          </div>
        </div>
        <img
          className="custom-free-icon-font-cross-small-4338828-2"
          src="/Profileimg/close.png"
          onClick={onClose}
          alt="close"
        />
      </div>
    </div>
  );
};

export default ProfileModal;

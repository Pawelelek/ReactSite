import { FunctionComponent, useState, useEffect } from "react";
import "./Counter2.css";
import "./Counter.css";
import {Link, useNavigate} from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ProfileModal from "../Modal/Profile/ProfileModal";
import { http } from '../../../http';

export type Counter2Type = {
  className?: string;
};

const Counter2: FunctionComponent<Counter2Type> = ({
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [profileTab, setProfileTab] = useState<'profile' | 'balance' | 'bonuses' | 'betHistory' | 'favourite'>('profile');
  const [balanceTab, setBalanceTab] = useState<'myBalance' | 'Deposit' | 'transactionHistory'>('Deposit');
  // const handleOpen = (tab: typeof profileTab) => {
  //   setProfileTab(tab); // Завжди оновлюйте вкладку при відкритті
  //   setOpen(false); // Закрийте модальне вікно
  //   setTimeout(() => setOpen(true), 0); // Відкрийте модальне вікно з новою вкладкою
  // };
  const handleOpen = (tab: typeof profileTab, subTab: typeof balanceTab = 'myBalance') => {
    setProfileTab(tab);
    if (tab === 'balance') setBalanceTab(subTab); 
    setOpen(false);
    setTimeout(() => setOpen(true), 0);
  };

  const handleProfileOpen = () => handleOpen('profile');

  const handleClose = () => setOpen(false);

  const navigator = useNavigate();
  const { LogOut } = useActions();
  const Logout = () => {
    LogOut(user.Id);
    navigator("/");
  };
  const {user} = useTypedSelector((store) => store.UserReducer);

  const [balance, setBalance] = useState({
    money: 0
  });

  const getBalanceByUserId = () => {
    console.log("userId: " + user.Id);
    http.get('api/Balance/getByUserId?userId=' + user.Id)
      .then((res) =>
      {
        {
          
          var data = res.data.payload[0];
          console.log("money:", data.money);
          setBalance(data);
        }
      })
  }

  useEffect(() => {
    getBalanceByUserId();


  }, []);

  return (
    <>
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
            {user.role === "Admin" && (
  <Link to="/admin" className="a3">Admin</Link>
)}
              <a className="live" style={{ cursor: "pointer" }}>LIVE</a>
              <a className="a" style={{ cursor: "pointer" }}>СПОРТ</a>
              <a className="a1" style={{ cursor: "pointer" }}>КІБЕРСПОРТ</a>
              <a className="a2" style={{ cursor: "pointer" }}>АКЦІЇ</a>
              
            </nav>
            
          </nav>
          
        </div>
      </div>
      <div className="account">
      <div className="group-wrapper" onClick={Logout} style={{ cursor: 'pointer' }}>
          <img className="group-icon" loading="lazy" alt="" src="/Homeimg/exit.png" />
      </div>
        {/* <div className="vector-wrapper">
          <img
            className="vector-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div> */}
        <div className="uah-wrapper">
          <b className="uah">{balance.money} UAH</b>
        </div>
        <div className="group-container">
          <img
            className="group-icon1"
            loading="lazy"
            alt=""
            src="/Homeimg/account.png"
            onClick={handleProfileOpen}
            style={{ cursor: "pointer" }}
          />
        </div>
        <button className="deposit-button" onClick={() => handleOpen('balance', 'Deposit')}>
          <a className="a4">ДЕПОЗИТ</a>
        </button>
      </div>
    </header>
    <ProfileModal show={open} onClose={handleClose} activeTab={profileTab} balanceTab={balanceTab}/>
    </>
  );
};

export default Counter2;

import { FunctionComponent, useState } from "react";
import "./AdmNavbar.css";
import {Link, useNavigate} from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ProfileModal from "../defaultPage/Modal/Profile/ProfileModal";

export type AdmNavbar = {
  className?: string;
};

const AdmNavbar: FunctionComponent<AdmNavbar> = ({
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [profileTab, setProfileTab] = useState<'profile' | 'balance' | 'bonuses' | 'betHistory' | 'favourite'>('profile');
  const [balanceTab, setBalanceTab] = useState<'myBalance' | 'Deposit' | 'transactionHistory' | 'Withdrawal'>('Deposit');
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
  return (
    <>
    <header className={`counter ${className}`}>
      <div className="counter-child" />
      <div className="counter-inner">
        <div className="asset-24x-1-parent">
        <div className="group-wrapper" onClick={()=>navigator("/")} style={{ cursor: 'pointer' }}>
          <img className="group-icon" loading="lazy" alt="" src="/Homeimg/exit.png" />
      </div>
        <img
            className="asset-24x-1"
            loading="lazy"
            alt=""
            src="/Homeimg/asset-24x-1@2x.png"
            onClick={()=>navigator("/admin")}
            style={{ cursor: "pointer" }}
          />
          <nav className="counter-parent">
            <nav className="live-label">
              <Link to={"/admin/users"} className="live">Users</Link>
              <Link to={"/admin/roles"} className="a">Roles</Link>
              <Link to={"/admin/categories"} className="a1">Categories</Link>
              <Link to={"/admin/promocodes"} className="a2">Promocodes</Link>
              {/* SportAPI */}
              {/* <Link to={"/admin/sports"} className="a3">SportAPI</Link> */}
              
            </nav>
              {/* <Link to={"/admin/sport/persons"} className="a3">SportAPI/Person</Link> */}
              <Link to={"/admin/sport/opponents"} className="a3">SportAPI/Opponent</Link>
              {/* <Link to={"/admin/sport/bets"} className="a3">SportAPI/Bet</Link>
              <Link to={"/admin/sport/odds"} className="a3">SportAPI/Odds</Link> */}
              <Link to={"/admin/sport/matches"} className="a3">SportAPI/Matches</Link>
              <Link to={"/admin/sport/events"} className="a3">SportAPI/Events</Link>
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
        {/* <div className="uah-wrapper">
          <b className="uah">0.00 UAH</b>
        </div> */}
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

export default AdmNavbar;

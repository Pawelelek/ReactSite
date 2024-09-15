import { FunctionComponent } from "react";
import "./Counter2.css";
import "./Counter.css";
import {useNavigate} from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export type Counter2Type = {
  className?: string;
};

const Counter2: FunctionComponent<Counter2Type> = ({
  className = "",
}) => {
  const navigator = useNavigate();
  const { LogOut } = useActions();
  const Logout = () => {
    LogOut(user.Id);
    navigator("/");
  };
  const {user} = useTypedSelector((store) => store.UserReducer);
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
              <a className="live">LIVE</a>
              <a className="a">СПОРТ</a>
              <a className="a1">КІБЕРСПОРТ</a>
              <a className="a2">АКЦІЇ</a>
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
          <b className="uah">0.00 UAH</b>
        </div>
        <div className="group-container">
          <img
            className="group-icon1"
            loading="lazy"
            alt=""
            src="/Homeimg/account.png"
          />
        </div>
        <button className="deposit-button">
          <a className="a4">ДЕПОЗИТ</a>
        </button>
      </div>
    </header>
  );
};

export default Counter2;

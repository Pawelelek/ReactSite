import { FunctionComponent } from "react";
import "./Counter.css";
import { Link } from 'react-router-dom';

export type CounterType = {
  className?: string;
};

const Counter: FunctionComponent<CounterType> = ({ className = "" }) => {
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
        <Link to="/signin" className="login-button">
          Увійти
        </Link>
          {/* <div className="login-button">
            <a className="a3">Увійти</a>
          </div> */}
          {/* <div className="globe-1">
            <img
              className="vector-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div> */}
        </div>
        {/* <button className="register-button">
          <a className="a4">Реєстрація</a>
        </button> */}
        <Link to="/signup" className="register-button">
          Реєстрація
        </Link>
      </div>
    </header>
  );
};

export default Counter;

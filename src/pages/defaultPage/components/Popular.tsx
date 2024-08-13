import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import "./Popular.css";

export type PopularType = {
  className?: string;
};

const Popular: FunctionComponent<PopularType> = ({ className = "" }) => {
  return (
    <div className={`popular ${className}`}>
      <div className="action-header-parent">
        <div className="action-header">
          <div className="div1">Акції</div>
          <div className="action-details">
            <div className="registration-bonus">
              <div className="registration-bonus-child" />
              <div className="registration-term">
                <div className="frame-div">
                  <h1 className="h14">до</h1>
                </div>
                <b className="empty-registration">3000$</b>
              </div>
              <b className="b1">отримуй бонуси за реєстрацію</b>
            </div>
            <div className="div2">Популярні матчі</div>
          </div>
        </div>
        <div className="fast-withdrawal">
          <div className="rectangle-parent">
            <div className="frame-child" />
            <FrameComponent1
              emptyWithdrawal="500$"
              prop="швидко "
              prop1="виводь"
            />
            <div className="withdrawal-description">
              <b className="b2">швидкі виведення до 500€</b>
            </div>
          </div>
        </div>
        <div className="all-promotions">
          <div className="promotion-header-parent">
            <div className="promotion-header">
              <div className="all-promotions-button">
                <div className="div3">Усі акції</div>
              </div>
              <div className="risk-free">
                <div className="risk-free-child" />
                <div className="risk-free-offer-wrapper">
                  <FrameComponent1
                    emptyWithdrawal="50$"
                    prop="ставка "
                    prop1="без ризику"
                    propGap="23.4px"
                    propFlex="1"
                  />
                </div>
                <b className="b3">отримуйте безризикову ставку до 50€</b>
              </div>
            </div>
            <div className="show-all-button">
              <div className="div4">Показати усі</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;

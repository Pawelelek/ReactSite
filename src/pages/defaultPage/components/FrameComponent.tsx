import { FunctionComponent } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  prop4?: string;
  star1?: string;
  countryFlag1?: string;
  countryFlag2?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  star1,
  countryFlag1,
  countryFlag2
}) => {
  return (
    <div className={`frame-wrapper ${className}`}>
      <div className="match-item-parent">
        <div className="match-item">
          <img
            className="teams-icon"
            loading="lazy"
            alt=""
            src="Homeimg/Frame 7.jpg"
          />
          <div className="div5">{prop}</div>
        </div>
        <div className="flags">
          <div className="country-flag-parent">
            <img
              className="country-flag-icon"
              loading="lazy"
              alt=""
              //src="Homeimg/ellipse-1@2x.png"
              src={countryFlag1}
            />
            <div className="div6">{prop1}</div>
          </div>
          <div className="date">
            <div className="empty-date">19:00</div>
            <div className="div7">сьогодні</div>
          </div>
          <div className="denmark-flag">
            <img
              className="denmark-flag-child"
              loading="lazy"
              alt=""
              //src="Homeimg/ellipse-2@2x.png"
              src={countryFlag2}
            />
            <div className="div8">{prop2}</div>
          </div>
        </div>
        <div className="germany-score">
          <div className="group">
            <div className="div9">{prop3}</div>
            <div className="empty-germany">1.67</div>
          </div>
          <div className="draw-score">
            <div className="div10">Нічия</div>
            <div className="empty-draw">3.92</div>
          </div>
          <div className="parent1">
            <div className="div11">{prop4}</div>
            <div className="empty-denmark">6.42</div>
          </div>
        </div>
        <img className="star-1-icon" loading="lazy" alt="" src={star1} />
      </div>
    </div>
  );
};

export default FrameComponent;

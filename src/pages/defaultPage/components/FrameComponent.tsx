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
  time?: string;
  date?: string;
  odd1?: string;
  odd2?: string;
  odd3?: string;
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
  countryFlag2,
  time = "19:00",
  date = "сьогодні",
  odd1 = "1.67",
  odd2 = "3.92",
  odd3 = "6.42"
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
              src={countryFlag1}
            />
            <div className="div6">{prop1}</div>
          </div>
          <div className="date">
            <div className="empty-date">{time}</div>
            <div className="div7">{date}</div>
          </div>
          <div className="denmark-flag">
            <img
              className="denmark-flag-child"
              loading="lazy"
              alt=""
              src={countryFlag2}
            />
            <div className="div8">{prop2}</div>
          </div>
        </div>
        <div className="germany-score">
          <div className="group">
            <div className="div9">{prop3}</div>
            <div className="empty-germany">{odd1}</div>
          </div>
          <div className="draw-score">
            <div className="div10">Нічия</div>
            <div className="empty-draw">{odd2}</div>
          </div>
          <div className="parent1">
            <div className="div11">{prop4}</div>
            <div className="empty-denmark">{odd3}</div>
          </div>
        </div>
        {/* <img className="star-1-icon" loading="lazy" alt="" src={star1} style={{ cursor: "pointer" }}/> */}
      </div>
    </div>
  );
};

export default FrameComponent;

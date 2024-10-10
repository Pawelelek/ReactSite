import { FunctionComponent } from "react";
import "./Events.css";
import {useNavigate} from "react-router-dom";

export type EventsType = {
  className?: string;
};

const Events: FunctionComponent<EventsType> = ({ className = "" }) => {
  const navigator = useNavigate();
  return (
    <div className={`events ${className}`}>
      <div className="events-title">
        <div className="div12">Популярні події</div>
        <div className="events-button">
          <div className="div13" onClick={()=>navigator("/bets")} style={{ cursor: "pointer" }}>Показати усі</div>
        </div>
      </div>
      <div className="leagues">
        <div className="league-cards">
          <div className="league-cards-inner">
            <div className="rectangle-group">
              <div className="frame-item" />
              <div className="frame-container">
                <div className="ellipse-parent">
                  <div className="frame-inner" />
                  <img
                    className="uefa-euro-2024svg-1-icon"
                    loading="lazy"
                    alt=""
                    src="Homeimg/uefa-euro-2024svg-1@2x.png"
                  />
                </div>
              </div>
              <div className="wrapper1">
                <div className="div14">{`ЄВРО 2024 `}</div>
              </div>
            </div>
          </div>
          <div className="rectangle-container">
            <div className="rectangle-div" />
            <div className="frame-wrapper1">
              <div className="frame-wrapper2">
                <div className="ellipse-group">
                  <div className="ellipse-div" />
                  <img
                    className="icon"
                    loading="lazy"
                    alt=""
                    src="Homeimg/----2024--1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="div15">Кубок Америки 2024</div>
          </div>
          {/* <div className="rectangle-parent1">
            <div className="frame-child1" />
            <div className="frame-wrapper3">
              <div className="frame-wrapper4">
                <div className="ellipse-container">
                  <div className="frame-child2" />
                  <img
                    className="e8950-1-icon"
                    loading="lazy"
                    alt=""
                    src="Homeimg/e8950-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="lpl-2024-summer">LPL 2024 Summer Placements</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Events;

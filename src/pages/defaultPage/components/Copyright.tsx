import { FunctionComponent } from "react";
import "./Copyright.css";

export type CopyrightType = {
  className?: string;
};

const Copyright: FunctionComponent<CopyrightType> = ({ className = "" }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className={`copyright ${className}`}>
      <div className="g01bet-parent">
        <div className="g01bet">
          ТОВ «БУКМЕКЕРСЬКА КОМПАНІЯ «G01BET». Ліцензія на провадження
          діяльності з організації та проведення букмекерської діяльності від
          2024 року, видана згідно з рішенням Комісії з регулювання азартних
          ігор та лотерей про видачу ліцензії № 433 від 2024. Термін дії
          ліцензії – 5 років.
        </div>
        <div className="legal-info">
          <div className="g01bet-group">
            <div className="g01bet1">
              © 2024 ТОВ «БУКМЕКЕРСЬКА КОМПАНІЯ «G01BET». Всі права захищені.
            </div>
            <div className="free-icon-font-angle-left-3916-wrapper">
              <img onClick={scrollToTop}
                className="free-icon-font-angle-left-39161"
                loading="lazy"
                alt=""
                src="/Homeimg/freeiconfontangleleft3916931-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

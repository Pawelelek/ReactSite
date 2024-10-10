import { FunctionComponent } from "react";
import BenefitsList from "./BenefitsList";
import "./Benefits.css";

export type BenefitsType = {
  className?: string;
};

const Benefits: FunctionComponent<BenefitsType> = ({ className = "" }) => {
  return (
    <div className={`benefits ${className}`}>
      <div className="benefits-list-parent">
        <BenefitsList
          benefitIcon="/Homeimg/man-plays-football.png"
          prop="СПОРТ"
          prop1="Великий вибір "
          prop2="ставок на спорт"
        />
        {/* <div className="benefits-list1">
          <img
            className="benefits-list-child"
            loading="lazy"
            alt=""
            src="/Homeimg/Cybersport.png"
          />
          <h1 className="h13">КІБЕРСПОРТ</h1>
          <div className="frame">
            <h3 className="h31">
              <p className="p4">Роби ставки на</p>
              <p className="p5">улюблені команди</p>
            </h3>
          </div>
        </div> */}
        <div className="benefits-list1">
          <img
            className="benefits-list-child"
            loading="lazy"
            alt=""
            src="Homeimg/fans.png"
          />
          <h1 className="h13">АКЦІЇ</h1>
          <div className="frame">
            <h3 className="h31">
              <p className="p4">Отримуй круті </p>
              <p className="p5">пропозиції щодня</p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

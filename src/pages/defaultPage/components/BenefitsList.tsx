import { FunctionComponent } from "react";
import "./BenefitsList.css";

export type BenefitsListType = {
  className?: string;
  benefitIcon?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
};

const BenefitsList: FunctionComponent<BenefitsListType> = ({
  className = "",
  benefitIcon,
  prop,
  prop1,
  prop2,
}) => {
  return (
    <div className={`benefits-list ${className}`}>
      <img className="benefit-icon" loading="lazy" alt="" src={benefitIcon} />
      <div className="container">
        <h1 className="h12">{prop}</h1>
      </div>
      <h3 className="h3">
        <p className="p2">{prop1}</p>
        <p className="p3">{prop2}</p>
      </h3>
    </div>
  );
};

export default BenefitsList;

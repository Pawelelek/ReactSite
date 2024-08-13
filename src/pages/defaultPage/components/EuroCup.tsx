import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import "./EuroCup.css";

export type EuroCupType = {
  className?: string;
};

const EuroCup: FunctionComponent<EuroCupType> = ({ className = "" }) => {
  return (
    <div className={`euro-cup ${className}`}>
      <div className="instance-parent">
        <FrameComponent
          prop="ЄВРО 2024 "
          prop1="Німечина"
          prop2="Данія"
          prop3="Німечина"
          prop4="Данія"
          star1="Homeimg/star1.svg"
          countryFlag1="Homeimg/ellipse-1@2x.png"
          countryFlag2="Homeimg/ellipse-2@2x.png"
        />
        <FrameComponent
          prop="ЄВРО 2024 "
          prop1="Швейцарія"
          prop2="Італія"
          prop3="Швейцарія"
          prop4="Італія"
          star1="Homeimg/star1-1.svg"
          countryFlag1="Homeimg/ellipse-4@2x.png"
          countryFlag2="Homeimg/ellipse-3@2x.png"
        />
        <FrameComponent
          prop="Кубок Америки 2024"
          prop1="Канада"
          prop2="Чилі"
          prop3="Канада"
          prop4="Чилі"
          star1="Homeimg/star1-2.svg"
          countryFlag1="Homeimg/ellipse-5@2x.png"
          countryFlag2="Homeimg/ellipse-6@2x.png"
        />
      </div>
    </div>
  );
};

export default EuroCup;

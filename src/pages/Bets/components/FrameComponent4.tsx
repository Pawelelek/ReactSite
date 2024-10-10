import { FunctionComponent } from "react";
import "../../defaultPage/components/FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div style={{padding:'0px 0px 38px 0px'}} className={`bonus-offer-wrapper ${className}`}>
      <div className="bonus-offer" style={{padding:'0px'}}>
        <img
          className="bonus-offer-child"
          loading="lazy"
          alt=""
          src={"Betsimg/sunrise.png"}
          style={{ maxWidth: '200%', maxHeight: '200%', width:'100%', height:'131.5%'}}
        />
        <div className="parent" style={{padding:'0px 0px 0px 0px'}}>
          <h1 className="h1" style={{padding:'30px 0px 0px 50px'}}>
            <p className="p">
              <span>{`ЗАРЕЄСТРУЙСЯ І `}</span>
              <span className="span">ОТРИМУЙ</span>
            </p>
            <p className="p1">{`БОНУСИ `}</p>
          </h1>
          <div className="bonus-link">
            <div className="bonus-term" style={{padding:'0px 0px 0px 0px', height:'0px'}}>
              <div className="wrapper" style={{padding:'0px 0px 0px 520px'}}>
                <h1 className="h11" style={{top:'-40px'}}>ДО</h1>
              </div>
              <b className="empty-bonus" style={{top:'-100px'}}>3000$</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FrameComponent4;

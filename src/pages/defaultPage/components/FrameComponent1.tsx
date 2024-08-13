import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
  emptyWithdrawal?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  emptyWithdrawal,
  prop,
  prop1,
  propGap,
  propFlex,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      flex: propFlex,
    };
  }, [propGap, propFlex]);

  return (
    <div
      className={`empty-withdrawal-parent ${className}`}
      style={frameDivStyle}
    >
      <b className="empty-withdrawal">{emptyWithdrawal}</b>
      <div className="quick-withdrawal">
        <h3 className="h32">
          <p className="p6">{prop}</p>
          <p className="p7">{prop1}</p>
        </h3>
      </div>
    </div>
  );
};

export default FrameComponent1;

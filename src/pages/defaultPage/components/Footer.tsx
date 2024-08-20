import { FunctionComponent, useState, useRef, useEffect } from "react";
import "./Footer.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBackgroundToggled, setIsBackgroundToggled] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsBackgroundToggled(!isBackgroundToggled);
  };

  useEffect(() => {
    if (textRef.current) {
      if (!isExpanded) {
        textRef.current.style.maxHeight = `${textRef.current.scrollHeight / 3}px`;
      } else {
        textRef.current.style.maxHeight = `${textRef.current.scrollHeight}px`;
      }
    }
  }, [isExpanded]);

  return (
    <div className={`footer ${className}`}>
      <div className="company-info">
        <h3 className="go1bet">GO1BET — БУКМЕКЕР №1</h3>
      </div>
      <div className="company-description">
        <div
          className={`go1bet-wrapper ${isExpanded ? "expanded" : "collapsed"}`}
          ref={textRef}
        >
          <div className="go1bet-container">
            <p className="go1bet1">
              GO1BET — це сучасна букмекерська контора, яка пропонує широкий
              спектр спортивних подій для ставок. Вона охоплює багато видів
              спорту, таких як футбол, баскетбол, теніс, хокей та кіберспорт,
              дозволяючи гравцям робити ставки на улюблені команди та події з
              усього світу.
            </p>
            <p className="go1bet2">
              GO1BET відзначається конкурентоспроможними коефіцієнтами, що
              робить ставки вигіднішими. Крім того, тут можна знайти
              різноманітні типи ставок – від простих одиничних до складних
              комбінованих. Інтуїтивно зрозумілий інтерфейс сайту дозволяє легко
              орієнтуватися як новачкам, так і досвідченим гравцям, а підтримка
              мобільних пристроїв робить ставки доступними в будь-якому місці та
              в будь-який час.
            </p>
          </div>
        </div>
        <div className={`rectangle-parent2 ${isBackgroundToggled ? "toggled-background" : ""}`}>
          <div className="frame-child3" />
          <img
            className={`free-icon-font-angle-left-3916 ${isExpanded ? "rotated" : ""}`}
            loading="lazy"
            alt=""
            src="Homeimg/freeiconfontangleleft3916931-1@2x.png"
            onClick={toggleExpand}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

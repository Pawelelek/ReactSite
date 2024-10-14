import { FunctionComponent } from "react";
import "./FooterLinks.css";
import {useNavigate} from "react-router-dom";

export type FooterLinksType = {
  className?: string;
};

const FooterLinks: FunctionComponent<FooterLinksType> = ({
  className = "",
}) => {
  const navigator = useNavigate();
  return (
    <footer className={`footer-links ${className}`}>
      <div className="footer-links-container">
        {/* <div className="footer-links-content">
          <div className="footer-links-columns">
            <div className="vector-wrapper">
              <img
                className="vector-icon1"
                loading="lazy"
                alt=""
                src="Homeimg/vector-1.svg"
              />
            </div>
            <div className="clip-path-group-wrapper">
              <img
                className="clip-path-group"
                loading="lazy"
                alt=""
                src="Homeimg/clip-path-group.svg"
              />
            </div>
            <div className="clip-path-group-container">
              <img
                className="clip-path-group1"
                loading="lazy"
                alt=""
                src="Homeimg/clip-path-group-1.svg"
              />
            </div>
            <img
              className="clip-path-group2"
              loading="lazy"
              alt=""
              src="Homeimg/clip-path-group-2.svg"
            />
          </div>
        </div> */}
        <div className="information-parent">
          <div className="information">
            <div className="div16">Інформація</div>
            <div className="information-links">
            <div className="div17" onClick={()=>navigator("/info/about")}>Про нас</div>
              <div className="div18" onClick={()=>navigator("/info/general")}>Загальні правила</div>
              <div className="div19" onClick={()=>navigator("/info/offer")}>Публічна афера</div>
              <div className="div20" onClick={()=>navigator("/info/protection")}>Політика захисту інформації</div>
              <div className="div21" onClick={()=>navigator("/info/game")}>Відповідальна гра</div>
              {/* <div className="div22">Умови бонусів</div> */}
            </div>
          </div>
          <div className="help">
            <div className="div23">Допомога</div>
            <div className="help-links">
            <div className="div24" onClick={()=>navigator("/help/questions")}>Поширені питання</div>
            <div className="div25" onClick={()=>navigator("/help/contacts")}>Зв'язатися з нами</div>
            </div>
          </div>
          <div className="promotions">
            <div className="div26">Акції</div>
            <div className="promotions-links">
             {/* <div className="div27">Акції</div>
              <div className="vip">VIP Клуб</div> */}
              <div className="div28" onClick={()=>navigator("/prom/bonus")}>Бонуси</div>
              {/* <div className="div29">Привести друга</div> */}
            </div>
          </div>
          <div className="social">
            <div className="div30">Соціальні мережі</div>
            <div className="social-links">
              <a className="youtube" href="https://www.instagram.com/">Instagram</a>
              <a className="youtube" href="https://web.telegram.org/k/">Telegram</a>
              <a className="youtube" href="https://www.youtube.com/">YouTube</a>
              <a className="youtube" href="https://www.facebook.com/?locale=uk_UA">Facebook</a>
            </div>
          </div>
          {/* <div className="stats">
            <div className="div31">Статистика</div>
            <div className="stats-links">
              <div className="div32">Статистика</div>
              <div className="div33">Результати</div>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;

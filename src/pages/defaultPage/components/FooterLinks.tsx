import { FunctionComponent } from "react";
import "./FooterLinks.css";

export type FooterLinksType = {
  className?: string;
};

const FooterLinks: FunctionComponent<FooterLinksType> = ({
  className = "",
}) => {
  return (
    <footer className={`footer-links ${className}`}>
      <div className="footer-links-container">
        <div className="footer-links-content">
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
        </div>
        <div className="information-parent">
          <div className="information">
            <div className="div16">Інформація</div>
            <div className="information-links">
              <div className="div17">Про нас</div>
              <div className="div18">Загальні правила</div>
              <div className="div19">Публічна афера</div>
              <div className="div20">Політика захисту інформації</div>
              <div className="div21">Відповідальна гра</div>
              <div className="div22">Умови бонусів</div>
            </div>
          </div>
          <div className="help">
            <div className="div23">Допомога</div>
            <div className="help-links">
              <div className="div24">Поширені питання</div>
              <div className="div25">Звязатися з нами</div>
            </div>
          </div>
          <div className="promotions">
            <div className="div26">Акції</div>
            <div className="promotions-links">
              <div className="div27">Акції</div>
              <div className="vip">VIP Клуб</div>
              <div className="div28">Бонуси</div>
              <div className="div29">Привести друга</div>
            </div>
          </div>
          <div className="social">
            <div className="div30">Соціальні мережі</div>
            <div className="social-links">
              <div className="instagram">Instagram</div>
              <div className="telegram">Telegram</div>
              <a className="youtube">YouTube</a>
              <div className="facebook">facebook</div>
            </div>
          </div>
          <div className="stats">
            <div className="div31">Статистика</div>
            <div className="stats-links">
              <div className="div32">Статистика</div>
              <div className="div33">Результати</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;

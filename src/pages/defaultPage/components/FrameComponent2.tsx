import { FunctionComponent, useState } from "react";
import "./FrameComponent2.css";
import RegistrationModal from '../Modal/RegistrationModal';

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className={`bonus-offer-wrapper ${className}`}>
      <div className="bonus-offer">
        <img
          className="bonus-offer-child"
          loading="lazy"
          alt=""
          src="Homeimg/man-blood.png"
        />
        <div className="parent">
          <h1 className="h1">
            <p className="p">
              <span>{`ЗАРЕЄСТРУЙСЯ І `}</span>
              <span className="span">ОТРИМУЙ</span>
            </p>
            <p className="p1">{`БОНУСИ `}</p>
          </h1>
          <div className="bonus-link">
            <div className="bonus-term">
              <div className="wrapper">
                <h1 className="h11">ДО</h1>
              </div>
              <b className="empty-bonus">3000$</b>
            </div>
          </div>
          <div className="register-now-button">
          <button className="register-now-link" onClick={handleOpenModal}>
            <b className="b">Зареєструйся зараз</b>
          </button>
        </div>
        </div>
      </div>
      <RegistrationModal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default FrameComponent2;

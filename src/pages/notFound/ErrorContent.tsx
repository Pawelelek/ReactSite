import React from 'react';
import './index.css';

const ErrorContent: React.FC = () => {
  return (
    <section className="errorContainer">
      <div className="errorCircle">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/76bb8ae23acd645d2467ca0925ab7b4dd11df90b686a9c1d236aff97c2395a5b?placeholderIfAbsent=true&apiKey=7e55eecc1a8348d487c10be10e063fb5" alt="" className="backgroundImage" />
        <div className="errorContent">
          <h1 className="errorMessage">Сторінку не знайдено</h1>
        </div>
      </div>
      <div className="outerText">
      <div className="errorCodeContainer">
            <span className="errorCode">4</span>
            <div className="errorCodeWrapper">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90b1e41109693ed82d262aadb9a2a6ee8889936208e46c5df046d3138f2cddb6?placeholderIfAbsent=true&apiKey=7e55eecc1a8348d487c10be10e063fb5" alt="0" className="errorCodeImage" />
            </div>
            <span className="errorCode">4</span>
          </div>
      </div>
      <a href="/" className="homeLink">
        <div className="homeLinkIcon">
          <div className="homeLinkIconWrapper">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/535e05b2c1c4dbf0618385a857e264994ab51b3e6b6a8e681b93d711410b9b5d?placeholderIfAbsent=true&apiKey=7e55eecc1a8348d487c10be10e063fb5" alt="" className="homeLinkArrow" />
          </div>
        </div>
        <span className="homeLinkText">На головну</span>
      </a>
    </section>
  );
};

export default ErrorContent;
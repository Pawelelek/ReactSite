import React, { useState } from 'react';
import '../style.css';

const Favourite = () => {
  const [activeProfileTab, setActiveProfileTab] = useState('Games');

  return (
    <div>
              <div className="custom-frame-440">
                <div
                  className={`custom-choice ${activeProfileTab === 'Games' ? 'active-tab' : ''}`}
                  onClick={() => setActiveProfileTab('Games')}
                >
                  Ігри
                </div>
              </div>
                <div className='custom-frame-425'>
    <div className="transaction-history-form">
      <div className="custom-center-text" style={{marginTop: '180px'}}>Немає ігор для показу</div>
    </div>
  </div>
            </div>
  );
};

export default Favourite;
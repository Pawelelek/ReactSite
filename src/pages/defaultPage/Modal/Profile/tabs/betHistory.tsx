import React, { useState, useEffect } from 'react';
import '../style.css';

const BetHistory = () => {
  const [activeProfileTab, setActiveProfileTab] = useState('Bets');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Усі');
  const [selectedPeriod, setSelectedPeriod] = useState('24 години');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const togglePeriodDropdown = () => {
    setPeriodDropdownOpen(!periodDropdownOpen);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handlePeriodSelect = (period: any) => {
    setSelectedPeriod(period);
    setPeriodDropdownOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
  
    if (target && !target.closest('.select-field-wrapper')) {
      setDropdownOpen(false);
      setPeriodDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
              <div className="custom-frame-440">
                <div
                  className={`custom-choice ${activeProfileTab === 'Bets' ? 'active-tab' : ''}`}
                  onClick={() => setActiveProfileTab('Bets')}
                >
                  Ставки
                </div>
              </div>
                <>
                <div className='custom-frame-425'>
    <div className="transaction-history-form">
      <div className="custom-input-row">
        <div className="custom-input-group">
          <label className="custom-input-label">Назва спорту</label>
          <div className="select-field-wrapper">
            <div className="select-field">
              {selectedOption}
            </div>
            <img className={`custom-dropdown-icon ${dropdownOpen ? 'flipped' : ''}`} style={{left: '420px'}} src="/Profileimg/downArrow.png" alt="dropdown" onClick={toggleDropdown} />
            <div className={`custom-dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
              <div className="custom-dropdown-item" onClick={() => handleOptionSelect('Усі')}>Усі</div>
              <div className="custom-dropdown-item" onClick={() => handleOptionSelect('Футбол')}>Футбол</div>
              <div className="custom-dropdown-item" onClick={() => handleOptionSelect('Баскетбол')}>Баскетбол</div>
              <div className="custom-dropdown-item" onClick={() => handleOptionSelect('Волейбол')}>Волейбол</div>
            </div>
          </div>
        </div>

        <div className="custom-input-group">
              <label className="custom-input-label">Період</label>
              <div className="select-field-wrapper">
                <div className="select-field">
                  {selectedPeriod}
                </div>
                <img
                  className={`custom-dropdown-icon ${periodDropdownOpen ? 'flipped' : ''}`}
                  src="/Profileimg/downArrow.png"
                  alt="dropdown"
                  onClick={togglePeriodDropdown}
                  style={{left: '420px'}}
                />
                <div className={`custom-dropdown-menu ${periodDropdownOpen ? 'active' : ''}`}>
                  <div className="custom-dropdown-item" onClick={() => handlePeriodSelect('24 години')}>24 години</div>
                  <div className="custom-dropdown-item" onClick={() => handlePeriodSelect('Останній тиждень')}>Останній тиждень</div>
                  <div className="custom-dropdown-item" onClick={() => handlePeriodSelect('Останній місяць')}>Останній місяць</div>
                  <div className="custom-dropdown-item" onClick={() => handlePeriodSelect('Останній рік')}>Останній рік</div>
                </div>
              </div>
            </div>
          </div>

      <div className="custom-center-text">Немає ставок для показу</div>
    </div>
  </div>
                <div className="custom-modal-footer">
                <div className="custom-frame-2" style={{
                      backgroundColor: '#da0037',
                      cursor: 'pointer',
                      left: '1170px',
                      top: '270px'
                    }}>
                  <button
                    style={{
                        backgroundColor: '#da0037',
                        cursor: 'pointer',
                        border: 'none',
                        color: '#fff'
                      }}
                  >
                    ПОКАЗАТИ
                  </button>
                </div>
              </div>
              </>
            </div>
  );
};

export default BetHistory;
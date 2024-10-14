import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import '../style.css';
import { http } from '../../../../../http';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';

const BetHistory = () => {
  const [activeProfileTab, setActiveProfileTab] = useState('Bets');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Усі');
  const [selectedPeriod, setSelectedPeriod] = useState('24 години');
  const { allUsers, user } = useTypedSelector((store) => store.UserReducer);

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
  const [bettingHistory, setBettingHistory] = useState<any>([]);
  const loadBettingHistoryByUserId = () => {
  console.log(user.Id);
    http.get("api/User/GetBettingHistory?userId="+user.Id)
      .then(resp => {
        const transactions = resp.data.payload;
        console.log(transactions)
        setBettingHistory(transactions);
        console.log(transactions);
      });
  }
  useEffect(() => {
    loadBettingHistoryByUserId();
    }, []);
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
      {/* <div className="custom-input-row">
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
          </div> */}
      {/*=================================== TRANSACTION HISTORY ======================*/}
      <div>
      {(bettingHistory.length > 0) ? (
        <div>
        <TableContainer 
        component={Paper} 
        sx={{
          maxHeight: 280,
          minWidth: 930,
          maxWidth: 930,
          backgroundColor: "#121212", // Темний фон для контейнера
          "&::-webkit-scrollbar": {
            width: "18px", // Ширина ScrollBar
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#2e2e2e", // Колір треку (фон ScrollBar)
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#5e5e5e", // Колір повзунка (ScrollBar)
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#8e8e8e", // Колір повзунка при наведенні
          },
          position: "absolute"
        }}>
  <Table sx={{ backgroundColor: "#1e1e1e" }} aria-label="simple table"> {/* Темний фон для таблиці */}
    <TableHead>
      <TableRow>
      <TableCell align="center" sx={{ color: "#ffffff" }}>Статус Ставки</TableCell>
        <TableCell align="center" sx={{ color: "#ffffff" }}>Id</TableCell> {/* Текст білий */}
        <TableCell align="center" sx={{ color: "#ffffff" }}>Назва Ставки</TableCell>
        <TableCell align="center" sx={{ color: "#ffffff" }}>Сумма</TableCell>
        <TableCell align="center" sx={{ color: "#ffffff" }}>Коеф</TableCell>
        <TableCell align="center" sx={{ color: "#ffffff" }}>Дата</TableCell>

      </TableRow>
    </TableHead>
    <TableBody>
      {bettingHistory.map((row: any) => (
        <TableRow
          key={row.id}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            backgroundColor: "#2e2e2e", // Темний фон для рядків
          }}
        >
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            Активна/Завершенна
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.id}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.oddName}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.amount}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.value}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            [{new Date(row.betTime).toLocaleDateString([], { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', })}]
          </TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

        </div>
      ) : (
        <div className="custom-center-text">Немає ставок для показу</div>
      )}

        </div>
    </div>
  </div>
                {/* <div className="custom-modal-footer">
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
              </div> */}
              </>
            </div>
  );
};

export default BetHistory;
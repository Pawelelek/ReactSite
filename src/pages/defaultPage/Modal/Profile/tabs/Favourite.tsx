import React, { useEffect, useState } from 'react';
import '../style.css';
import { http } from '../../../../../http';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Favourite = () => {
  const [activeProfileTab, setActiveProfileTab] = useState('Games');
  const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
  const [favoutiteGames, setFavouriteGames] = useState<any>([]);
  const loadFavouriteGamesByUserId = () => {
  console.log(user.Id);
    http.get("api/Balance/getByUserId?userId="+user.Id)
      .then(resp => {
        const transactions = resp.data.payload[0].transactions;
        console.log(transactions)
        setFavouriteGames(transactions);
        console.log(transactions);
      });
  }
  useEffect(() => {
    loadFavouriteGamesByUserId();
    }, []);
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
    {(favoutiteGames.length > 0) ? (
        <div>
        <TableContainer 
        component={Paper} 
        sx={{
          maxHeight: 400,
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
        <TableCell align="center" sx={{ color: "#ffffff" }}>Id</TableCell> {/* Текст білий */}
        <TableCell align="center" sx={{ color: "#ffffff" }}>Сумма</TableCell>
        <TableCell align="center" sx={{ color: "#ffffff" }}>Опис</TableCell>
        <TableCell align="center" sx={{ color: "#ffffff" }}>Баланс</TableCell>
        <TableCell align="center" sx={{ color: "#ffffff" }}>Id Балансу</TableCell>
        <TableCell align="center" sx={{ color: "#ffffff" }}>Тип</TableCell>
        <TableCell align="center" sx={{ color: "#ffffff" }}>Дата</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {favoutiteGames.map((row: any) => (
        <TableRow
          key={row.id}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            backgroundColor: "#2e2e2e", // Темний фон для рядків
          }}
        >
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.id}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.value}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.description}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.money}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.balanceId}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.transactionType}
          </TableCell>
          <TableCell component="th" scope="row" align="center" sx={{ color: "#ffffff" }}>
            {row.dateCreated}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

        </div>
      ) : (
        <div className="custom-center-text" style={{marginTop: '180px'}}>Немає ігор для показу</div>
      )}
    
      
    </div>
  </div>
            </div>
  );
};

export default Favourite;
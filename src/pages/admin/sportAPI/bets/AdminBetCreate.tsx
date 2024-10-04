import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useActions } from "../../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../../http"
import AdmNavbar from "../../AdmNavbar";

const SportBetCreate = () => {
  const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
  const [odds, setSportOdds] = useState<any>();
  const [opponents, setOpponents] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    loadSportOdds();
  }, []);
  const loadSportOdds= () => {
  console.log(user.id)
    http.get("api/Odd/get")
      .then(resp => {
        const {payload} = resp.data;

        setSportOdds(payload);
        console.log(payload);
      });
  }
  const [bet, setBet] = useState({
    amount: 0,
    oddId: '',
    userId: user.id,
  });

  const isFormValid = () => {
    return Object.values(bet);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBet((prevBet) => ({
      ...prevBet,
      [name]: value === '' ? null : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit: "+ bet)
    http.post("api/Bet/create", bet)
      .then(() => {
        navigate('/admin/sport/bets');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Create Bet</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Bet Amount"
          name="amount"
          value={bet.amount}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        /> 
        <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
          <InputLabel>OddId</InputLabel>
          <Select name="oddId" id="oddId" value={bet.oddId} onChange={handleChange} required>
            {odds?.map((odd:any) => (
              <MenuItem key={odd.id} value={odd.id}>
                {odd.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          disabled={!isFormValid()}
        >
          Create Bet
        </Button>
      </form>
    </Paper>
    
  );
};

export default SportBetCreate;

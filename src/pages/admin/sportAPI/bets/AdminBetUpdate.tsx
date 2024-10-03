import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

import { useActions } from "../../../../hooks/useActions";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../../http"
import AdmNavbar from "../../AdmNavbar";

const SportBetUpdate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [odds, setOdds] = useState<any>();
  const [bet, setBet] = useState({
    id: searchParams.get("id"),
    amount: 0,
    oddId: '',
    userId: '',
  });
  useEffect(() => {

    loadSportOdds();
    loadBetById();
  }, []);
  const loadBetById = () => {
  
    http.get("api/Bet/get/" + searchParams.get("id"))
      .then(resp => {
        const payload = resp.data.payload[0];
        console.log("Payload: "+ payload.oddId)
        setBet(payload);
        setBet({
          id: payload.id,
          amount: payload.amount || 0,
          oddId: payload.oddId || null,
          userId: payload.userId || null,         
        });
        console.log("SetCategory: "+bet);
      });
  }
  const loadSportOdds= () => {
  
    http.get("api/Odd/get")
      .then(resp => {
        const {payload} = resp.data;

        setOdds(payload);
        console.log(payload);
      });
  }

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
    http.put("api/Bet/edit", bet)
      .then(() => {
        navigate('/admin/sport/bets');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Update Bet</h1>
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
          Update Bet
        </Button>
      </form>
    </Paper>
    
  );
};

export default SportBetUpdate;

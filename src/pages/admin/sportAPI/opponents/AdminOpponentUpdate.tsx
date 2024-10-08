import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

import { useActions } from "../../../../hooks/useActions";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../../http"
import AdmNavbar from "../../AdmNavbar";

const SportOpponentUpdate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadCategory();
    loadSportEvents();
  }, []);
  const [sportMatches, setSportMatches] = useState<any>();
  const [opponent, setOpponent] = useState({
    id: searchParams.get("id"),
    name: '',
    sportMatchId: ''
  });
  const loadSportEvents = () => {
  
    http.get("api/SportMatch/get")
      .then(resp => {
        const {payload} = resp.data;

        setSportMatches(payload);
        console.log(payload);
      });
  }
  const loadCategory = () => {
  
    http.get("api/Opponent/get/" + searchParams.get("id"))
      .then(resp => {
        const payload = resp.data.payload[0];
        console.log("Payload: "+ payload)
        setOpponent(payload);
        setOpponent({
          id: payload.id,
          name: payload.name || '',
          sportMatchId: payload.sportMatchId || '',
        });
        console.log("SetCategory: "+opponent);
      });
  }

  const isFormValid = () => {
    return Object.values(opponent);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOpponent((prevOpponent) => ({
      ...prevOpponent,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit: "+ opponent)
    http.put("api/Opponent/edit", opponent)
      .then(() => {
        navigate('/admin/sport/opponents');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Update Opponent</h1>
      <form onSubmit={handleSubmit}>
      <TextField
          label="Sport Match name"
          name="name"
          value={opponent.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />       
        <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
          <InputLabel>ParentId</InputLabel>
          <Select name="sportMatchId" id="sportMatchId" value={opponent.sportMatchId} onChange={handleChange}>
            {sportMatches?.map((sportMatch:any) => (
              <MenuItem key={sportMatch.id} value={sportMatch.id}>
                {sportMatch.name}
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
          Update Sport Opponent
        </Button>
      </form>
    </Paper>
    
  );
};

export default SportOpponentUpdate;

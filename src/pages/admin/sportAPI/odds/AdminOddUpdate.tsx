import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

import { useActions } from "../../../../hooks/useActions";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../../http"
import AdmNavbar from "../../AdmNavbar";

const SportOddUpdate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [sportMatches, setSportMatches] = useState<any>();
  const [opponents, setOpponents] = useState<any>();
  const [odd, setOdd] = useState({
    id: searchParams.get("id"),
    name: '',
    opponentId: '' ? null : '',
    sportMatchId: '',
    value: 0,
    type: ''
  });
  useEffect(() => {
    loadSportMatches();
    loadSportOpponents();
    loadOddById();
  }, []);
  const loadOddById = () => {
  
    http.get("api/Odd/get/" + searchParams.get("id"))
      .then(resp => {
        const payload = resp.data.payload[0];
        console.log("Payload: "+ payload)
        setOdd(payload);
        setOdd({
          id: payload.id,
          name: payload.name || '',
          opponentId: payload.opponentId || null,
          sportMatchId: payload.sportMatchId || null,
          value: payload.value || 0,
          type: payload.type || '',
        });
        console.log("SetCategory: "+odd);
      });
  }
  const loadSportMatches= () => {
  
    http.get("api/SportMatch/get")
      .then(resp => {
        const {payload} = resp.data;

        setSportMatches(payload);
        console.log(payload);
      });
  }
  const loadSportOpponents= () => {
  
    http.get("api/Opponent/get")
      .then(resp => {
        const {payload} = resp.data;

        setOpponents(payload);
        console.log(payload);
      });
  }

  const isFormValid = () => {
    return Object.values(odd);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOdd((prevOdd) => ({
      ...prevOdd,
      [name]: value === '' ? null : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit: "+ odd)
    http.put("api/Odd/edit", odd)
      .then(() => {
        navigate('/admin/sport/odds');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Update Odd</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Sport Match name"
          name="name"
          value={odd.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />   
        <TextField
          label="Coefficient"
          name="value"
          value={odd.value}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />
        <TextField
          label="Type Odd"
          name="type"
          value={odd.type}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />    
        <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
          <InputLabel>SportMatchId</InputLabel>
          <Select name="sportMatchId" id="sportMatchId" value={odd.sportMatchId} onChange={handleChange} required>
            {sportMatches?.map((sportMatch:any) => (
              <MenuItem key={sportMatch.id} value={sportMatch.id}>
                {sportMatch.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
          <InputLabel>OpponentId</InputLabel>
          <Select name="opponentId" id="opponentId" value={odd.opponentId !== null ? odd.opponentId : null} onChange={handleChange}>
          <MenuItem value=''>
               <em>None</em>
          </MenuItem>
            {opponents?.map((opponent:any) => (
              <MenuItem key={opponent.id} value={opponent.id}>
                {opponent.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>   */}
        <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
            <InputLabel>OpponentId</InputLabel>
            <Select
              name="opponentId"
              id="opponentId"
              value={odd.opponentId !== null ? odd.opponentId : ''}
              onChange={handleChange}
              label="OpponentId"
            >
                {/* Нульове значення, яке представляє відсутність вибору */}
                <MenuItem value="">
                    <em>None</em> {/* або можна написати "Виберіть матч" */}
                </MenuItem>

                {/* Інші значення з масиву sportMatches */}
                {opponents?.map((opponent: any) => (
                    <MenuItem key={opponent.id} value={opponent.id}>
                        {opponent.name}
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
          Update Odd
        </Button>
      </form>
    </Paper>
    
  );
};

export default SportOddUpdate;

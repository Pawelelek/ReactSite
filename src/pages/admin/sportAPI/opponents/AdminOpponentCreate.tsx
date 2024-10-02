import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useActions } from "../../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../../http"
import AdmNavbar from "../../AdmNavbar";

const SportOpponentCreate = () => {
  const [sportEvents, setSportEvents] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    loadSportEvents();
  }, []);
  const loadSportEvents = () => {
  
    http.get("api/SportEvent/get")
      .then(resp => {
        const {payload} = resp.data;

        setSportEvents(payload);
        console.log(payload);
      });
  }
  const [sportMatch, setCategory] = useState({
    name: '',
    dateStart: '2024-09-20T10:32:49.924Z',
    dateEnd: '2024-09-20T10:32:49.924Z',
    sportEventId: ''
  });

  const isFormValid = () => {
    return Object.values(sportMatch);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit: "+ sportMatch)
    http.post("api/SportMatch/create", sportMatch)
      .then(() => {
        navigate('/admin/sport/matches');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Create Match</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Sport Match name"
          name="name"
          value={sportMatch.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />       
        <TextField
          label="Sport Match dateStart"
          name="dateStart"
          value={sportMatch.dateStart}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />
        <TextField
          label="Sport Match dateEnd"
          name="dateEnd"
          value={sportMatch.dateEnd}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />
        <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
          <InputLabel>ParentId</InputLabel>
          <Select name="sportEventId" id="sportEventId" value={sportMatch.sportEventId} onChange={handleChange}>
            {sportEvents?.map((sportEvents:any) => (
              <MenuItem key={sportEvents.id} value={sportEvents.id}>
                {sportEvents.name}
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
          Create Match
        </Button>
      </form>
    </Paper>
    
  );
};

export default SportOpponentCreate;

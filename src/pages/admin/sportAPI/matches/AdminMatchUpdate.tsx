import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

import { useActions } from "../../../../hooks/useActions";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../../http"
import AdmNavbar from "../../AdmNavbar";

const SportMatchUpdate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadCategory();
    loadSportEvents();
  }, []);
  const [sportEvents, setSportEvents] = useState<any>();
  const [sportMatch, setSportMatch] = useState({
    id: searchParams.get("id"),
    name: '',
    dateStart: '',
    dateEnd: '',
    sportEventId: ''
  });
  const loadSportEvents = () => {
  
    http.get("api/SportEvent/get")
      .then(resp => {
        const {payload} = resp.data;

        setSportEvents(payload);
        console.log(payload);
      });
  }
  const loadCategory = () => {
  
    http.get("api/SportMatch/get/" + searchParams.get("id"))
      .then(resp => {
        const payload = resp.data.payload[0];
        console.log("Payload: "+ payload)
        setSportMatch(payload);
        setSportMatch({
          id: payload.id,
          name: payload.name || '',
          dateStart: payload.dateStart || '2024-09-20T10:32:49.924Z',
          dateEnd: payload.dateEnd || '2024-09-20T10:32:49.924Z',
          sportEventId: payload.sportEventId || '',
        });
        console.log("SetCategory: "+sportMatch);
      });
  }

  const isFormValid = () => {
    return Object.values(sportMatch);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSportMatch((prevSportMatch) => ({
      ...prevSportMatch,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit: "+ sportMatch)
    http.put("api/SportMatch/edit", sportMatch)
      .then(() => {
        navigate('/admin/sport/matches');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Update SportMatch</h1>
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
          Update Sport Match
        </Button>
      </form>
    </Paper>
    
  );
};

export default SportMatchUpdate;

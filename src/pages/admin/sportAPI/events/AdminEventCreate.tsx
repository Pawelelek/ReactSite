import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useActions } from "../../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../../http"
import AdmNavbar from "../../AdmNavbar";

const SportEventCreate = () => {
  const navigate = useNavigate();
  useEffect(() => {
  }, []);
  const [sportEvent, setSportEvent] = useState({
    name: '',
    description: '',
    status: 'Preparation',
    dateEnd: '2024-09-20T10:32:49.924Z',
    dateStart: '2024-09-20T10:32:49.924Z'
  });

  const isFormValid = () => {
    return Object.values(sportEvent);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSportEvent((prevSportEvent) => ({
      ...prevSportEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit: "+ sportEvent)
    http.post("api/SportEvent/create", sportEvent)
      .then(() => {
        navigate('/admin/sport/events');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Create Sport Event</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="SportEvent Name"
          name="name"
          value={sportEvent.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />       
        <TextField
          label="SportEvent description"
          name="description"
          value={sportEvent.description}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />   
        <TextField
          label="SportEvent DateStart"
          name="status"
          value={sportEvent.status}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />  
        <TextField
          label="SportEvent DateStart"
          name="dateStart"
          value={sportEvent.dateStart}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />  
        <TextField
          label="SportEvent DateEnd"
          name="dateEnd"
          value={sportEvent.dateEnd}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />    
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          disabled={!isFormValid()}
        >
          Create SportEvent
        </Button>
      </form>
    </Paper>
    
  );
};

export default SportEventCreate;

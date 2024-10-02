import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

import { useActions } from "../../../../hooks/useActions";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../../http"
import AdmNavbar from "../../AdmNavbar";

const SportEventUpdate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    
    loadCategory();
  }, []);
  const [sportEvent, setSportEvent] = useState({
    id: searchParams.get("id"),
    name: '',
    description: '',
    status: '',
    dateEnd: '',
    dateStart: ''
  });
  const loadCategory = () => {
  
    http.get("api/SportEvent/get/" + searchParams.get("id"))
      .then(resp => {
        const payload = resp.data.payload[0];
        console.log("Payload: "+ payload)
        setSportEvent(payload);
        setSportEvent({
          id: payload.id,
          name: payload.name || '',
          description: payload.description || '',
          status: payload.status || 'Preparation',
          dateEnd: payload.dateEnd || '2024-09-20T10:32:49.924Z',
          dateStart: payload.dateStart || '2024-09-20T10:32:49.924Z'
        });
        console.log("SetCategory: "+sportEvent);
      });
  }

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
    http.put("api/SportEvent/edit", sportEvent)
      .then(() => {
        navigate('/admin/sport/events');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Create Category</h1>
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
          Update Role
        </Button>
      </form>
    </Paper>
    
  );
};

export default SportEventUpdate;

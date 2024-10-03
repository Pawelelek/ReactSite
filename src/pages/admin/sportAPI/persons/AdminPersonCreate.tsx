import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useActions } from "../../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../../http"
import AdmNavbar from "../../AdmNavbar";

const SportPersonCreate = () => {
  const [opponents, setOpponents] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    loadOpponents();
  }, []);
  const loadOpponents = () => {
  
    http.get("api/Opponent/get")
      .then(resp => {
        const {payload} = resp.data;

        setOpponents(payload);
        console.log(payload);
      });
  }
  const [person, setPerson] = useState({
    name: '',
    position: '',
    opponentId: ''
  });

  const isFormValid = () => {
    return Object.values(person);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit: "+ person)
    http.post("api/Person/create", person)
      .then(() => {
        navigate('/admin/sport/persons');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Create Person</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Person name"
          name="name"
          value={person.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />       
        <TextField
          label="Person position"
          name="position"
          value={person.position}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />       
        <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
          <InputLabel>OpponentId</InputLabel>
          <Select name="opponentId" id="opponentId" value={person.opponentId} onChange={handleChange}>
            {opponents?.map((opponent:any) => (
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
          Create Person
        </Button>
      </form>
    </Paper>
    
  );
};

export default SportPersonCreate;

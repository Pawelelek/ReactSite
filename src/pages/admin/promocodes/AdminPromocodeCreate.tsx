import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useActions } from "../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../http"
import AdmNavbar from "../AdmNavbar";

const PromocodeCreate = () => {
  const [categories, setCategories] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {

  }, []);
  const [promocode, setPromocode] = useState({
    name: '',
    key: '',
    priceMoney: 0,
    countAvailable: 0,
    expirationDate: '2024-09-20T10:32:49.924Z',
  });

  const isFormValid = () => {
    return Object.values(promocode);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPromocode((prevPromo) => ({
      ...prevPromo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submit: "+ promocode)
    http.post("api/Bonus/CreatePromocode", promocode)
      .then(() => {
        navigate('/admin/promocodes');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Create Promocode</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Promo name"
          name="name"
          value={promocode.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />       
        <TextField
          label="Promo key"
          name="key"
          value={promocode.key}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />
        <TextField
          label="Promo price money"
          name="priceMoney"
          value={promocode.priceMoney}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />
        <TextField
          label="Promo count available"
          name="countAvailable"
          value={promocode.countAvailable}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />
        <TextField
          label="Promo expiration date"
          name="expirationDate"
          value={promocode.expirationDate}
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
          Create Promo
        </Button>
      </form>
    </Paper>
    
  );
};

export default PromocodeCreate;

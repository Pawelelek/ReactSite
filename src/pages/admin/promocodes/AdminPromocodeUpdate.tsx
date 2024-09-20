import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

import { useActions } from "../../../hooks/useActions";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../http"
import AdmNavbar from "../AdmNavbar";

const PromocodeUpdate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadCategory();
  }, []);
  const [promocode, setPromocode] = useState({
    id: searchParams.get('id'),
    name: '',
    key: '',
    priceMoney: 0,
    countAvailable: 0,
    expirationDate: '2024-09-20T10:32:49.924Z',
  });
  const loadCategory = () => {
  
    http.get("api/Bonus/getPromocodeById?id=" + searchParams.get("id"))
      .then(resp => {
        const payload = resp.data.payload[0];
        setPromocode(payload);
        setPromocode({
          id: payload.id,
          name: payload.name || '',
          key: payload.key || '',
          priceMoney: payload.priceMoney || 0,
          countAvailable: payload.countAvailable || 0,
          expirationDate: payload.expirationDate || '',
        });
        console.log("SetPromo: "+promocode);
      });
  }

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
    http.put("api/Bonus/EditPromocodeById?id=", promocode)
      .then(() => {
        navigate('/admin/promocodes');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Update Promocode</h1>
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
          Update Promo
        </Button>
      </form>
    </Paper>
    
  );
};

export default PromocodeUpdate;

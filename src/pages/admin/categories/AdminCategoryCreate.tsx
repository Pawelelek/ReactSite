import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { useActions } from "../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../http"
import AdmNavbar from "../AdmNavbar";

const CategoriesCreate = () => {
  const [categories, setCategories] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    loadCategories();
  }, []);
  const loadCategories = () => {
  
    http.get("api/Category/get")
      .then(resp => {
        const {payload} = resp.data;

        setCategories(payload);
        console.log(payload);
      });
  }
  const [category, setCategory] = useState({
    name: '',
    description: '',
    parentId: 'string'
  });

  const isFormValid = () => {
    return Object.values(category);
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
    console.log("Submit: "+ category)
    http.post("api/Category/create", category)
      .then(() => {
        navigate('/admin/categories');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Create Category</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Category name"
          name="name"
          value={category.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />       
        <TextField
          label="Category description"
          name="description"
          value={category.description}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          
        />
        <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
          <InputLabel>ParentId</InputLabel>
          <Select name="parentId" id="parentId" value={category.parentId} onChange={handleChange}>
            {categories?.map((cat:any) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
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
          Create Role
        </Button>
      </form>
    </Paper>
    
  );
};

export default CategoriesCreate;

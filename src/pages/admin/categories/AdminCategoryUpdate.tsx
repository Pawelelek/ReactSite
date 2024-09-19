import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

import { useActions } from "../../../hooks/useActions";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../http"
import AdmNavbar from "../AdmNavbar";

const CategoriesUpdate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    loadCategories();
    loadCategory();
  }, []);
  const [category, setCategory] = useState({
    id: searchParams.get('id'),
    name: '',
    description: '',
    parentId: 'string'
  });
  const loadCategories = () => {
  
    http.get("api/Category/get")
      .then(resp => {
        const {payload} = resp.data;

        setCategories(payload);
        
        console.log(payload);
      });
  }
  const loadCategory = () => {
  
    http.get("api/Category/get/" + searchParams.get("id"))
      .then(resp => {
        const {payload} = resp.data;
        console.log("Payload: "+ payload)
        setCategory(payload);
        setCategory({
          id: payload.id,
          name: payload.name || '',
          description: payload.description || '',
          parentId: payload.parentId || 'string',
        });
        console.log("SetCategory: "+category);
      });
  }

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
    http.put("api/Category/edit", category)
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
          <Select name="parentId" id="parentId" value={category.parentId} onChange={handleChange} >
            {category.id !== "" ? (<div></div>): (<div></div>)}
            {categories?.map((cat:any) => ( cat.id !== category.id ? (<MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>) : (null)
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
          Update Role
        </Button>
      </form>
    </Paper>
    
  );
};

export default CategoriesUpdate;

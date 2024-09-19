import { useEffect, useState } from 'react';
import { Button, Paper, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { useNavigate} from 'react-router-dom';
import { http } from "../../../http"

const CreateRole = () => {
  const navigate = useNavigate();
  useEffect(() => {

  }, []);

  const [role, setRole] = useState({
    roleName: '',
  });

  const isFormValid = () => {
    return Object.values(role).every((value) => value !== '');
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRole((prevRole) => ({
      ...prevRole,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    http.post("api/Role/create", role)
      .then(() => {
        navigate('/admin/roles');
      });
    
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Create Role</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Role name"
          name="roleName"
          value={role.roleName}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          style={{ marginBottom: 10 }}
          required
        />       
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

export default CreateRole;
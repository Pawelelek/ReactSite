import { useEffect, useState } from 'react';
import { Button, Paper, TextField } from '@mui/material';
import { useActions } from '../../../hooks/useActions';
import { useParams, useSearchParams } from 'react-router-dom';
import { getbyid } from '../../../services/api-user-service';
import { useNavigate } from 'react-router-dom';
import { http } from '../../../http';

const UpdateRole = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  // const [role, setRole] = useState<any>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [role, setRole] = useState({
    id: searchParams.get('id'),
    roleName: '',
    concurrencyStamp: '',
  });

  // const [errors, setErrors] = useState({
  //   id: '',
  //   firstName: '',
  //   lastName: '',
  //   phoneNumber: ''
  // });
  const loadingRoleOnFormik = () => {
    console.log("id: " + searchParams.get('id'));
    http.get('api/Role/get/' + searchParams.get('id'))
      .then((res) =>
      {
        {
          
          var data = res.data.payload[0];
          console.log("Role:", data)        
          setRole(data);
          //role.roleName = data.roleName,
          setRole({
            id: data.id,
            roleName: data.roleName || '',
            concurrencyStamp: data.concurrencyStamp || '',
          });
          console.log("SetRole:", role) 
        }
      })
  }

  useEffect(() => {
    loadingRoleOnFormik();


  }, []);
  const isFormValid = () => {
    return Object.values(role).every((value) => value !== null);
  };


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRole((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    //validateField(name, value);
  };

  const handleSubmit = (e: any) => {
     e.preventDefault();
     http.put("api/Role/edit", role).then(() => {
      console.log("Submit", role);
      navigate('/admin/roles');
      navigate(0);
  });
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Update Role</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
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
          Update Role
        </Button>
      </form>
    </Paper>
  );
};

export default UpdateRole;
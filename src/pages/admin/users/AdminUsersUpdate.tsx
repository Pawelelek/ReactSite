import { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import { useActions } from '../../../hooks/useActions';
import { useParams } from 'react-router-dom';
import { getbyid } from '../../../services/api-user-service';
import { useNavigate } from 'react-router-dom';
import { http } from '../../../http';

const UpdateUser = () => {
  const { Update } = useActions();
  const { userId } = useParams();
  const [roles, setRoles] = useState<any>();
  const navigate = useNavigate();

  const loadRoles = () => {
  
    http.get("api/Role/get")
      .then(resp => {
        const {payload} = resp.data;

        setRoles(payload);
        console.log(payload);
      });
  }
  const [user, setUser] = useState({
    id: userId,
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    roleName: ''
  });

  const [errors, setErrors] = useState({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    roleName: ''
  });

  useEffect(() => {
    const fetchUser = async (id: string) => {
      const result = await getbyid(id);
      loadRoles();
      setUser({
        id: userId,
        email: result.response.payload[0].email || '',
        firstName: result.response.payload[0].firstName || '',
        lastName: result.response.payload[0].lastName || '',
        phoneNumber: result.response.payload[0].phoneNumber || '',
        roleName: result.response.payload[0].roles[0].roleName || '',
      });
      
    };

    if (userId) {
      fetchUser(userId);
    }
  }, [userId]);

  const isFormValid = () => {
    return Object.values(user).every((value) => value !== '') && !Object.values(errors).some((error) => error !== '');
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (name: any, value: any) => {
    let errorMessage = '';
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value.length > 50 || value.length < 6) {
          errorMessage = 'Забагато або замало символів';
        }
        break;
      case 'phoneNumber':
        if (value.length < 9 || value.length > 20) {
          errorMessage = 'Телефонний номер повинен бути від 9 до 20 символів';
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (e: any) => {
     e.preventDefault();
     //console.log(userId);
     Update(user);
     navigate('/admin/users');
     //navigate(0);
  };

  return (
    <Paper style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          error={!!errors.firstName}
          helperText={errors.firstName}
          style={{ marginBottom: 10 }}
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          error={!!errors.lastName}
          helperText={errors.lastName}
          style={{ marginBottom: 10 }}
          required
        />
        <TextField
          label="Last Name"
          name="email"
          value={user.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={errors.email}
          style={{ marginBottom: 10 }}
          required
        />
        <FormControl variant="outlined" fullWidth style={{ marginBottom: 10 }}>
          <InputLabel>Role</InputLabel>
          <Select name="roleName" value={user.roleName} onChange={handleChange} error={!!errors.roleName} required>
            {roles?.map((role:any) => (
              <MenuItem key={role.roleName} value={role.roleName}>
                {role.roleName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
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
          Update User
        </Button>
      </form>
    </Paper>
  );
};

export default UpdateUser;
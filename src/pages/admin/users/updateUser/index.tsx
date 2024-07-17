import { useEffect, useState } from 'react';
import { Button, Paper, TextField } from '@mui/material';
import { useActions } from '../../../../hooks/useActions';
import { useParams } from 'react-router-dom';
import { getbyid } from '../../../../services/api-user-service';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const { Update } = useActions();
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: userId,
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  useEffect(() => {
    const fetchUser = async (id: string) => {
      const result = await getbyid(id);
      setUser({
        id: userId,
        firstName: result.response.payload.firstName || '',
        lastName: result.response.payload.lastName || '',
        phoneNumber: result.response.payload.phoneNumber || '',
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
     Update(user);
     navigate('/dashboard/users');
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
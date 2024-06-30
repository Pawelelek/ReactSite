import { useEffect, useState } from 'react';
import { Button, Paper, TextField } from '@mui/material';
import { useActions } from '../../../hooks/useActions';
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const UpdateUser = () => {
  const { GetAllUsers } = useActions();
  const { Update } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    GetAllUsers()
  }, []);

  const [user, setUser] = useState({
    id: searchParams.get('id'),
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({
    id: searchParams.get('id'),
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });

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
      case 'email':
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(value)) {
          errorMessage = 'Некоректний формат електронної пошти';
        }
        break;
      case 'password':
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(value)) {
          errorMessage =
            'Пароль має містити мінімум одну малу літеру, велику літеру, і цифру. Мінімум 8 символів.';
        }
        break;
      case 'confirmPassword':
        if (value !== user.password) {
          errorMessage = 'Паролі не співпадають';
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
    console.log('Дані для оновлення користувача:', user);
    Update(user);
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
          label="Email"
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
        <TextField
          label="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
          type="password"
          variant="outlined"
          fullWidth
          error={!!errors.password}
          helperText={errors.password}
          style={{ marginBottom: 10 }}
          required
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          type="password"
          variant="outlined"
          fullWidth
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
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
          //disabled={!isFormValid()}
        >
          Update User
        </Button>
      </form>
    </Paper>
  );
};

export default UpdateUser;
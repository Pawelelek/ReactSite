import { useEffect, useState } from 'react';
import { Button, Paper, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { useNavigate} from 'react-router-dom';
import { http } from "../../../http"

const CreateRole = () => {
  const { allUsers } = useTypedSelector((store) => store.UserReducer);
  const { GetAllUsers } = useActions();
  const { Create } = useActions();
  //const roles = Array.from(new Set(allUsers.map((user: any) => user.role)));
  const [roles, setRoles] = useState<any>();
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
    setRole((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    //validateField(name, value);
  };

  // const validateField = (name: any, value: any) => {
  //   let errorMessage = '';
  //   switch (name) {
  //     case 'roleName':
  //       if (value.length > 0) {
  //         errorMessage = 'Поле не може бути пустим';
  //       }
  //       break;
  //     case 'email':
  //       const emailRegex = /^\S+@\S+\.\S+$/;
  //       if (!emailRegex.test(value)) {
  //         errorMessage = 'Некоректний формат електронної пошти';
  //       }
  //       break;
  //     case 'password':
  //       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  //       if (!passwordRegex.test(value)) {
  //         errorMessage =
  //           'Пароль має містити мінімум одну малу літеру, велику літеру, і цифру. Мінімум 8 символів.';
  //       }
  //       break;
  //     case 'confirmPassword':
  //       if (value !== user.password) {
  //         errorMessage = 'Паролі не співпадають';
  //       }
  //       break;
  //     case 'phoneNumber':
  //       if (value.length < 9 || value.length > 20) {
  //         errorMessage = 'Телефонний номер повинен бути від 9 до 20 символів';
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  //   setErrors((prevErrors) => ({
  //     ...prevErrors,
  //     [name]: errorMessage,
  //   }));
  // };

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
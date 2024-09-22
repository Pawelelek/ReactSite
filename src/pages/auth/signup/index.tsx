import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Field } from "formik";
import { RegisterSchema } from "../validation";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../../components/loader";
import { useDispatch } from "react-redux";
import { UserActionTypes } from "../../../store/reducers/userReducer/types";
import { createUser} from "../../../services/api-user-service";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { jwtDecode } from "jwt-decode";
import { gapi } from "gapi-script";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { APP_ENV } from "../../../env";

const initialValues = { email: "", password: "", firstName: "", lastName: "", confirmPassword: "", phoneNumber: ""};

const defaultTheme = createTheme();

export default function SignIn() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, loading } = useTypedSelector((store) => store.UserReducer);

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  if (loading) {
    return <Loader />;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      confirmPassword: data.get("confirmPassword"),
      phoneNumber: data.get("phoneNumber"),
      role: "User"
    };
    try {
        const data = await createUser(user);
        if (data != null) {
          dispatch({
            type: UserActionTypes.CREATE_USER,
            payload: data,
          });
          navigator("/");
        }
      } catch (error) {
        dispatch({
          type: UserActionTypes.SERVER_ERROR,
          payload: error,
        });
      }
  };

  return (
<ThemeProvider theme={defaultTheme}>
<Box
    component="main"
    sx={{
      background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    }}
  >
      <Container component="main"
        maxWidth="xs"
        sx={{
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.main} 45%, ${theme.palette.secondary.main} 55%)`,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={() => {}}
            validationSchema={RegisterSchema}
          >
            {({ errors, touched, isSubmitting, isValid, dirty }) => (
              <Box
                onSubmit={handleSubmit}
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                />
                {errors.firstName && touched.firstName ? (
                  <div style={{ color: "red" }}>{errors.firstName}</div>
                ) : null}
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                />
                {errors.lastName && touched.lastName ? (
                  <div style={{ color: "red" }}>{errors.lastName}</div>
                ) : null}
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                {errors.email && touched.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirmPassword"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                ) : null}
                <Field
                  as={TextField}
                  margin="normal"
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div style={{ color: "red" }}>{errors.phoneNumber}</div>
                ) : null}
                <Button
                  disabled={!(isValid && dirty)}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/signin">{"Have an account? Sign in"}</Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
      </Box>
    </ThemeProvider>
  );
}

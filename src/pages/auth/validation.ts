import * as Yup from "yup"


const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{6,}$/;

export const LoginSchema =  Yup.object().shape({
    email: Yup.string()
    .email("Invalid email address.")
    .required("This field is required.")
    .label("Email address."),
    password: Yup.string()
    .required("This field is required.")
    .min(6, "Password must be al least 6 characters.")
    .matches(passwordRegExp, "Password must contain A-Z, a-z, 0-9")
    .label("Password.")
})

export const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .label("Email address"),
  });
  
  export const RegisterSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    firstName: Yup.string().max(255).required("First name is required"),
    lastName: Yup.string().max(255).required("Last name is required"),
    password: Yup.string()
      .max(255)
      .min(6)
      .required("Password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9"),
    confirmPassword: Yup.string()
      .max(255)
      .min(6)
      .required("Confirm password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9")
      .oneOf([Yup.ref("password")], "Passwords must match."),
    phoneNumber: Yup.string()  
    .max(20)
    .min(9)
    .required("Phone number is required"),
  });
  
  export const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(6)
      .max(255)
      .required("Old password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9")
      .label("Old password"),
    currentPassword: Yup.string()
      .min(6)
      .max(255)
      .required("New password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9"),
    confirmPassword: Yup.string()
      .min(6)
      .max(255)
      .required("Confirm password is required")
      .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9")
      .oneOf([Yup.ref("currentPassword")], "Passwords must match."),
  });
  
  export const ChangeProfileSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .label("Email address"),
    name: Yup.string().required("Name is required").label("Name"),
    surname: Yup.string().required("Surname is required").label("Surname"),
    phone: Yup.string().required("Phone is required").label("Phone"),
  });

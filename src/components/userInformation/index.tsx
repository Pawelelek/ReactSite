import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTypedSelector } from "../../hooks/useTypedSelector";

function createData(
  name: string,
  surname: string,
  email: string,
  phone: string,
  emailConfirm: string,
  role: string
) {
  return { name, surname, email, phone, emailConfirm, role };
}

const UserInformation = () => {
  const { user } = useTypedSelector((store) => store.UserReducer);
  const rows = [
    createData(
      user.Name,
      user.Surname,
      user.Email,
      user.PhoneNumber,
      user.EmailConfirm,
      user.role
    ),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Surname</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Confirm email</TableCell>
            <TableCell align="center">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.surname}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.emailConfirm}</TableCell>
              <TableCell align="center">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserInformation;

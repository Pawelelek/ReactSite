import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useActions } from "../../../hooks/useActions";

const AllUsers = () => {
   const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
   const { GetAllUsers } = useActions();
   const { DeleteById } = useActions();
  useEffect(() => {
    GetAllUsers()
  }, []);

  const FuncDelete = (id: string) => {
     DeleteById(id);
  }

  for (const row of allUsers) {
    console.log("User Data:", row);
  }

console.log("user id: " + user.Id);

  return (
    // <h1>All users</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Surname</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Confirm email</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Role</TableCell>
            {user.role === 'Administrator' && (
                  <TableCell align="center">Action</TableCell>
                )}
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((row: any, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.firstName}
              </TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.emailConfirmed ? "True" : "False"}</TableCell>
              <TableCell align="center">{row.phoneNumber}</TableCell>
              <TableCell align="center">{row.role}</TableCell>
              <TableCell align="center">{user.role === 'Administrator' && user.Id !== row.id && (
                  <Button
                    onClick={() => FuncDelete(row.id)}
                    style={{ backgroundColor: '#FF0000', color: '#f5fafa', textTransform: 'none' }}
                  >
                    Delete
                  </Button>
                )}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   );
};

export default AllUsers;

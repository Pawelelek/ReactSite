import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {
   const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
   //const [deleteId, setId] = useState<any>();
   const { GetAllUsers, DeleteById } = useActions();
   const [open, setOpen] = useState(false);
   const [deleteId, setDeleteId] = useState<string | null>(null);
   const navigate = useNavigate();
  useEffect(() => {
    GetAllUsers()
  }, []);
  // const FuncDelete = (id: string) => {
  //    DeleteById(id);
  // }

  const handleClickOpen = (id: string) => {
    setDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDeleteId(null);
  };

  const handleConfirmDelete = () => {
    if (deleteId) {
      DeleteById(deleteId);
    }
    handleClose();
  };

  const handleCreateUser = () => {
    navigate('/admin/user/create');
  };

  const handleUpdate = (id: string) => {
    navigate('/admin/user/update/' + id);
 };
//  const deleteUser = (id: string) => {
//   console.log(id);
//   const myElement = document.getElementById("exampleModal") as HTMLElement;
//   setId(id);
//   const myModal = new Modal(myElement);
//   myModal.show();
// }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
    <TableContainer component={Paper}>
      {/* <Button
                    href="/dashboard/user/create"
                    style={{ backgroundColor: '#d95a11', color: '#f5fafa', textTransform: 'none' }}
                  >
                    Create New User
                  </Button> */}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Surname</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Confirm email</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Role</TableCell>
            {/* {user.role === 'Administrator' && (
                  <TableCell align="center">Delete</TableCell>
                )}
                {user.role === 'Administrator' && (
                  <TableCell align="center">Update</TableCell>
                )} */}
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
              <TableCell align="center">{row.roles[0].roleName}</TableCell>
              <TableCell align="center">{user.role === 'Admin' && user.Id !== row.id && (
                  // <Button
                  //   onClick={() => FuncDelete(row.id)}
                  //   style={{ backgroundColor: '#FF0000', color: '#f5fafa', textTransform: 'none' }}
                  // >
                  //   Delete
                  // </Button>
                  <Button
                         onClick={() => handleClickOpen(row.id)}
                         style={{ backgroundColor: '#FF0000', color: '#f5fafa', textTransform: 'none' }}
                       >
                         Delete
                       </Button>
                )}</TableCell>
                <TableCell align="center">{user.role === 'Admin' && (
                  <Button
                    onClick={() => handleUpdate(row.id)}
                    style={{ backgroundColor: '#d95a11', color: '#f5fafa', textTransform: 'none' }}
                  >
                    Update
                  </Button>
                )}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
       <Button
         onClick={handleCreateUser}
         style={{ marginTop: '20px', backgroundColor: '#4287f5', color: '#f5fafa', textTransform: 'none' }}
       >
         Create New User
       </Button>
       <Dialog
         open={open}
         onClose={handleClose}
       >
         <DialogTitle>Confirm Deletion</DialogTitle>
         <DialogContent>
           <DialogContentText>
             Are you sure you want to delete this user? This action cannot be undone.
           </DialogContentText>
         </DialogContent>
         <DialogActions>
           <Button onClick={handleClose} color="primary">
             Cancel
           </Button>
           <Button onClick={handleConfirmDelete} color="secondary" autoFocus>
             Delete
           </Button>
         </DialogActions>
       </Dialog>

     </div>
   );
};

export default AllUsers;

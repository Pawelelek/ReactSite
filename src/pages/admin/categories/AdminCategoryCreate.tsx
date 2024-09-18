import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import { useActions } from "../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../http"
import AdmNavbar from "../AdmNavbar";

const CategoriesCreate = () => {
  const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
   //const [deleteId, setId] = useState<any>();
   const { GetAllUsers, DeleteById } = useActions();
   const [open, setOpen] = useState(false);
   const [deleteId, setDeleteId] = useState<string | null>(null);
   const [roles, setRoles] = useState<any>([]);
   const navigate = useNavigate();
   const loadRoles = () => {
  
        http.get("api/Role/get")
          .then(resp => {
            const {payload} = resp.data;
    
            setRoles(payload);
            console.log(payload);
          });
      }
  useEffect(() => {
    loadRoles()
  }, []);


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
      http.delete('api/Role/delete/' + deleteId)
            .then(() => {
                loadRoles();
            });
    }
    handleClose();
  };

  const handleCreateRole = () => {
    navigate('/admin/role/create');
  };

  const handleUpdate = (id: string) => {
    navigate('/admin/role/update?id=' + id);
 };
  return (
    <>
    <AdmNavbar/>
    {/* {(user.role === "User" || user.role === "Admin") ? (
      <Counter2 />
    ) : (
      <Counter />
    )} */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor:"darkslategray",paddingTop:30 }}>
       <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', background:"darkslategray" }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Concurrency Stamp</TableCell>
            <TableCell align="center">RoleName</TableCell>
            
            <TableCell align="center" colSpan={2} style={{ padding: 0 }}> 
          <Button
            onClick={handleCreateRole}
            style={{
              backgroundColor: '#4287f5',
              color: '#f5fafa',
              textTransform: 'none',
              width: '80%', 
              height: '100%', 
            }}
          >
            Create New Role
          </Button>
        </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((row: any) => (
            <TableRow
              
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.concurrencyStamp}</TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.roleName}
              </TableCell>
              {/* <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.emailConfirmed ? "True" : "False"}</TableCell>
              <TableCell align="center">{row.phoneNumber}</TableCell>
              <TableCell align="center">{row.roles[0].roleName}</TableCell> */}
              <TableCell align="center" style={{ borderTop: '1px solid #ddd'}}>{user.role === 'Admin' && user.Id !== row.id && (
                  <Button
                         onClick={() => handleClickOpen(row.id)}
                         style={{ backgroundColor: '#FF0000', color: '#f5fafa', textTransform: 'none' }}
                       >
                         Delete
                       </Button>
                )}</TableCell>
                <TableCell align="center" style={{ borderTop: '1px solid #ddd'}}>{user.role === 'Admin' && (
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
     </>
   );
};

export default CategoriesCreate;
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import { useActions } from "../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../http"
import AdmNavbar from "../AdmNavbar";

const PromocodesView = () => {
  const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
   //const [deleteId, setId] = useState<any>();
   const { GetAllUsers, DeleteById } = useActions();
   const [open, setOpen] = useState(false);
   const [deleteId, setDeleteId] = useState<string | null>(null);
   const [promocodes, setPromocodes] = useState<any>([]);
   const navigate = useNavigate();
   const loadPromocodes = () => {
  
        http.get("api/Bonus/getAllPromocodes")
          .then(resp => {
            const {payload} = resp.data;
    
            setPromocodes(payload);
            console.log(payload);
          });
      }
  useEffect(() => {
    loadPromocodes()
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
      http.delete('api/Bonus/DeletePromoById?id=' + deleteId)
            .then(() => {
                loadPromocodes();
            });
    }
    handleClose();
  };

  const handleCreatePromo = () => {
    navigate('/admin/promocode/create');
  };

  const handleUpdate = (id: string) => {
    navigate('/admin/promocode/update?id=' + id);
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
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Key</TableCell>
            <TableCell align="center">Price money</TableCell>
            <TableCell align="center">Entries</TableCell>
            <TableCell align="center">expDate</TableCell>
            <TableCell align="center" colSpan={2} style={{ padding: 0 }}> 
          <Button
            onClick={handleCreatePromo}
            style={{
              backgroundColor: '#4287f5',
              color: '#f5fafa',
              textTransform: 'none',
              width: '80%', 
              height: '100%', 
            }}
          >
            Create New Promocode
          </Button>
        </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {promocodes.map((row: any) => (
            <TableRow
              
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.key}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.priceMoney}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                [{row.countEntries}/{row.countAvailable}]
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.expirationDate}
              </TableCell>
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

export default PromocodesView;

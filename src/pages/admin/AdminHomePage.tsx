import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useActions } from "../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import Counter from "../defaultPage/components/Counter";
import Counter2 from "../defaultPage/components/Counter2";
import AdmNavbar from "./AdmNavbar";

const AdminHomePage = () => {
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
  return (
    <>
    <AdmNavbar />
    {/* {(user.role === "User" || user.role === "Admin") ? (
      <AdmNavbar />
    ) : (
       <Counter />
    )} */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor:"darkslategray",paddingTop:30 }}>
       <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', background:"darkslategray", color:"white" }}>
    Admin Home Page
    </div>
       {/* <Dialog
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
       </Dialog> */}
     </div>
     </>
   );
};

export default AdminHomePage;

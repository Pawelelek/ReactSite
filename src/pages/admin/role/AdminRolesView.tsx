import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"
import { http } from "../../../http"

const AllRoles = () => {
   const { allUsers, user } = useTypedSelector((store) => store.UserReducer);
   const [deleteId, setId] = useState<any>();
   //const { GetAllUsers, DeleteById } = useActions();
   const [roles, setRoles] = useState<any>();
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
    loadRoles();
  }, []);
  const FuncDelete = (id: string) => {
     //DeleteById(id);
  }

  const handleUpdate = (id: string) => {
    navigate('/dashboard/role/update/' + id);
 };
 const deleteUser = (id: string) => {
  console.log(id);
  const myElement = document.getElementById("exampleModal") as HTMLElement;
  setId(id);
  const myModal = new Modal(myElement);
  myModal.show();
}
  return (
    <TableContainer component={Paper}>
      <Button
                    href="/dashboard/role/create"
                    style={{ backgroundColor: '#d95a11', color: '#f5fafa', textTransform: 'none' }}
                  >
                    Create New Role
                  </Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            {user.role === 'Administrator' && (
                  <TableCell align="center">Delete</TableCell>
                )}
                {user.role === 'Administrator' && (
                  <TableCell align="center">Update</TableCell>
                )}
          </TableRow>
        </TableHead>
        <TableBody>
          {roles?.map((row: any) => (
            <TableRow
              
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.roleName}</TableCell>
              
              <TableCell align="center">{user.role === 'Administrator' && user.Id !== row.id && (
                  <Button
                    onClick={() => deleteUser(row.id)}
                    style={{ backgroundColor: '#FF0000', color: '#f5fafa', textTransform: 'none' }}
                  >
                    Delete
                  </Button>
                )}</TableCell>
                <TableCell align="center">{user.role === 'Administrator' && (
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
    
   );
};

export default AllRoles;

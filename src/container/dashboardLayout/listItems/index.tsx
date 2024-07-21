import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    borderRadius: theme.shape.borderRadius,
    transition: "background-color 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
    },
  },
}));

interface IAdminMenuProps {
  items: React.ReactNodeArray;
}

const AdminMenu: React.FC<IAdminMenuProps> = ({ items }) => {
  const classes = useStyles();

  return (
    <List className={classes.menu} component="nav" aria-labelledby="nested-list-subheader">
      {items}
    </List>
  );
};

export const adminMenu = (
  <React.Fragment>
    <AdminMenu
      items={[
        <ListItemButton component={Link} to="/dashboard" key={1}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>,
        <ListItemButton component={Link} to="users" key={2}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>,
        <ListItemButton component={Link} to="roles" key={3}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Roles" />
        </ListItemButton>,
      ]}
    />
  </React.Fragment>
);

export const userMenu = (
  <React.Fragment>
  </React.Fragment>
);
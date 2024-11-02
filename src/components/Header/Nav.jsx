import React from "react";
import styles from "./Nav.module.css";
import { IconButton, InputBase, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logout from "@mui/icons-material/Logout";

import { useAuth } from "../../hooks/auth";

export function Nav() {
  const isSmallScreen = window.innerWidth <= 768;
  const { desconectar } = useAuth();
  function handleLogout() {
    desconectar();
  }
  return (
    <nav className={styles.nav}>
      <IconButton
        sx={{
          p: "10px",
          color: "white",
          display: isSmallScreen ? "none" : "inline",
        }}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: isSmallScreen ? "100%" : 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <IconButton
        aria-label="logout"
        color="primary"
        sx={{ cursor: "pointer", color: "white" }}
        onClick={handleLogout}
      >
        <Logout />
      </IconButton>
    </nav>
  );
}

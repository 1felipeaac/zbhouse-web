import React, { ChangeEvent, useState } from "react";
// @ts-ignore
import styles from "./Nav.module.css";
import { IconButton, InputBase, Paper } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logout from "@mui/icons-material/Logout";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";


export interface NavProps{
  onSearch? : () => void
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  placeholder?: string
}

export function Nav({onSearch, onChange, placeholder}:NavProps) {
  const isSmallScreen = window.innerWidth <= 768;
  const { desconectar } = useAuth();

  const navigate = useNavigate()
  function handleLogout() {
    navigate("/")
    desconectar();
  }


  return (
    <nav className={styles.nav}>
      {/* <IconButton
        sx={{
          p: "10px",
          color: "white",
          // display: isSmallScreen ? "none" : "inline",
        }}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton> */}
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: isSmallScreen ? 250 : 400,
          // backgroundColor:"blue"
        }}
      >
        <InputBase
          sx={{ 
            ml: 1, 
            flex: 1
          }}
          placeholder={placeholder}
          inputProps={{ "aria-label": "search google maps" }}
          onChange={onChange}
        />
        <IconButton 
          type="button" 
          sx={{ p: "10px" }} 
          aria-label="search" 
          onClick={onSearch}
        >
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

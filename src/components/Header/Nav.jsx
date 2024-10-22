import React from "react";
import styles from "./Nav.module.css";
import { IconButton, InputBase, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <IconButton sx={{ p: "10px", color: "white" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
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
    </nav>
  );
}

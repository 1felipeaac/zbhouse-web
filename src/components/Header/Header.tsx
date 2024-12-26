import React from "react";
// @ts-ignore
import styles from "./Header.module.css";
import { Logo } from "./Logo";
import { Nav, NavProps } from "./Nav";

interface HeaderProps extends NavProps{}

export function Header({onSearch, onChange, placeholder, inputType, disabled}:HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav 
        onChange={onChange} 
        onSearch={onSearch} 
        placeholder={placeholder} 
        inputType={inputType} 
        disabled={disabled}
      />
    </header>
  );
}

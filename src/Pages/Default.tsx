import { Header } from "../components/Header/Header";
import { NavProps } from "../components/Header/Nav";
import { Sidebar } from "../components/Sidebar/Sidebar";
//@ts-ignore
import styles from './Default.module.css';
import React, { ReactNode } from "react";
interface DefaultProps{
  children: ReactNode
  navBar?: NavProps
}
export function Default({children, navBar}:DefaultProps) {
  const placeholderDefault = "Pesquisar..."
  const typeDefault = "text"
  const disabledDefault = false

  const placeholder = navBar?.placeholder || placeholderDefault
  const type = navBar?.inputType || typeDefault
  const disabled = navBar?.disabled || disabledDefault
  return (
    <div className={styles.page}>
      <Header 
        onChange={navBar?.onChange} 
        onSearch={navBar?.onSearch} 
        placeholder={placeholder} 
        inputType={type}
        disabled={disabled}
      />
      <div id="default" className={styles.wrapper}>
        <Sidebar />
        {children}
      </div>
      <footer className={styles.footer}>Suporte: felipeaacoelho@gmail.com</footer>
    </div>
  );
}
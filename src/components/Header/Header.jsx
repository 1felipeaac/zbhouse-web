import styles from "./Header.module.css";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
}

"use client";
import react from "react";
import { Divider } from "antd";
import Link from "next/link";
import styles from "./Navbar.module.css";
import menu from "../../assets/menu.png";

function Navbar() {
  // usestate variable to control the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = react.useState(false);

  //function to set the mobile menu to false
  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.title} href="/">
          Rachel's Portfolio
        </Link>
        <img
          src={menu.src}
          alt="menu"
          className={styles.menu}
          onClick={handleToggleMenu}
        />

        <ul
          className={`${styles.menuItems} ${
            isMobileMenuOpen ? styles.showMenu : ""
          }`} // condtionally adds .showmenu class is isMobileMenuOpen is true
        >
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/https://drive.google.com/file/d/1yqu5csZuPM1IkPsBI3tbiMCttfF12eNA/view?usp=sharing">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
      <Divider className={styles.customDivider} />
    </>
  );
}

export default Navbar;

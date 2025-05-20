"use client";

import React from "react";
import emailIcon from "../../assets/footer/email.jpg";
import githubIcon from "../../assets/footer/github.png";
import linkedinIcon from "../../assets/footer/linkedin.png";
import styles from "./Footer.module.css";
import { Divider } from "antd";
function Footer() {
  return (
    <div>
      <Divider className={styles.customDivider} />
      <footer className={styles.footer}>
        <h1 className={styles.title}>Contacts</h1>
        <ul className={styles.items}>
          <li>
            <a href="mailto: rachpast@bu.edu">
              <img
                src={emailIcon.src}
                className={styles.email}
                alt="Email icon"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/recell0478">
              <img src={githubIcon.src} alt="Github icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rachel-pastreich">
              <img src={linkedinIcon.src} alt="Linkedin icon" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;

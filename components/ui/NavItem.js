"use client";

import styles from "./Navbar.module.css";

const NavItem = ({ title, link, isActive, index }) => {
  return (
    <li key={index}>
      <a
        href={link}
        className={isActive ? styles.navItemActive : styles.navItem}
      >
        {title}
      </a>
    </li>
  );
};

export { NavItem };

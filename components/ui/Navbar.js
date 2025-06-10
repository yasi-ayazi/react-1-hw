"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavItem } from "./NavItem";

import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {/* TASK - React 1 week 2 */}
          {/* Create a <NavItem> component, which accepts the following:  */}
          {/* title, link, isActive  */}
          <NavItem
            title={navbarItems[0].title}
            link={navbarItems[0].link}
            isActive={navbarItems[0].link === currentPath}
            index={1}
          />
          <NavItem
            title={navbarItems[1].title}
            link={navbarItems[1].link}
            isActive={navbarItems[1].link === currentPath}
            index={2}
          />
          <NavItem
            title={navbarItems[2].title}
            link={navbarItems[2].link}
            isActive={navbarItems[2].link === currentPath}
            index={3}
          />
          {/* This part is not needed anymore, as we are using the NavItem
          component */}
          {/*
          <li
            className={classNames(styles.navbarLinks, {
              [styles.isLinkActive]: navbarItems[0].link === currentPath,
            })}
          >
            <Link href={navbarItems[0].link}>
              <b>01</b> {navbarItems[0].title}
            </Link>
          </li>
          <li
            className={classNames(styles.navbarLinks, {
              [styles.isLinkActive]: navbarItems[1].link === currentPath,
            })}
          >
            <Link href={navbarItems[1].link}>
              <b>02</b> {navbarItems[1].title}
            </Link>
          </li>
          <li
            className={classNames(styles.navbarLinks, {
              [styles.isLinkActive]: navbarItems[2].link === currentPath,
            })}
          >
            <Link href={navbarItems[2].link}>
              <b>03</b> NASA COLLABORATION
            </Link>
          </li>
          */}
          {/* TASK - React 1 week 3 */}
          {/* replace repeating content by using navbarItems.map(() => <NavLink />) */}
        </ul>
      </nav>
    </header>
  );
};

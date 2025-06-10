"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import { SocialMediaItem } from "./SocialMediaItem";
import "/font/fontAwesome.js"; 

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}
      {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href="/about_us">About Us</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration">NASA Collaboration</Link>
          </li>
        </ul>
      </div>

      {/* TASK - React 1 week 1 */}
      {/* Add a new list item for LINKEDIN */}
      {/* NOTE: The following section contains the original hardcoded social media links.
         It has been commented out and replaced by <SocialMediaItem /> components below 
         to improve code reusability and maintainability.*/}
      {/*
      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://tiktok.com">Tiktok</a>
          </li>
          <li>
            <a href="https://google.com">On the streets at night</a>
          </li>
          <li>
            <a href="https://linkedin.com">LinkedIn</a> 
          </li>
          */}
      {/* TASK - React 1 week 2 */}
      {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
      {/* it should accept the following props */}
      {/* url, title, icon */}
      {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}

      <ul className={styles.footerList}>
        <SocialMediaItem
          url="https://facebook.com"
          title="Facebook"
          icon={["fab", "facebook-f"]}
        />
        <SocialMediaItem
          url="https://instagram.com"
          title="Instagram"
          icon={["fab", "instagram"]}
        />
        <SocialMediaItem
          url="https://google.com"
          title="On the streets at night"
          icon={["fab", "google"]}
        />
        <SocialMediaItem
          url="https://linkedin.com"
          title="LinkedIn"
          icon={["fab", "linkedin-in"]}
        />
      </ul>
    </footer>
  );
};

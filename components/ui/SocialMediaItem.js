"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li className={styles.socialItem}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <FontAwesomeIcon icon={icon} /> <span>{title}</span>
      </a>
    </li>
  );
};

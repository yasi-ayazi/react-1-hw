"use client";
import styles from './page.module.css';

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverPhotoCard}>
      <img className={styles.roverPhotoImg} src={src} alt={roverName} />
      <p>{roverName} – {date}</p>
    </div>
  );
};

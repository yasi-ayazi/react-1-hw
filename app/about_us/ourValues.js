import styles from "./page.module.css";

const OurValues = () => {
  return (
    <div>
      <div className={styles.valueItem}>
        <strong className={styles.valueTitle}>Exploration:</strong>
        <p className={styles.valueText}>
          We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit
          of discovery is at the heart of human nature, and we are committed to pushing the
          boundaries of what is possible.
        </p>
      </div>

      <div className={styles.valueItem}>
        <strong className={styles.valueTitle}>Innovation:</strong>
        <p className={styles.valueText}>
          At Galactica, we prioritize cutting-edge technology and innovation. We are constantly
          evolving our spacecraft, safety protocols, and services to ensure that our travelers
          experience the most advanced and secure space journeys available.
        </p>
      </div>

      <div className={styles.valueItem}>
        <strong className={styles.valueTitle}>Sustainability:</strong>
        <p className={styles.valueText}>
          We are committed to making space exploration sustainable for future generations. Our space
          missions are designed to minimize environmental impact, both on Earth and in space, and to
          foster a spirit of responsibility towards our universe.
        </p>
      </div>

      <div className={styles.valueItem}>
        <strong className={styles.valueTitle}>Community:</strong>
        <p className={styles.valueText}>
          We believe in the power of collective exploration. Our journeys are not just about
          reaching new destinations; they are about building a community of space enthusiasts who
          share a passion for the stars.
        </p>
      </div>
    </div>
  );
};

export default OurValues;

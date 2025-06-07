
import styles from "./page.module.css";
const partners = [
  { name: "Alphabet", image: "/business_partners/alphabet-logo.png" },
  { name: "Amazon", image: "/business_partners/amazon_logo.png" },
  { name: "CBC", image: "/business_partners/CBC_Logo_White.png" },
  { name: "Microsoft", image: "/business_partners/Microsoft-Logo-white.png" },
  { name: "NYU", image: "/business_partners/nyu-logo.png" },
  { name: "Queens University", image: "/business_partners/QueensLogo_white.png" },
  { name: "Samsung", image: "/business_partners/samsung-logo.png" },
  { name: "Sodexo", image: "/business_partners/sodexo-logo.png" },
];

const OurPartners = () => {
  return (
    <div>
      <p>
        We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.
      </p>
      <div className={styles.partnerGrid}>
        {partners.map((partner, index) => (
          <div key={index} className={styles.partnerCard}>
            <img src={partner.image} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;

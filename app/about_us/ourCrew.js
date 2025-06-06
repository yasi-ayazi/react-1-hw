"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const crewMembers = [
  {
    Name: "Sarah Vega",
    Title: "Captain",
    Description:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    image: "/crew/image-anousheh-ansari.webp",
  },
  {
    Name: "Leo Redding",
    Title: "Dr",
    Description:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    image: "/crew/image-douglas-hurley.webp",
  },
  {
    Name: "Hana Lee",
    Title: "Chief Engineer",
    Description:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    image: "/crew/image-mark-shuttleworth.webp",
  },
  {
    Name: "Alex Santos",
    Title: "Mission Specialist",
    Description:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    image: "/crew/image-victor-glover.webp",
  },
  {
    Name: "Maya Patel",
    Title: "Crew Member",
    Description:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    image: "/crew/image-douglas-hurley.webp",
  },
];

const OurCrew = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space
        explorers, engineers, and visionaries who are united by a common goal: to make space travel
        accessible and exciting for all.
      </p>

      <div className={styles.crewList}>
        {crewMembers.map((member, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {member.Name}
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div style={{ marginTop: "2rem" }}>
          <h3>
            {crewMembers[selectedIndex].Title} – {crewMembers[selectedIndex].Name}
          </h3>
          <img
            src={crewMembers[selectedIndex].image}
            alt={crewMembers[selectedIndex].Name}
            style={{ width: "200px", borderRadius: "10px" }}
          />
          <p>{crewMembers[selectedIndex].Description}</p>
        </div>
      )}
    </div>
  );
};

export default OurCrew;

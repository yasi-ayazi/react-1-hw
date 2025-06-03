import styles from "./page.module.css";

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files
import ourValues from "./ourValues";
import ourCrew from "./ourCrew.js";
import ourPartners from "./ourPartners.js";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <ourValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <ourCrew />
        </section>

        {/* TASK - React 1 week 1 */}
        {/* Add in the "OurPartners" component here */}
        <section className="card">
          <h2>Our Partners</h2>
          <ourPartners/>
        </section>
      </main>
    </div>
  );
};

export default Crew;

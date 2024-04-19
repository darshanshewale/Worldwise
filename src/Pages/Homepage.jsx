import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";

// this will be the home page of application with heading and login button
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      {/* pagenav is navigation for the homepage  */}
      <PageNav />

      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        {/* this will be link to login  */}
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}

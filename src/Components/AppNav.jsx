import { NavLink } from "react-router-dom";
import styles from "../Components/AppNav.module.css";

// this component create links cities and countries tap
export default function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

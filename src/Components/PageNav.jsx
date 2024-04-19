import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../Components/Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      {/* starting with logo */}
      <Logo />

      {/* below is the list of nav link is created  */}

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

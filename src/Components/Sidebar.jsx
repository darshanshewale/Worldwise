import styles from "../Components/Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "../Components/Logo";
import { Outlet } from "react-router-dom";

//this represents side bar 

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {/* having logo */}
      <Logo />
      {/* appnav is component tonavigate between cities and countries */}
      <AppNav />

      {/* allow child route */}
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

import Sidebar from "../Components/Sidebar";
import styles from "../Pages/AppLayout.module.css";
import Map from "../Components/Map";
import User from "../Components/User";

// this represent applayout
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

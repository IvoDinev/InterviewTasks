import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.nav}
  >
    <Link className={styles["nav-btn"]} to="/councillors">
      Councillors
    </Link>
    <Link className={styles["nav-btn"]} to="/councils">Councils</Link>
    <Link className={styles["nav-btn"]} to="/affairs">Affairs</Link>
  </nav>
);

export default Nav;

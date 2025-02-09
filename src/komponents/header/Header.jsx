import styles from "../header/header.module.css";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Turbo.az</div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;

import styles from "../navbar/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a className={styles.navbar} href="">
        Butun Elanlar
      </a>

      <a className={styles.navbar} href="">
        Ehtiyat Hisseleri
      </a>

      <a className={styles.navbar} href="">
        Avtokatoloq
      </a>

      <a className={styles.navbar} href="">
        Dilerler
      </a>

      <a className={styles.navbar} href="">
        Icare
      </a>

      <button className={styles.btn}>Signin</button>
    </div>
  );
};

export default Navbar;

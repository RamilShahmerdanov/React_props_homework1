import styles from "../footer/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a className={styles.footernav} href="">
        Qaydalar
      </a>
      <a className={styles.footernav} href="">
        Qanun
      </a>
      <a className={styles.footernav} href="">
        İstifadəçi razılaşması
      </a>
      <a className={styles.footernav} href="">
        Məxfilik siyasəti
      </a>
      <a className={styles.footernav} href="">
        Reklam yerləşdirin
      </a>
    </div>
  );
};

export default Footer;

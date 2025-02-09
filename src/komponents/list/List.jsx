import Cart from "../cart/Cart";
import styles from "../list/list.module.css";
import img1 from "../../assets/bmw.jpeg";
import img2 from "../../assets/audi.jpeg";
import img3 from "../../assets/mercedes.jpeg";
import img4 from "../../assets/opel1.jpeg";
import img5 from "../../assets/07.jpeg";
import img6 from "../../assets/niva.jpeg";
import img7 from "../../assets/kalina.jpeg";
import img8 from "../../assets/niva2.jpeg";

const List = () => {
  return (
    <div className={styles.list}>
      <Cart
        image={img1}
        title="BMW"
        qiymet="15000"
        ili="1998"
        mekan="Quba"
        tarix="Bugun"
      />
      <Cart
        image={img2}
        title="audi"
        qiymet="20000"
        mekan="Sumqayit"
        ili="2004"
        tarix="Bugun"
      />
      <Cart
        image={img3}
        title="Mercedes"
        qiymet="14000"
        ili="1999"
        mekan="Sumqayit"
        tarix="Bugun"
      />
      <Cart
        image={img4}
        title="Opel"
        qiymet="12000"
        ili="2010"
        mekan="Quba"
        tarix="Bugun"
      />
      <Cart
        image={img5}
        title="Lada Vaz 07"
        qiymet="5000"
        ili="2008"
        mekan="Sumqayit"
        tarix="Bugun"
      />
      <Cart
        image={img6}
        title="Niva"
        qiymet="12000"
        ili="2010"
        mekan="Sumqayit"
        tarix="Bugun"
      />
      <Cart
        image={img7}
        title="Kalina"
        qiymet="13000"
        ili="2015"
        mekan="Sumqayit"
        tarix="Bugun"
      />
      <Cart
        image={img8}
        title="Niva"
        qiymet="15000"
        ili="2010"
        mekan="Quba"
        tarix="Bugun"
      />
    </div>
  );
};

export default List;

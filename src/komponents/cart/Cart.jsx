import ProtoTypes from "prop-types";
import styles from "../cart/cart.module.css";

const Cart = (props) => {
  return (
    <div className={styles.cartinfo}>
      <img className={styles.cartimg} src={props.image} alt="" />
      <p>Model: {props.title}</p>
      <p>İli :{props.ili} </p>
      <p>Qitmet:{props.qiymet} AZN</p>
      <p>
        {props.mekan} {props.tarix}
      </p>
    </div>
  );
};

export default Cart;
Cart.propTypes = {
  image: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  ili: ProtoTypes.string.isRequired,
  qiymet: ProtoTypes.string.isRequired,
  mekan: ProtoTypes.string.isRequired,
  tarix: ProtoTypes.string.isRequired,
};

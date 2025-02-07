import React from "react";
import Header from "./komponents/header/Header";
import Navbar from "./komponents/navbar/navbar";
import List from "./komponents/list/List";
import Cart from "./komponents/cart/Cart";
import Footer from "./komponents/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Navbar></Navbar> */}
      <List />
      {/* <Cart></Cart> */}
      <Footer />
    </div>
  );
};

export default App;

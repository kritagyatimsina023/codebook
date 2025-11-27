import React from "react";
import CartEmpty from "./components/CartEmpty";
import CartList from "./components/CartList";
import { useCart } from "../../context/CartContext";
import useTitle from "../../hooks/useTitle";

const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Carts (${cartList.length})`);
  console.log(cartList.length);
  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};

export default CartPage;

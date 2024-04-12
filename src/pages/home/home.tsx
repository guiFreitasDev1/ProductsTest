import { ProductsGrid } from "@/components/Home/products-grid";
import { CartContext } from "@/context/cart";
import React, { useContext } from "react";

const HomeScreen = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext is undefined");
  }
  const { addProductToCart, productsCart } = cartContext;
  console.log(productsCart);
  const handleClick = (data: any) => {
    addProductToCart(data);
  };
  return (
    <div>
      <ProductsGrid addProductToCart={handleClick} />
    </div>
  );
};

export default HomeScreen;

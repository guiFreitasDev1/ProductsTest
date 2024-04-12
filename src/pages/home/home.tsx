import { ProductsGrid } from "@/components/Home/products-grid";
import { CartContext } from "@/context/cart";
import React, { useContext } from "react";

const HomeScreen = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext is undefined");
  }
  const { addProductToCart } = cartContext;

  const handleClick = (data: {
    brand: string | undefined;
    createdAt: string | undefined;
    description: string | undefined;
    id: number | undefined;
    name: string | undefined;
    photo: string | undefined;
    price: string | undefined;
    updatedAt: string | undefined;
  }) => {
    addProductToCart(data);
  };
  return (
    <div>
      <ProductsGrid addProductToCart={handleClick} />
    </div>
  );
};

export default HomeScreen;

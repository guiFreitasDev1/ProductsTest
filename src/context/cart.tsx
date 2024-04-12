import React, { createContext, useState, useContext } from "react";

export type Product = {
  id: number | undefined;
  name: string | undefined;
  photo: string | undefined;
  price: string | undefined;
  quantity: number;
};

type CartContextType = {
  productsCart: Product[];
  addProductToCart: any;
  removeProductFromCart: any;
  removeProductFullFromCart: any;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [productsCart, setProductsCart] = useState<Product[]>([]);

  const addProductToCart = (data: {
    brand: string | undefined;
    createdAt: string | undefined;
    description: string | undefined;
    id: number | undefined;
    name: string | undefined;
    photo: string | undefined;
    price: string | undefined;
    updatedAt: string | undefined;
  }) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find(
      (product: any) => product.id === data.id
    );

    if (!item) {
      copyProductsCart.push({
        id: data.id,
        name: data.name,
        photo: data.photo,
        price: data.price,
        quantity: 1,
      });
    } else {
      item.quantity = item.quantity + 1;
    }

    setProductsCart(copyProductsCart);
  };

  const removeProductFromCart = (data: {
    id: number | undefined;
    name: string | undefined;
    photo: string | undefined;
    price: string | undefined;
    quantity: number;
  }) => {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.find(
      (product: any) => product.id === data.id
    );
    if (item && item.quantity && item.quantity > 1) {
      item.quantity = item.quantity - 1;
      setProductsCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id != data.id
      );
      setProductsCart(arrayFiltered);
    }
  };

  const removeProductFullFromCart = (data: {
    id: number | undefined;
    name: string | undefined;
    photo: string | undefined;
    price: string | undefined;
    quantity: number;
  }) => {
    const updatedProductsCart = productsCart.filter(
      (product) => product.id !== data.id
    );

    setProductsCart(updatedProductsCart);
  };

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProductToCart,
        removeProductFromCart,
        removeProductFullFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

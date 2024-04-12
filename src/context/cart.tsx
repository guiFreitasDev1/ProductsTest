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
  removeProductFromCart: (id: number) => void;
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

  const addProductToCart = (data: any) => {
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

  const removeProductFromCart = (id: number) => {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.find((product: any) => product.id === id);
    if (item && item.quantity && item.quantity > 1) {
      item.quantity = item.quantity - 1;
      setProductsCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id != id
      );
      setProductsCart(arrayFiltered);
    }
  };

  return (
    <CartContext.Provider
      value={{ productsCart, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

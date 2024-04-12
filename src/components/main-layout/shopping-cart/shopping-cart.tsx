import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Text } from "@/components/ui";
import { CartWithProducts } from "./components/cart-with-products";
import styles from "./shoppingCart.module.scss";
import { CartContext } from "@/context/cart";

interface ShoppingCartProps {
  onClose: () => void;
  setQuantityCart: (data: any) => void;
}

export const ShoppingCart = ({
  onClose,
  setQuantityCart,
}: ShoppingCartProps) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext is undefined");
  }
  const { productsCart, addProductToCart } = cartContext;
  useEffect(() => {
    setQuantityCart(productsCart.length);
  }, [productsCart.length, setQuantityCart, addProductToCart]);

  const handleBackToStore = () => {
    onClose();
  };

  return (
    <div className={styles.wrapper}>
      {productsCart.length === 0 ? (
        <div className={styles.content}>
          <Text variant="body" color="titleText" weight="500">
            Seu carrinho está vazio
          </Text>
          <Button onClick={handleBackToStore} variant="primary" weight="400">
            VOLTAR PARA A LOJA
          </Button>
        </div>
      ) : (
        <div className={styles.content}>
          <CartWithProducts onClose={onClose} products={productsCart} />
        </div>
      )}
      {productsCart.length === 0 && (
        <div className={styles.buyButton}>
          <Button onClick={handleBackToStore} variant="secondary" weight="400">
            CONTINUAR COMPRAS
          </Button>
        </div>
      )}
    </div>
  );
};

import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Text } from "@/components/ui";
import { CartWithProducts } from "./components/cart-with-products";
import styles from "./shoppingCart.module.scss";

interface ShoppingCartProps {
  onClose: () => void;
}

export const ShoppingCart = ({ onClose }: ShoppingCartProps) => {
  const router = useRouter();

  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const handleBackToStore = () => {
    /*  router.push("/loja"); */
  };

  return (
    <div className={styles.wrapper}>
      {isEmpty ? (
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
          <CartWithProducts onClose={onClose} />
        </div>
      )}
      {isEmpty && (
        <div className={styles.buyButton}>
          <Button onClick={handleBackToStore} variant="secondary" weight="400">
            CONTINUAR COMPRAS
          </Button>
        </div>
      )}
    </div>
  );
};

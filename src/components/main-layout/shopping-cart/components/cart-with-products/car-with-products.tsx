"use client";

import styles from "./cartWithProducts.module.scss";
import { CardProductCard } from "./components";
import { Button, Text } from "@/components/ui";
import { Divider, Progress } from "antd";

export type CartWithProductsProps = {
  onClose: () => void;
};

export const CartWithProducts = ({ onClose }: CartWithProductsProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productsContainer}>
        <CardProductCard />
      </div>
      <div className={styles.buyResumeContainer}>
        <Divider />
        <div className={styles.buyResumeRow}>
          <Text variant="body" weight="600" color="black">
            Total
          </Text>
          <Text variant="body" weight="500" color="black">
            R$839,70
          </Text>
        </div>

        <div className={styles.buttonContainer}>
          <Button variant="secondary" onClick={onClose}>
            CONTINUAR COMPRAS
          </Button>
          <Button variant="secondary">FINALIZAR PEDIDO</Button>
        </div>
      </div>
    </div>
  );
};

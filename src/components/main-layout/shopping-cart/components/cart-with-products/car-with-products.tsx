"use client";

import styles from "./cartWithProducts.module.scss";
import { CardProductCard } from "./components";
import { Button, Text } from "@/components/ui";
import { Divider } from "antd";

export type CartWithProductsProps = {
  onClose: () => void;
  products?: any;
};

export const CartWithProducts = ({
  onClose,
  products,
}: CartWithProductsProps) => {
  const calculateTotalPrice = () => {
    if (!products) return 0;

    return products
      .map((product: any) => {
        return parseFloat(product?.price) * product?.quantity;
      })
      .reduce((total: number, price: number) => total + price, 0);
  };

  const renderItem = (
    cart:
      | {
          reduce: any;
          id: number | undefined;
          name: string | undefined;
          photo: string | undefined;
          price: string | undefined;
          quantity: number | undefined;
        }
      | undefined
  ) => {
    return (
      <div>
        <CardProductCard cart={cart} />
      </div>
    );
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.productsContainer}>
        {products?.map(renderItem)}
      </div>
      <div className={styles.buyResumeContainer}>
        <Divider />
        <div className={styles.buyResumeRow}>
          <Text variant="body" weight="600" color="black">
            Total
          </Text>
          <Text variant="body" weight="500" color="black">
            R${calculateTotalPrice().toFixed(2)}
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

"use client";

import React, { useState } from "react";
import styles from "./cardProductCard.module.scss";
import { Button, Text } from "@/components/ui";

export type CardProductCardProps = {};

export const CardProductCard = ({}: CardProductCardProps) => {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const handleIncreaseQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setProductQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img
          src="https://raizmarmitas.com.br/wp-content/uploads/2023/12/kit-shape-do-verao-1.jpeg"
          className={styles.image}
        />
      </div>
      <div className={styles.productInfoContainer}>
        <div className={styles.productNameContainer}>
          <Text variant="body" weight="600" color="black">
            Kit Shape do Verão (12 und.)
          </Text>
          <Text variant="body" weight="600">
            icon
          </Text>
        </div>
        <div className={styles.productNameContainer}>
          <div className={styles.productQuantityContainer}>
            <Button
              variant="secondary"
              customStyle={{ height: 18, width: 18, borderRadius: 32 }}
              onClick={handleDecreaseQuantity}
            >
              <Text variant="body" color="white" weight="600">
                -
              </Text>
            </Button>
            <Text variant="body" weight="600" fontSize="15" color="black">
              {productQuantity}
            </Text>
            <Button
              variant="secondary"
              customStyle={{ height: 18, width: 18, borderRadius: 32 }}
              onClick={handleIncreaseQuantity}
            >
              <Text variant="body" color="white" weight="600">
                +
              </Text>
            </Button>
          </div>
          <Text variant="body" weight="600" color="black">
            R$279,90
          </Text>
        </div>
      </div>
    </div>
  );
};

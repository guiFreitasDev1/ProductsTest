"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./cardProductCard.module.scss";
import { Button, Text } from "@/components/ui";
import { CartContext } from "@/context/cart";
import { DeleteOutlined } from "@ant-design/icons";
export type CardProductCardProps = {
  cart?: {
    reduce: any;
    id: number | undefined;
    name: string | undefined;
    photo: string | undefined;
    price: string | undefined;
    quantity: number | undefined;
  };
};

export const CardProductCard = ({ cart }: CardProductCardProps) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext is undefined");
  }
  const { addProductToCart, removeProductFromCart, removeProductFullFromCart } =
    cartContext;
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const cartPrice =
    cart?.price && cart?.quantity ? parseFloat(cart.price) * cart.quantity : 0;
  useEffect(() => {
    setProductQuantity(cart?.quantity ? cart?.quantity : 1);
  }, [productQuantity, cart, addProductToCart]);

  const handleIncreaseQuantity = () => {
    addProductToCart(cart);
    setProductQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setProductQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    removeProductFromCart(cart);
  };
  const handleDelete = () => {
    setProductQuantity(0);
    removeProductFullFromCart(cart);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img
          src={cart?.photo}
          className={styles.image}
          alt={cart?.name || ""}
        />
      </div>
      <div className={styles.productInfoContainer}>
        <div className={styles.productNameContainer}>
          <Text variant="body" weight="600" color="black">
            {cart?.name}
          </Text>
          <Button
            variant="delete"
            customStyle={{ height: 25, width: 25, borderRadius: 32 }}
            onClick={handleDelete}
          >
            <DeleteOutlined />
          </Button>
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
            R${cartPrice}
          </Text>
        </div>
      </div>
    </div>
  );
};

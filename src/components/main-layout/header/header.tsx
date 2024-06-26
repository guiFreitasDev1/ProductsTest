"use client";
import React from "react";
import { useState } from "react";
import { Button, Text } from "@/components/ui";
import styles from "./header.module.scss";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { ShoppingCart } from "../shopping-cart";

export const Header = () => {
  const [quantityCart, setQuantityCart] = useState(0);
  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer} onClick={() => {}}>
        <Text fontSize="36" color="white" weight="600" variant="body">
          MKS
        </Text>
        <Text fontSize="16" color="white" weight="300" variant="body">
          sistemas
        </Text>
      </div>
      <div className={styles.drawerContainer} onClick={showDrawer}>
        <MenuOutlined height={32} width={32} style={{ color: "#ff815a" }} />
      </div>
      <div className={styles.menuContainer}>
        <Button
          variant="buttonTransparent"
          onClick={showDrawer}
          icon={
            <ShoppingCartOutlined
              size={63}
              color="#f08953"
              style={{ paddingRight: 10 }}
            />
          }
          type="default"
          style={{
            right: 24,
            height: 56,
            width: 56,

            background: "#fff",
            border: "2px solid #f08953",
          }}
        >
          {quantityCart}
        </Button>
        <Drawer
          title="Carrinho de compras"
          closeIcon
          placement={"right"}
          closable={false}
          className={styles.cartDrawer}
          onClose={onClose}
          width={500}
          open={visible}
        >
          <ShoppingCart onClose={onClose} setQuantityCart={setQuantityCart} />
        </Drawer>
      </div>
    </div>
  );
};

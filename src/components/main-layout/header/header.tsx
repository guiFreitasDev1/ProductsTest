"use client";

import { useContext, useState } from "react";
import { Button, Text } from "@/components/ui";
import styles from "./header.module.scss";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { Drawer } from "antd";
import { ShoppingCart } from "../shopping-cart";
import { CartContext, CartProvider } from "@/context/cart";

export const Header = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext is undefined");
  }
  const { addProductToCart, productsCart } = cartContext;

  const router = useRouter();

  const handleNavigate = (routerParam: string) => {
    router.push(routerParam);
  };

  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const MenuTitle = (
    <Text variant="header" color="white" fontSize="15" weight="600">
      Menu
    </Text>
  );

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.imageContainer}
        onClick={() => handleNavigate("/")}
      >
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
          icon={<ShoppingCartOutlined size={63} color="#f08953" />}
          type="default"
          style={{
            right: 24,
            height: 56,
            width: 56,
            background: "#fff",
            border: "2px solid #f08953",
          }}
        >
          0
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
          <CartProvider>
            <ShoppingCart onClose={onClose} />
          </CartProvider>
        </Drawer>
      </div>
    </div>
  );
};

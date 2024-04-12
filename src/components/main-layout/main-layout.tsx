"use client";

import React, { ReactNode, useState } from "react";
import { Drawer, FloatButton, Layout, RadioChangeEvent } from "antd";
import { Header } from "./header";
import { Footer } from "./footer";
import styles from "./mainLayout.module.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ShoppingCart } from "./shopping-cart";

const { Content } = Layout;

export type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {};

  return (
    <Layout className={styles["layout-main"]}>
      <Header />
      <Content className={styles.content}>
        <div className={styles["content-inner"]}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </Content>
    </Layout>
  );
};

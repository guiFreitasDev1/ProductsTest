import { Col, Row, Table } from "antd";
import React from "react";
import styles from "./shopping-cart-table.module.scss";
import { Button, Input, Text } from "@/components/ui";
import { CheckoutCard } from "../checkout-card";

export const ShoppingCartTable = () => {
  const dataSource = [
    {
      key: "1",
      action: "icon-editar",
      image: "icon-imagem",
      price: "R$ 100,00",
      quantity: "2",
      subtotal: "R$ 200,00",
    },
    {
      key: "2",
      action: "icon-deletar",
      image: "icon-imagem",
      quantity: "3",
      subtotal: "R$ 450,00",
    },
  ];

  const columns = [
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: () => <>+</>,
    },
    {
      title: "",
      dataIndex: "image",
      key: "image",
      render: () => (
        <>
          <img
            src="https://raizmarmitas.com.br/wp-content/uploads/2023/06/bolsa-980x579.png"
            alt=""
            className={styles.images}
          />
        </>
      ),
    },
    {
      title: "Preço",
      dataIndex: "price",
      key: "price",
      render: (text: string) => (
        <>
          <Text variant="body" fontSize="16" weight="500" color="grayText">
            {text}
          </Text>
        </>
      ),
    },
    {
      title: "Quantidade",
      dataIndex: "quantity",
      key: "quantity",
      render: (text: string) => (
        <>
          <Text variant="body" fontSize="16" weight="500" color="grayText">
            {text}
          </Text>
        </>
      ),
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      render: (text: string) => (
        <>
          <Text variant="body" fontSize="16" weight="500" color="grayText">
            {text}
          </Text>
        </>
      ),
    },
  ];

  return (
    <Row className={styles.wrapper}>
      <Col xs={24}>
        <Table dataSource={dataSource} columns={columns} />
      </Col>
      <Col xs={24} className={styles.finishWrapper}>
        <Col xs={12} className={styles.bottomTableContainer}>
          <Col xs={24} md={24} className={styles.cupponContainer}>
            <Input label="Código do cupom" placeholder="Código do cupom" />
            <div className={styles.buttonContainer}>
              <Button variant="primary">APLICAR CUPOM</Button>
            </div>
          </Col>
        </Col>
        <Col xs={12} className={styles.checkoutCardContainer}>
          <CheckoutCard />
        </Col>
      </Col>
    </Row>
  );
};

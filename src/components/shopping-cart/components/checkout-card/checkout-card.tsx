import React from "react";
import { Row, Col } from "antd";
import styles from "./checkout-card.module.scss";
import { Button, Text } from "@/components/ui";

export const CheckoutCard = () => {
  return (
    <Col>
      <Row justify="start">
        <Col>
          <Text variant="body" weight="400" fontSize="22" color="titleText">
            TOTAL NO CARRINHO
          </Text>
        </Col>
      </Row>
      <Col className={styles.wrapper}>
        <Col xs={24} md={24} className={styles.subtotalWrapper}>
          <Col xs={6} className={styles.itemTitleWrapper}>
            <Text variant="body" weight="700" fontSize="14" color="titleText">
              Subtotal
            </Text>
          </Col>
          <Col className={styles.itemInfo} xs={15}>
            <Text variant="body" weight="500" fontSize="15" color="grayText">
              R$29,90
            </Text>
          </Col>
        </Col>
        <Col xs={24} md={24} className={styles.subtotalWrapper}>
          <Col xs={6} className={styles.itemTitleWrapper}>
            <Text variant="body" weight="700" fontSize="14" color="titleText">
              Entrega
            </Text>
          </Col>
          <Col className={styles.itemInfo} xs={15}>
            <Text variant="body" weight="500" fontSize="15" color="grayText">
              Retirada na Rua Grão Mogol, 627, Carmo - Belo Horizonte Entrega
              para BELO HORIZONTE, Alagoas, 31231-231. Mudar endereço
            </Text>
          </Col>
        </Col>
        <Col xs={24} md={24} className={styles.subtotalWrapper}>
          <Col xs={6} className={styles.itemTitleWrapper}>
            <Text variant="body" weight="700" fontSize="14" color="titleText">
              Total
            </Text>
          </Col>
          <Col className={styles.itemInfo} xs={15}>
            <Text variant="body" weight="600" fontSize="15" color="grayText">
              R$29,90
            </Text>
          </Col>
        </Col>
      </Col>
      <Col xs={24} className={styles.buttonWrapper}>
        <Button variant="primary">
          CONTINUAR PARA A FINALIZAÇÃO DE COMPRA
        </Button>
      </Col>
    </Col>
  );
};

/* eslint-disable @next/next/no-img-element */
"use client";

import { Col, Row } from "antd";
import styles from "./footer.module.scss";
import { Text } from "@/components/ui";

export const Footer = () => {
  return (
    <>
      <Row className={styles.bottomSection}>
        <Col>
          <Text variant="body" weight="500" color="footerText" fontSize="12">
            MKS sistemas © Todos os direitos reservados
          </Text>
        </Col>
      </Row>
    </>
  );
};

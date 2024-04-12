import React, { useMemo } from "react";
import { Col, Row } from "antd";
import styles from "./kitsFilterCard.module.scss";
import { Text } from "@/components/ui";

export const KitsFilterCard = () => {
  const mapCarousel = useMemo(
    () => [
      {
        img: "https://raizmarmitas.com.br/wp-content/uploads/2023/06/COMFORTFOOD__RAIZ.svg",
        title: "Confort Food",
      },
      ,
      {
        img: "https://raizmarmitas.com.br/wp-content/uploads/2023/06/VEGGIE_RAIZ.svg",
        title: "Veggie",
      },
    ],
    []
  );

  const renderItem = (item: any) => {
    return (
      <div className={styles.categoryItem}>
        <img src={item.img} alt="" className={styles.imageCarousel} />
        <Text variant="body" fontSize="14" weight="600">
          {item.title}
        </Text>
      </div>
    );
  };

  return (
    <Row className={styles.wrapper}>
      <Col className={styles.filterText}>
        <Text variant="body" color="brandPrimary" fontSize="18" weight="600">
          FILTRE POR ESTILO
        </Text>
      </Col>
      <Col xs={24} className={styles.categoryContainer}>
        {mapCarousel.map(renderItem)}
      </Col>
    </Row>
  );
};

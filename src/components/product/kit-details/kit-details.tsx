import { Col, Row } from "antd";
import styles from "./kit-details.module.scss";
import { Text } from "@/components/ui";

export const KitDetails = () => {
  const ingredientes = [
    { key: 1, quantity: 2, name: "Escondinhos de Frango com batata doce" },
    { key: 2, quantity: 2, name: "Almôndegas ao molho pomodori" },
    {
      key: 3,
      quantity: 2,
      name: "Supremo frango na crosta de castanha de caju",
    },
    {
      key: 4,
      quantity: 1,
      name: "Escondidinho de pernil",
    },
  ];
  return (
    <Row gutter={24} className={styles.wrapper}>
      <Col xs={24} className={styles.itemsWrapper}>
        <Col className={styles.items}>
          <Col>
            <Text
              variant="body"
              color="brandSecondary"
              weight="600"
              fontSize="24"
            >
              PRODUTOS INCLUÍDOS
            </Text>
          </Col>
          <Col>
            {ingredientes.map((item) => (
              <div key={item.key}>
                <Text
                  variant="body"
                  color="grayText"
                  weight="500"
                  fontSize="16"
                >{`${item.quantity}x`}</Text>
                <Text
                  variant="body"
                  color="brandPrimary"
                  weight="500"
                  fontSize="16"
                >{` ${item.name}`}</Text>
              </div>
            ))}
          </Col>
        </Col>
      </Col>
    </Row>
  );
};

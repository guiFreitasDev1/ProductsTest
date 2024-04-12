import { Button, Text } from "../ui";
import styles from "./product-card.module.scss";
import { Col, Row } from "antd";

interface ProductCardProps {
  card?: {
    brand: string | undefined;
    createdAt: string | undefined;
    description: string | undefined;
    id: number | undefined;
    name: string | undefined;
    photo: string | undefined;
    price: string | undefined;
    updatedAt: string | undefined;
  };
  addProductToCart: any;
}

export const ProductCard = ({ card, addProductToCart }: ProductCardProps) => {
  return (
    <div className={styles.wrapper}>
      <Row className={styles.imageContainer}>
        <img className={styles.image} src={card?.photo} />
        <div className={styles.priceAndText}>
          <Col xs={12}>
            <Text
              fontSize="16"
              color="brandPrimary"
              weight="400"
              variant="body"
            >
              {card?.name}
            </Text>
          </Col>
          <Col className={styles.priceContainer}>
            <Text color="white" fontSize="15" weight="700" variant="body">
              {card?.price}
            </Text>
          </Col>
        </div>
        <Col className={styles.descriptionContainer}>
          <Text fontSize="12" color="brandPrimary" weight="400" variant="body">
            {card?.description}
          </Text>
        </Col>
      </Row>

      <Button
        variant="secondary"
        height="31.91px"
        onClick={() => addProductToCart(card)}
      >
        COMPRAR
      </Button>
    </div>
  );
};

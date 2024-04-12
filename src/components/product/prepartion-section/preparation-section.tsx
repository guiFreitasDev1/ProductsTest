import { Col, Row } from "antd";
import styles from "./preparationSeciton.module.scss";
import { Text } from "@/components/ui";

export const PreparationSection = () => {
  return (
    <Row className={styles.wrapper}>
      <Col xs={24} className={styles.itemWrapper}>
        <Text variant="body" color="brandPrimary" fontSize="30" weight="600">
          MODO DE PREPARO
        </Text>
        <Text variant="body" color="brandSecondary" fontSize="22" weight="600">
          ANTES DE SE DELICIAR, É SÓ AQUECER.
        </Text>
      </Col>
      <Col className={styles.itemInfoWrapper}>
        <Col>
          <img
            src="https://raizmarmitas.com.br/wp-content/uploads/2023/06/icone_microondas.svg"
            className={styles.image}
          />
        </Col>
        <Col className={styles.itemInfo}>
          <Text variant="body" color="brandPrimary" fontSize="15" weight="600">
            MICRO-ONDAS
          </Text>
          <Col className={styles.itemList}>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              1. Retire a Marmita do congelador
            </Text>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              2. Faça três furos na tampa de acordo com as divisões.
            </Text>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              3. Leve ao micro-ondas por 5 minutos e pronto.
            </Text>
          </Col>
          <Col className={styles.itemList}>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              Você pode consumir na própria marmita ou servir em um prato bem
              bonito.
            </Text>
          </Col>
          <Col className={styles.itemList}>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              Obs.: os 5 minutos podem variar de acordo com a potencia do seu
              micro-ondas.
            </Text>
          </Col>
          <Col className={styles.border}></Col>
        </Col>
      </Col>
      <Col className={styles.itemInfoWrapper}>
        <Col>
          <img
            src="https://raizmarmitas.com.br/wp-content/uploads/2023/06/icone_banhomaria.svg"
            className={styles.image}
          />
        </Col>
        <Col className={styles.itemInfo}>
          <Text variant="body" color="brandPrimary" fontSize="15" weight="600">
            BANHO MARIA
          </Text>
          <Col className={styles.itemList}>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              1. Pré aqueça uma panela com agua
            </Text>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              2. Antes de ferver coloque a marmita{" "}
            </Text>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              3. Retirar da água após 20 minutos
            </Text>
          </Col>
          <Col className={styles.itemList}>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              Você pode consumir na própria marmita ou servir em um prato bem
              bonito.
            </Text>
          </Col>
          <Col className={styles.border}></Col>
        </Col>
      </Col>
      <Col className={styles.itemInfoWrapper}>
        <Col>
          <img
            src="https://raizmarmitas.com.br/wp-content/uploads/2023/06/icone_congelar.svg"
            className={styles.image}
          />
        </Col>
        <Col className={styles.itemInfo}>
          <Text variant="body" color="brandPrimary" fontSize="15" weight="600">
            ARMAZENAMENTO
          </Text>
          <Col className={styles.itemList}>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              Usamos a tecnologia “fresh when frozen” que congela preservando
              todos nutrientes, aspectos e a qualidade dos alimentos.
            </Text>
          </Col>
          <Col className={styles.itemList}>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              Assim que receber as marmitas, armazenar no freezer ou congelador
              em temperatura abaixo de -10ºC. .
            </Text>
          </Col>
          <Col className={styles.itemList}>
            <Text variant="body" color="grayText" fontSize="14" weight="500">
              Data de validade na embalagem. Após descongelar, não congelar
              novamente.
            </Text>
          </Col>
          <Col className={styles.border}></Col>
        </Col>
      </Col>
    </Row>
  );
};

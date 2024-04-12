import { ProductCard } from "@/components";
import styles from "./products-grid.module.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import React from "react";
import { useGetProducts } from "@/services";

interface ProductsGrid {
  addProductToCart: any;
}

export const ProductsGrid = ({ addProductToCart }: ProductsGrid) => {
  const { dataProducts, isLoadingProducts } = useGetProducts({
    page: 1,
    rows: 10,
    sortBy: "name",
    orderBy: "ASC",
  });

  const renderItem = (item: {
    brand: string | undefined;
    createdAt: string | undefined;
    description: string | undefined;
    id: number | undefined;
    name: string | undefined;
    photo: string | undefined;
    price: string | undefined;
    updatedAt: string | undefined;
  }) => {
    return (
      <div>
        <ProductCard card={item} addProductToCart={addProductToCart} />
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperProducts}>
        {dataProducts?.products?.map(renderItem)}
      </div>
    </div>
  );
};

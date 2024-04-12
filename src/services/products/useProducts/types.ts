export type GetProductsParams = {
  key: number | undefined;
  name: any;
  type: any;
  category_image: string | undefined;
  packed_lunches?: {
    category_id: number | undefined;
    description: string | undefined;
    discount_price: number | undefined;
    id: number | undefined;
    ingredients: string | undefined;
    name: string | undefined;
    price: string | undefined;
    stock: number | undefined;
    style_category_id: number | undefined;
    url_image: string | undefined;
  }[];
};

import type { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import s from "./ProductList.module.scss";

type Props = {
  products: Product[];
};

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
      <section className={s.productList}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
  );
};

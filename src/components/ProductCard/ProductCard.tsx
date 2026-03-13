import React, { useState } from "react";
import s from "./ProductCard.module.scss";
import type { Product } from "../../types/Product";
import { StarRating } from "../StarRating";
import { Dropdown } from "../SortDropdown";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = React.memo(({ product }) => {
  const {
    // slug,
    name,
    // image,
    category,
    price,
    old_price,
    discount_percent,
    currency,
    rating,
    reviews_count,
    in_stock,
    selected_volume_id,
    volumes,
  } = product;

  const volumeOptions = volumes.map((v) => ({
    value: v.id,
    label: v.label
      .replace(/\b(\d+)\s*l\b/i, "$1 л")
      .replace(/\b(\d+)\s*ml\b/i, "$1 мл"),
    disabled: !v.in_stock,
  }));
  const formattedName = name.split(", ").slice(0, -1).join(", ");
  const volume =
    volumeOptions.find((volume) => volume.value === selected_volume_id)
      ?.value || volumeOptions[0].value;

  const [selectedVolume, setSelectedVolume] = useState(volume);
  const [dropdownOpen, setDropdownOpen] = useState(false);
    const [inCart, setInCart] = useState(false);

  return (
    <article className={s.productCard}>
      <a href="#" className={s.productLink}>
        <figure className={s.imgWrapper}>
          <img src="icons/product-1.png" alt={name} className={s.productImg} />
        </figure>
      </a>

      <div className={s.productMain}>
        <section className={s.productPriceSection} aria-label="Price">
          <p className={s.productFullPrice}>
            {old_price} {currency}
          </p>

          <p className={s.productPrice}>
            <strong>
              {price} {currency}
            </strong>
          </p>

          <div className={s.discountTag}>
            <span className={s.tagHole}></span>
            {discount_percent}%
          </div>
        </section>

        <h3 className={s.productName}>
          <a href="#" className={s.productNameLink}>
            {formattedName}
          </a>
        </h3>

        <section className={s.productReviews} aria-label={`${reviews_count} reviews, average ${rating} out of 5`}>
          <StarRating rating={rating} />
          <a href="#" className={s.reviewsLink}>
            {reviews_count}
          </a>
        </section>

        <ul className={s.productMeta}>
          <li className={s.productMetaItem} hidden={!in_stock}>
            <span
              className={`${s.iconSuccess} ${s.metaIcon}`}
              aria-hidden="true"
            ></span>

            <span className={s.productStock}>В наличии</span>
          </li>

          <li className={`${s.productMetaItem} ${s.categoryItem}`}>
            <span
              className={`${s.iconCategory} ${s.metaIcon}`}
              aria-hidden="true"
            ></span>

            <span className={s.productCategory}>{category}</span>
          </li>
        </ul>

        <footer className={s.productActions}>
          <div className={`${s.dropdownWrapper} ${dropdownOpen ? s.open : ""}`}>
            <button
              type="button"
              className={s.dropdownButton}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {volumeOptions.find((v) => v.value === selectedVolume)?.label}
              <span className={s.volumeIcon}></span>
            </button>

            {dropdownOpen && (
              <Dropdown
                value={selectedVolume}
                options={volumeOptions}
                onChange={(value) => {
                  setSelectedVolume(value);
                  setDropdownOpen(false);
                }}
              />
            )}
          </div>

          <button
            type="button"
            className={`${s.addToCartButton} ${inCart ? s.inCart : ""}`}
            onClick={() => setInCart((prev) => !prev)}
          >
            <span className={s.cartIcon}></span>
            {inCart ? "В корзине" : "В корзину"}
          </button>
        </footer>
      </div>
    </article>
  );
});

export default ProductCard;

import s from "./ProductControls.module.scss";
import classNames from "classnames";
import { Dropdown } from "../SortDropdown";
import React, { useState, type Dispatch, type SetStateAction } from "react";

type Props = {
  productsLen: number;
  search: string;
  onSearch: Dispatch<SetStateAction<string>>;
  sortBy: string;
  onSortBy: Dispatch<SetStateAction<string>>;
  reversed: boolean;
  onReversed: Dispatch<SetStateAction<boolean>>;
};

export const ProductControls: React.FC<Props> = ({
  productsLen,
  search,
  onSearch,
  sortBy,
  onSortBy,
  reversed,
  onReversed,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sortOptions = [
    { value: "popularity", label: "По популярности" },
    { value: "priceAsc", label: "По цене" },
  ];

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleSortChange = (newSort: typeof sortBy) => {
    onSortBy(newSort);
    setDropdownOpen(false);
  };
  return (
    <div className={s.controls}>
      <div className={s.search}>
        <span className={s.searchIcon} aria-hidden="true"></span>
        <input
          type="search"
          placeholder="Поиск"
          className={s.searchInput}
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className={s.topSection}>
        <div className={s.items}>{productsLen} товаров</div>

        <div className={s.sort}>
          <button
            className={classNames(s.sort, { [s.reversed]: reversed })}
            onClick={() => onReversed((prev) => !prev)}
          >
            <span className={s.sortIcon} aria-hidden="true"></span>
          </button>

          <button className={s.dropdownToggle} onClick={() => toggleDropdown()}>
            <span className={s.sortLabel}>
              {sortBy === "popularity" ? "По популярности" : "По цене"}
            </span>
            <span
              className={`${s.arrow} ${dropdownOpen ? s.open : ""}`}
              aria-hidden="true"
            ></span>
          </button>

          {dropdownOpen && (
            <Dropdown
              value={sortBy}
              options={sortOptions}
              onChange={handleSortChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

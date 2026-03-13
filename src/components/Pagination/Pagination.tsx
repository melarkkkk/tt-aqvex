import React from "react";
import s from "./Pagination.module.scss";

type Props = {
  totalPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({ totalPages, currentPage, onChangePage }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) onChangePage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onChangePage(currentPage + 1);
  };

  return (
    <div className={s.pagination}>
      <button onClick={handlePrev} disabled={currentPage === 1}>←</button>

      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? s.active : ""}
          onClick={() => onChangePage(page)}
        >
          {page}
        </button>
      ))}

      <button onClick={handleNext} disabled={currentPage === totalPages}>→</button>
    </div>
  );
};
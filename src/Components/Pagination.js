import React from "react";

export const Pagination = ({
  countriesPerPage,
  countriesData,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(countriesData / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map((page, index) => {
        return (
          <button
            disabled={currentPage === page ? true : false}
            onClick={() => {
              paginate(page);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            href="#"
            className={`countries-pages ${
              currentPage === page ? "current-page" : ""
            }`}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

type PaginationProps = {
  className?: string;
  totalPages: number;
  currentPage: number;
  onChangePage: (pageNumber: number) => void;
};

const Pagination = ({
  className = "",
  currentPage,
  totalPages,
  onChangePage,
}: PaginationProps) => {
  const spacer = "...";

  const handlePaginate = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    const pageNumber = +(target as HTMLButtonElement).value;
    onChangePage(pageNumber);
  };

  let pattern: (number | string)[] = [];

  if (!totalPages) return null;

  if (totalPages > 6) {
    if (currentPage < 3) {
      // Pattern example: 1 2 3 ... 98 99 100
      pattern = [1, 2, 3, spacer, totalPages - 2, totalPages - 1, totalPages];
    } else if (currentPage >= 3 && !(currentPage >= totalPages - 4)) {
      // Pattern example: 2 3 4 ... 98 99 100
      pattern = [
        currentPage - 1,
        currentPage,
        currentPage + 1,
        spacer,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      // Pattern example: ... 95 96 97 98 99 100
      pattern = [
        spacer,
        totalPages - 5,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
  } else {
    // Pattern example: 1 2 3 4 5 6
    pattern = Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  return (
    <ul
      className={`
        ${className} 
        pagination
      `}
    >
      <li
        className={`
          pagination__item 
          pagination__item--first
          ${currentPage === 1 ? "pagination__item--disabled" : ""}
        `}
      >
        <button
          className="pagination__button"
          value="1"
          disabled={currentPage === 1}
          onClick={handlePaginate}
        >
          First
        </button>
      </li>

      {pattern.map((item) => (
        <li
          className={`
            pagination__item 
            ${item === spacer ? "pagination__item--spacer" : ""}
            ${currentPage === item ? "pagination__item--active" : ""}
          `}
          key={item}
        >
          <button
            className="pagination__button"
            value={item}
            disabled={item === spacer || item === currentPage}
            onClick={handlePaginate}
          >
            {item}
          </button>
        </li>
      ))}

      <li
        className={`
          pagination__item 
          pagination__item--last
          ${currentPage === totalPages ? "pagination__item--disabled" : ""}
        `}
      >
        <button
          className="pagination__button"
          value={totalPages}
          disabled={currentPage === totalPages}
          onClick={handlePaginate}
        >
          Last
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

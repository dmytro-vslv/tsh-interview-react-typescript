import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "redux/store/hooks";
import { asyncGetItems, selectProducts } from "redux/slices/productsSlice";
import { selectFilter } from "redux/slices/filterSlice";
import { useDebounce } from "hooks/useDebounce";
import { Navbar, ProductList, Pagination } from "components";

const PRODUCTS_PER_PAGE = 8;

const Products = () => {
  const { status, items, meta } = useAppSelector(selectProducts);
  const { search, active, promo } = useAppSelector(selectFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce<string>(search, 400);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      asyncGetItems({
        limit: String(PRODUCTS_PER_PAGE),
        page: String(currentPage),
        ...(debouncedSearch.length && { search: debouncedSearch }),
        ...(active && { active: String(active) }),
        ...(promo && { promo: String(promo) }),
      })
    );
  }, [dispatch, currentPage, debouncedSearch, active, promo]);

  return (
    <section className="products">
      <Navbar className="products__navbar" />

      <div className="products__container">
        <ProductList status={status} items={items} />

        {status === "idle" && !!items.length && (
          <Pagination
            className="products__pagination"
            currentPage={meta.currentPage}
            totalPages={meta.totalPages}
            onChangePage={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};

export default Products;

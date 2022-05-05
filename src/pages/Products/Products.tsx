import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "redux/store/hooks";
import { asyncGetItems, selectProducts } from "redux/slices/productsSlice";
import { selectFilter } from "redux/slices/filterSlice";
import { Navbar, Spinner, Product, Pagination } from "components";

const Products = () => {
  const { status, items, meta } = useAppSelector(selectProducts);
  const { search, active, promo } = useAppSelector(selectFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const productsPerPage = 8;

  useEffect(() => {
    dispatch(
      asyncGetItems({
        limit: String(productsPerPage),
        page: String(currentPage),
        ...(search.length && { search }),
        ...(active && { active: String(active) }),
        ...(promo && { promo: String(promo) }),
      })
    );
  }, [dispatch, currentPage, search, active, promo]);

  return (
    <section className="products">
      <Navbar className="products__navbar" />

      <div className="products__container">
        {status === "loading" && <Spinner className="products__spinner" />}

        <div className="products__items">
          {items.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>

        <Pagination
          className="products__pagination"
          currentPage={currentPage}
          totalPages={meta.totalPages}
          onChangePage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default Products;

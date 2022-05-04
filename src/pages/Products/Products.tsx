import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "redux/store/hooks";
import { asyncGetItems, selectProducts } from "redux/slices/productsSlice";
import { Navbar, Product } from "components";

const Products = () => {
  const { items } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncGetItems());
  }, [dispatch]);

  return (
    <section className="products">
      <Navbar className="products__navbar" />

      <div className="products__container">
        <div className="products__items">
          {items.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

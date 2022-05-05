import { StatusType, IProduct } from "redux/slices/productsSlice";
import { Spinner, Product, Empty } from "components";

type ProductListProps = {
  className?: string;
  status: StatusType;
  items: IProduct[];
};

const ProductList = ({ className = "", status, items }: ProductListProps) => {
  const renderListContent = () => {
    switch (status) {
      case "loading":
        return <Spinner className="product-list__spinner" />;

      case "idle":
        if (items.length) {
          return items.map((item) => <Product key={item.id} product={item} />);
        } else {
          return (
            <Empty
              className="product-list__empty"
              title="Ooops… It’s empty here"
              description="There are no products on the list"
            />
          );
        }

      case "failed":
        return (
          <Empty
            className="product-list__empty"
            title="Ooops… Something went wrong"
            description="Reload page or try again later"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`
        ${className}
        product-list
        ${!items.length ? "product-list--empty" : ""}
      `}
    >
      {renderListContent()}
    </div>
  );
};

export default ProductList;

import { Badge, Rating, Button } from "components";
import { IProduct } from "redux/slices/productsSlice";

type ProductProps = {
  product: IProduct;
};

const Product = ({ product }: ProductProps) => {
  const { active, promo, image, name, description, rating } = product;

  return (
    <div
      className={`
        product 
        ${!active ? "product--unavailable" : ""}
      `}
    >
      <div className="product__header">
        {promo && <Badge className="product__badge" label="Promo" />}

        <img className="product__image" src={image} alt={name} />
      </div>

      <div className="product__content">
        <h3 className="product__name">{name}</h3>

        <p className="product__description">{description}</p>

        <Rating className="product__rating" rating={rating} />

        <Button
          type="button"
          label="Show details"
          variant="primary"
          disabled={!active}
        />
      </div>
    </div>
  );
};

export default Product;

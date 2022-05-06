import { IProduct } from "redux/slices/productsSlice";
import { Badge, Rating, Button, Modal } from "components";
import { useState } from "react";

type ProductProps = {
  className?: string;
  product: IProduct;
};

const Product = ({ className = "", product }: ProductProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { active, promo, image, name, description, rating } = product;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleOpenModal = () => {
    if (!active) return;
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div
      className={`
        ${className}
        product 
        ${!active ? "product--unavailable" : ""}
        ${!imageLoaded ? "product--loading" : ""}
      `}
    >
      <div className="product__header">
        {promo && <Badge className="product__badge" label="Promo" />}

        <img
          className="product__image"
          src={image}
          alt={name}
          onLoad={handleImageLoad}
        />
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
          onClick={handleOpenModal}
        />
      </div>

      <Modal show={openModal} onClose={handleCloseModal}>
        <div className="product__modal">
          <div className="product__modal-header">
            <img className="product__modal-image" src={image} alt={name} />
          </div>

          <div className="product__modal-content">
            <h3 className="product__modal-name">{name}</h3>

            <p className="product__modal-description">{description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;

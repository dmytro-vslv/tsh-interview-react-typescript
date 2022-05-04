import { Navbar, Product } from "components";

const Products = () => {
  return (
    <section className="products">
      <Navbar className="products__navbar" />

      <div className="products__container">
        <div className="products__items">
          <Product
            active={true}
            promo={true}
            image="https://picsum.photos/640/480"
            name="Product name"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            rating={5}
          />

          <Product
            active={true}
            promo={false}
            image="https://picsum.photos/640/480"
            name="Product name"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, illum"
            rating={0}
          />

          <Product
            active={false}
            promo={true}
            image="https://picsum.photos/640/480"
            name="Product name"
            description="Lorem ipsum dolor sit amet."
            rating={1}
          />

          <Product
            active={false}
            promo={false}
            image="https://picsum.photos/640/480"
            name="Product name"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, illum"
            rating={3}
          />

          <Product
            active={false}
            promo={true}
            image="https://picsum.photos/640/480"
            name="Product name"
            description="Lorem ipsum dolor sit amet."
            rating={1}
          />

          <Product
            active={false}
            promo={false}
            image="https://picsum.photos/640/480"
            name="Product name"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, illum"
            rating={3}
          />

          <Product
            active={true}
            promo={true}
            image="https://picsum.photos/640/480"
            name="Product name"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            rating={5}
          />

          <Product
            active={true}
            promo={false}
            image="https://picsum.photos/640/480"
            name="Product name"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, illum"
            rating={0}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;

import { screen, render } from "tests";
import { IProduct } from "redux/slices/productsSlice";
import { Product } from "components";

const appliedProductClass = (testedProduct: IProduct) => {
  const product = screen.getByTestId("product");
  const unavailableClass = "product--unavailable";

  if (testedProduct.active) {
    expect(product).not.toHaveClass(unavailableClass);
  } else {
    expect(product).toHaveClass(unavailableClass);
  }
};

const imagePresence = (testedProduct: IProduct) => {
  const image = screen.getByRole("img");

  expect(image).toBeVisible();
  expect(image).toHaveAttribute("src", testedProduct.image);
  expect(image).toHaveAttribute("alt", testedProduct.name);
};

const badgePresence = (testedProduct: IProduct) => {
  const badge = screen.queryByText(/promo/i);

  if (testedProduct.promo) {
    expect(badge).toBeVisible();
  } else {
    expect(badge).not.toBeInTheDocument();
  }
};

const namePresence = (testedProduct: IProduct) => {
  const name = screen.getByRole("heading", { name: testedProduct.name });

  expect(name).toBeVisible();
};

const descriptionPresence = (testedProduct: IProduct) => {
  const description = screen.getByText(testedProduct.description);

  expect(description).toBeVisible();
};

const ratingPresence = (testedProduct: IProduct) => {
  const rating = screen.getByRole("list");
  const allStars = screen.getAllByRole("listitem");
  const filledStars = screen.queryAllByTestId(/rating-star-filled-/i);
  const emptyStars = screen.queryAllByTestId(/rating-star-empty-/i);
  const maxRating = 5;

  expect(rating).toBeVisible();
  expect(allStars).toHaveLength(maxRating);
  expect(filledStars).toHaveLength(testedProduct.rating);
  expect(emptyStars).toHaveLength(maxRating - testedProduct.rating);
};

const buttonPresence = (testedProduct: IProduct) => {
  const button = screen.getByRole("button", {
    name: testedProduct.active ? /show details/i : /unavailable/i,
  });
  const disabledClass = "button--disabled";

  expect(button).toBeVisible();
  expect(button).toHaveClass("button--primary");

  if (testedProduct.active) {
    expect(button).toBeEnabled();
    expect(button).not.toHaveClass(disabledClass);
  } else {
    expect(button).toBeDisabled();
    expect(button).toHaveClass(disabledClass);
  }
};

describe("Product component", () => {
  describe("Available product without promo", () => {
    const availableProductWithoutPromo: IProduct = {
      id: 1,
      active: true,
      promo: false,
      image: "https://picsum.photos/640/480",
      name: "Product name",
      description: "Product description",
      rating: 4,
    };

    beforeEach(() => {
      render(<Product product={availableProductWithoutPromo} />);
    });

    test("should not apply class 'product--unavailable'", () => {
      appliedProductClass(availableProductWithoutPromo);
    });

    test("should display image", () => {
      imagePresence(availableProductWithoutPromo);
    });

    test("should not display badge", () => {
      badgePresence(availableProductWithoutPromo);
    });

    test("should display product name", () => {
      namePresence(availableProductWithoutPromo);
    });

    test("should display description", () => {
      descriptionPresence(availableProductWithoutPromo);
    });

    test(`should display rating with ${availableProductWithoutPromo.rating} filled stars`, () => {
      ratingPresence(availableProductWithoutPromo);
    });

    test("should display enabled button", () => {
      buttonPresence(availableProductWithoutPromo);
    });
  });

  describe("Available product with promo", () => {
    const availableProductWithPromo: IProduct = {
      id: 2,
      active: true,
      promo: true,
      image: "https://picsum.photos/640/480",
      name: "Product name",
      description: "Product description",
      rating: 5,
    };

    beforeEach(() => {
      render(<Product product={availableProductWithPromo} />);
    });

    test("should not apply class 'product--unavailable'", () => {
      appliedProductClass(availableProductWithPromo);
    });

    test("should display image", () => {
      imagePresence(availableProductWithPromo);
    });

    test("should display badge", () => {
      badgePresence(availableProductWithPromo);
    });

    test("should display product name", () => {
      namePresence(availableProductWithPromo);
    });

    test("should display description", () => {
      descriptionPresence(availableProductWithPromo);
    });

    test(`should display rating with ${availableProductWithPromo.rating} filled stars`, () => {
      ratingPresence(availableProductWithPromo);
    });

    test("should display enabled button", () => {
      buttonPresence(availableProductWithPromo);
    });
  });

  describe("Unavailable product without promo", () => {
    const unavailableProductWithoutPromo: IProduct = {
      id: 3,
      active: false,
      promo: false,
      image: "https://picsum.photos/640/480",
      name: "Product name",
      description: "Product description",
      rating: 0,
    };

    beforeEach(() => {
      render(<Product product={unavailableProductWithoutPromo} />);
    });

    test("should apply class 'product--unavailable'", () => {
      appliedProductClass(unavailableProductWithoutPromo);
    });

    test("should display image", () => {
      imagePresence(unavailableProductWithoutPromo);
    });

    test("should not display badge", () => {
      badgePresence(unavailableProductWithoutPromo);
    });

    test("should display product name", () => {
      namePresence(unavailableProductWithoutPromo);
    });

    test("should display description", () => {
      descriptionPresence(unavailableProductWithoutPromo);
    });

    test(`should display rating with ${unavailableProductWithoutPromo.rating} filled stars`, () => {
      ratingPresence(unavailableProductWithoutPromo);
    });

    test("should display disabled button", () => {
      buttonPresence(unavailableProductWithoutPromo);
    });
  });

  describe("Unavailable product with promo", () => {
    const unavailableProductWithPromo: IProduct = {
      id: 4,
      active: false,
      promo: true,
      image: "https://picsum.photos/640/480",
      name: "Product name",
      description: "Product description",
      rating: 3,
    };

    beforeEach(() => {
      render(<Product product={unavailableProductWithPromo} />);
    });

    test("should apply class 'product--unavailable'", () => {
      appliedProductClass(unavailableProductWithPromo);
    });

    test("should display image", () => {
      imagePresence(unavailableProductWithPromo);
    });

    test("should display badge", () => {
      badgePresence(unavailableProductWithPromo);
    });

    test("should display product name", () => {
      namePresence(unavailableProductWithPromo);
    });

    test("should display description", () => {
      descriptionPresence(unavailableProductWithPromo);
    });

    test(`should display rating with ${unavailableProductWithPromo.rating} filled stars`, () => {
      ratingPresence(unavailableProductWithPromo);
    });

    test("should display disabled button", () => {
      buttonPresence(unavailableProductWithPromo);
    });
  });
});

import { screen, render } from "tests";
import axios, { AxiosResponse } from "axios";
import { Products } from "pages";

const responseWithProducts = {
  data: {
    items: [
      {
        active: true,
        description: "Product description 1",
        id: 1,
        image: "https://picsum.photos/640/480",
        name: "Product name 1",
        promo: true,
        rating: 5,
      },
      {
        active: true,
        description: "Product description 2",
        id: 2,
        image: "https://picsum.photos/640/480",
        name: "Product name 2",
        promo: false,
        rating: 4,
      },
    ],
    meta: {
      totalItems: 2,
      itemCount: 2,
      itemsPerPage: 2,
      totalPages: 1,
      currentPage: 1,
    },
  },
} as AxiosResponse;

const responseWithoutProducts = {
  data: {
    items: [],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: 0,
      totalPages: 0,
      currentPage: 1,
    },
  },
} as AxiosResponse;

describe("Products page", () => {
  test("should display spinner and then 2 products after successful API call", async () => {
    jest.spyOn(axios, "get").mockResolvedValue(responseWithProducts);

    render(<Products />);

    expect(screen.getByTestId("spinner")).toBeVisible();
    expect(await screen.findByText("Product name 1")).toBeVisible();
    expect(await screen.findByText("Product name 2")).toBeVisible();
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
  });

  test("should display spinner and then empty message when no products found", async () => {
    jest.spyOn(axios, "get").mockResolvedValue(responseWithoutProducts);

    render(<Products />);

    expect(screen.getByTestId("spinner")).toBeVisible();
    expect(await screen.findByText(/it's empty here/i)).toBeVisible();
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
  });

  test("should display spinner and then error message when API call fails", async () => {
    jest.spyOn(axios, "get").mockRejectedValue(() => ({}));

    render(<Products />);

    expect(screen.getByTestId("spinner")).toBeVisible();
    expect(await screen.findByText(/something went wrong/i)).toBeVisible();
    expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
  });
});

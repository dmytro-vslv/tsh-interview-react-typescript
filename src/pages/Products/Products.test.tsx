import { render } from "tests";
import { Products } from "pages";

describe("Products", () => {
  test("Displays page header", async () => {
    const { getByText } = render(<Products />);

    expect(getByText("Products page")).toBeInTheDocument();
  });
});

import { render } from "tests";
import { Login } from "pages";

describe("Login", () => {
  test("Displays all information", async () => {
    const { getByText, getByLabelText } = render(<Login />);

    expect(getByText("Products page")).toBeInTheDocument();
    expect(getByText("Products page")).toBeInTheDocument();
    expect(getByLabelText("username:")).toBeInTheDocument();
    expect(getByLabelText("password:")).toBeInTheDocument();
  });
});

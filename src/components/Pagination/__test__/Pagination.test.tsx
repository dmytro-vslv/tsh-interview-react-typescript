import { screen, render } from "tests";
import { Pagination } from "components";

describe("Pagination component", () => {
  describe("Total number of pages > 6", () => {
    test("renders on page 1, pattern should be: |<  1,2,3 ... n-2,n-1,n  >|", async () => {
      render(
        <Pagination 
          totalPages={100} 
          currentPage={1} 
          onChangePage={jest.fn} 
        />
      );

      const expectedPattern = ["First", "1", "2", "3", "...", "98", "99", "100", "Last"];
      const pages = screen.getAllByRole("button");
      const displayedPattern = pages.map((page) => page.textContent);

      expect(displayedPattern).toStrictEqual(expectedPattern);
    });

    test("renders on page 2, pattern should be: |<  1,2,3 ... n-2,n-1,n  >|", async () => {
      render(
        <Pagination 
          totalPages={100} 
          currentPage={2} 
          onChangePage={jest.fn} 
        />
      );

      const expectedPattern = ["First", "1", "2", "3", "...", "98", "99", "100", "Last"];
      const pages = screen.getAllByRole("button");
      const displayedPattern = pages.map((page) => page.textContent);

      expect(displayedPattern).toStrictEqual(expectedPattern);
    });

    test("renders on page 3, pattern should be: |<  2,3,4 ... n-2,n-1,n  >|", async () => {
      render(
        <Pagination 
          totalPages={100} 
          currentPage={3} 
          onChangePage={jest.fn} 
        />
      );

      const expectedPattern = ["First", "2", "3", "4", "...", "98", "99", "100", "Last"];
      const pages = screen.getAllByRole("button");
      const displayedPattern = pages.map((page) => page.textContent);

      expect(displayedPattern).toStrictEqual(expectedPattern);
    });
  });

  describe("Total number of pages <= 6", () => {
    for (let page = 1; page <= 6; page++) {
      test(`renders on page ${page}, pattern should be: |<  1,2,3,4,5,6  >|`, async () => {
        render(
          <Pagination
            totalPages={6}
            currentPage={page}
            onChangePage={jest.fn}
          />
        );

        const expectedPattern = ["First", "1", "2", "3", "4", "5", "6", "Last"];
        const pages = screen.getAllByRole("button");
        const displayedPattern = pages.map((page) => page.textContent);

        expect(displayedPattern).toStrictEqual(expectedPattern);
      });
    }
  });

  describe("Total number of pages === 1", () => {
    test("renders on page 1, pattern should be: |<  1  >|", async () => {
      render(
        <Pagination 
          totalPages={1} 
          currentPage={1} 
          onChangePage={jest.fn} 
        />
      );

      const expectedPattern = ["First", "1", "Last"];
      const pages = screen.getAllByRole("button");
      const displayedPattern = pages.map((page) => page.textContent);

      expect(displayedPattern).toStrictEqual(expectedPattern);
    });
  });
});

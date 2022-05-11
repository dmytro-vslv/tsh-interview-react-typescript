/// <reference types="Cypress" />
import { NavigationMenu } from "../../pages/Navigation";
import { AppRoute } from "../../../../src/routing/AppRoute.enum";

const interceptAndStub = (file: String) => {
  cy.intercept("GET", "**/products?*", { fixture: file }).as("products");
  cy.visit(`${Cypress.env().baseUrl}${AppRoute.Products}`);
  cy.wait("@products");
};

describe("Products page", () => {
  context("Initial page render on different devices", () => {
    before(() => {
      interceptAndStub("products_limit=8_page=1.json");
    });

    const devices: [number, number][] = [
      [320, 480],
      [768, 1024],
      [1280, 720],
      [1920, 1080],
    ];

    devices.forEach((device) => {
      it(`should match products url on ${device} screen`, () => {
        cy.location().should((loc) => {
          expect(loc.href).to.eq(NavigationMenu.productsLink);
        });
      });

      it(`should display navbar on ${device} screen`, () => {
        cy.viewport(...device);
        cy.get(".navbar").should("be.visible");
      });

      it(`should display product list on ${device} screen`, () => {
        cy.viewport(...device);
        cy.get("[data-testid=product-list]").should("be.visible");
      });

      it(`should display pagination on ${device} screen`, () => {
        cy.viewport(...device);
        cy.get(".pagination").should("be.visible");
      });
    });
  });

  context("Filters and search", () => {
    context("User filters products with 'promo' checkbox", () => {
      before(() => {
        interceptAndStub("products_limit=8_page=1_promo=true.json");
      });

      it("should check the checkbox with label 'Promo'", () => {
        cy.contains("label", /promo/i).click();
        cy.contains("label", /promo/i).should("have.class", "checkbox--checked");
      });

      it("should not check the checkbox with label 'Active'", () => {
        cy.contains("label", /active/i).should("not.have.class", "checkbox--checked")
      });

      it("should display only promo products", () => {
        cy.get(".product").should("have.length", 8);
        cy.get(".badge").should("have.length", 8);
      });
    });

    context("User filters products with 'active' checkbox", () => {
      before(() => {
        interceptAndStub("products_limit=8_page=1_active=true.json");
      });

      it("should check the checkbox with label 'Active'", () => {
        cy.contains("label", /active/i).click();
        cy.contains("label", /active/i).should("have.class", "checkbox--checked");
      });

      it("should not check the checkbox with label 'Promo'", () => {
        cy.contains("label", /promo/i).should("not.have.class", "checkbox--checked");
      });

      it("should display only available products", () => {
        cy.get(".product")
          .should("have.length", 8)
          .and("not.have.class", "product--unavailable");
      });
    });

    context("User searches for 'pizza'", () => {
      before(() => {
        interceptAndStub("products_limit=8_page=1_search=pizza.json");
      });

      it("should type 'pizza' in searchbar", () => {
        cy.get("input[placeholder=Search]").type("pizza");
      });

      it("should only display products with pizza in the name", () => {
        cy.get("[data-testid=product-list]")
          .children()
          .should("contain", "Pizza")
          .and("have.length", 3);
      });
    });

    context("User searches for non existing product", () => {
      before(() => {
        interceptAndStub("products_limit=8_page=1_search=non+existing+product.json");
      });

      it("should search for a non existing product", () => {
        cy.get("input[placeholder=Search]").type("non existing product");
      });

      it("should display empty list component", () => {
        cy.get(".empty").contains(/there are no products on the list/i);
      });

      it("should not display pagination", () => {
        cy.get(".pagination").should("not.exist");
      });
    });
  });

  context("Modal", () => {
    before(() => {
      interceptAndStub("products_limit=8_page=1.json");
    });

    it("should click 'Show Details' button", () => {
      cy.get(".product")
        .not(".product--unavailable")
        .contains("button", /show details/i)
        .not("[disabled]")
        .first()
        .click();
    });

    it("should display Modal and Backdrop", () => {
      cy.get(".backdrop").should("exist");
      cy.get(".modal").should("be.visible");
    });

    it("should not close Modal if its content is clicked", () => {
      cy.get(".modal").should("be.visible").click();
      cy.get(".modal").should("be.visible");
    });

    it("should close Modal and Backdrop if close button is clicked", () => {
      cy.get(".modal").find("button").click();
      cy.get(".backdrop").should("not.exist");
      cy.get(".modal").should("not.exist");
    });
  });

  context("Pagination", () => {
    context("User navigates from 1st to 4th page", () => {
      before(() => {
        interceptAndStub("products_limit=8_page=1.json");
      });

      it("should not initially display page number 4", () => {
        cy.get(".pagination")
          .contains("button", /4/i)
          .should("not.exist");
      });

      it("should click on 3rd page", () => {
        cy.get(".pagination").contains("button", /3/i).click();
        interceptAndStub("products_limit=8_page=3.json");
      });

      it("should click on 4th page", () => {
        cy.get(".pagination").contains("button", /4/i).click();
        interceptAndStub("products_limit=8_page=4.json");
      });
    });
  });
});

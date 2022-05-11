/// <reference types="Cypress" />
import { NavigationMenu } from "../../pages/Navigation";
import { AppRoute } from "../../../../src/routing/AppRoute.enum";

describe("Login page", () => {
  before(() => {
    cy.visit(`${Cypress.env().baseUrl}${AppRoute.Login}`);
  });

  context("Initial page render on different devices", () => {
    const devices: [number, number][] = [
      [320, 480],
      [768, 1024],
      [1280, 720],
      [1920, 1080],
    ];

    devices.forEach((device) => {
      it(`should match login url on ${device} screen`, () => {
        cy.location().should((loc) => {
          expect(loc.href).to.eq(NavigationMenu.loginLink);
        });
      });

      it(`should display title on ${device} screen`, () => {
        cy.viewport(...device);
        cy.get(".login__title").should("be.visible");
      });

      it(`should display login form on ${device} screen`, () => {
        cy.viewport(...device);
        cy.get(".login__form").should("be.visible");
      });

      it(`should display link on ${device} screen`, () => {
        cy.viewport(...device);
        cy.get(".login__link").should("be.visible");
      });
    });
  });

  context("User logins with credentials", () => {
    it("should not initially display any errors", () => {
      cy.get(".input-group__error").should("not.exist");
    });

    it("should display inputs with no initial values", () => {
      cy.get("#username").should("be.empty");
      cy.get("#password").should("be.empty");
    });

    it("should display both errors if no credentials were provided", () => {
      cy.get("button[type=submit]").click();
      cy.get(".input-group__error").should("be.visible").and("have.length", 2);
    });

    it("should display only password error if username was provided", () => {
      cy.get("#username").should("be.empty").type("Username");
      cy.get("button[type=submit]").click();
      cy.get(".input-group__error")
        .contains(/password cannot be empty/i)
        .should("be.visible")
        .and("have.length", 1);
    });

    it("should display no errors if both credentials were provided", () => {
      cy.get("#username").clear().type("Username");
      cy.get("#password").should("be.empty").type("Password");
      cy.get("button[type=submit]").click();
      cy.get(".input-group__error").should("not.exist");
    });
  });
});

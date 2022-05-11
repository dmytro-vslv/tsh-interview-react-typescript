import { AppRoute } from "../../../src/routing/AppRoute.enum";

class Navigation {
  goToHome(): void {
    cy.get(`a[href*="${AppRoute.Home}"]`).first().click();
  }

  goToProducts(): void {
    cy.get(`a[href*="${AppRoute.Products}"]`).first().click();
  }

  goToLogin(): void {
    cy.get(`a[href*="${AppRoute.Login}"]`).first().click();
  }

  get homeLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.Home}`;
  }

  get productsLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.Products}`;
  }

  get loginLink(): string {
    return `${Cypress.env().baseUrl}${AppRoute.Login}`;
  }
}

export const NavigationMenu = new Navigation();

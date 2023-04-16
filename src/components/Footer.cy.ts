/// <reference types="cypress" />

import Footer from "./Footer.vue";

describe("<Footer />", () => {
  it("renders", () => {
    cy.viewport(1200, 400);
    cy.mount(Footer);
    cy.contains("Interested in hiring me for your project?");

    cy.get('[href^="mailto').as("emailLink");

    cy.get("@emailLink").invoke("text").should("eq", "szumny.marek@gmail.com");

    cy.get("@emailLink")
      .should("have.attr", "href")
      .and("include", "mailto:szumny.marek@gmail.com");
  });
});

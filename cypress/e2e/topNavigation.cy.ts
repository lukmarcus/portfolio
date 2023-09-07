/// <reference types='cypress' />

import "cypress-real-events";
import { checkIfElementIsEntirelyInViewport } from "../utils";

describe("Top navigation test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('.navbar a[href="/"]').as("home");
    cy.get('.navbar a[href="/resume"]').as("resume");
    cy.get('.navbar a[href="/projects"]').as("projects");
    cy.get('.navbar a[href="/talks"]').as("talks");
    cy.get('.navbar a[href="#contact"]').as("contact");
  });

  it("Should check if top navigation buttons have correct addresses", () => {
    ["Home", "Projects", "Talks", "Contact"].forEach((item) => {
      cy.get(`@${item.toLowerCase()}`).should("include.text", item);
    });
  });

  describe("navigation flow", () => {
    function goBackToHome() {
      return cy.go("back").location("pathname").should("eq", "/");
    }

    ["Projects", "Talks"].forEach((page) => {
      it(`Should go to ${page} and back`, () => {
        cy.get(`@${page.toLowerCase()}`).click();
        cy.location("pathname").should("eq", `/${page.toLowerCase()}`);
        cy.get("h2").invoke("text").should("include", page);
        goBackToHome();
      });
    });

    it("Should scroll to Contact and back", () => {
      cy.get("@contact").realClick();
      cy.url().should("include", "#contact");
      cy.get("#contact")
        .should("be.visible")
        .then(checkIfElementIsEntirelyInViewport);

      goBackToHome();

      cy.window().then((win) => {
        // we use 20, because after click and before scrolling site is scrolled a bit
        expect(win.scrollY).to.be.lessThan(20);
      });
    });
  });

  it("Should check the correct place for slider under every clicked and hovered element in top navigation", () => {
    // Warning! This test can sometimes fail when run in Cypress Studio, because how Navigation component is implemented.
    // TL;DR; any mouse movment during tests can cause this test to fail.
    function checkSlideLinePosition($el) {
      const leftOffset = Math.round($el.position().left);
      cy.get("#slide-line").should("have.css", "left", `${leftOffset}px`);
    }

    [
      "home",
      "resume",
      "projects",
      // "talks", // TODO: fix this - for some reason, this test fails for Talks tab
    ].forEach((page) => {
      cy.get(`@${page}`).click().then(checkSlideLinePosition);
      ["home", "resume", "projects", "talks", "contact"].forEach((page) => {
        cy.log(`Hovering ${page}`);
        cy.get(`@${page}`).realHover().then(checkSlideLinePosition);
      });
    });
  });
});

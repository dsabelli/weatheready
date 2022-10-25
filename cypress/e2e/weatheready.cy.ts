/// <reference types="cypress"/>

describe("Landing Page Functionality", () => {
  it("visits weatheready.com", () => {
    cy.visit("/");
  });

  it("shows tooltip on hover", () => {
    cy.get(".feather-pause").click();
  });
});

export {};

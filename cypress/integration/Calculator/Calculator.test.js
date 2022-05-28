beforeEach(() => {
  cy.visit("/");
});
describe("Simple Operations Test", () => {
  it("Add Decimal Numbers", () => {
    cy.getElementBySelector("[data-number]", "4").click();
    cy.getElementBySelector("[data-number]", ".").click();
    cy.getElementBySelector("[data-number]", "4").click();
    cy.get(".primary-operand").should("have.text", "4.4");
    cy.contains("[data-operation]", "+").click();
    cy.get(".primary-operand").should("have.text", "0");
    cy.get(".secondary-operand").should("have.text", "4.4");
    cy.get('.history > [data-operation=""]').should("have.text", "+");
    cy.getElementBySelector("[data-number]", "1").click();
    cy.getElementBySelector("[data-number]", ".").click();
    cy.getElementBySelector("[data-number]", "6").click();
    cy.get(".primary-operand").should("have.text", "1.6");
    cy.getElementBySelector("[data-number]", "1").click();
    cy.get('[data-equals=""]').click();
    cy.get(".primary-operand").should("have.text", "6.010000000000001");
    cy.get(".secondary-operand").should("have.text", "");
    cy.get('.history > [data-operation=""]').should("have.text", "");
  });
  it("All clear", () => {
    // Same approach as above.
  });
});

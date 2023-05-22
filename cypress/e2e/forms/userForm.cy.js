describe("User Form Test", () => {
  beforeEach(() => {
    // Arrange
    cy.visit("http://localhost:3000/");
    cy.get('[href="/user"]').click();
  });

  it("Name input test", () => {
    // Act
    cy.get("#name").type("Ali");

    // ss al
    cy.screenshot("name-input");
    
    // Assert
    cy.get("[data-test-id='test-name']").should("have.text", "Ali");
  });

  it("Email input test", () => {
    // Arrange Act Assert
  });

  it("Form Submission test", () => {
    // Arrange Act Assert

    expect(true).to.equal(true);
  });
});

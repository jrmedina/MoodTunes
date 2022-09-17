describe("Stubbed API Calls", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001", {
      fixture: "/sampleData.json",
    }).as("sampleData");
  });

  it("Should return the Songs and Moods data", () => {
    cy.visit("http://localhost:3000")
      .wait("@sampleData")
      .its("response.body.songs")
      .should("have.length", 4);
  });
});

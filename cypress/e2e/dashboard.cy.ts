
describe("App", () => {
  beforeEach(() => {
    cy.intercept("GET", "/", { fixture: "/sampleData.json" })
      .as("data")
      .visit("http://localhost:3000")
      .wait("@data")
      .its("response.body")
      .should("have.length", 1);
  });

  it("should render a navbar on load", () => {
    cy.get(".nav-container")
      .contains("MoodTunes")
      .get(".nav-container")
      .find("img")
      .should("have.class", "skull");
  });

  it("should render featured moods on load", () => {
    cy.get(".single-mood")
      .should("have.length", 10)
      .get(".App")
      .contains("Featured Moods");
  });
  it("each featured card should have a title and an image", () => {
    cy.get(".single-mood")
      .find("img")
      .first()
      .should("have.class", "mood-img")
      .get(".single-mood")
      .first()
      .find("h2")
      .contains("Happy");
  });
  it("should render mood options for a user to select", () => {
    cy.get("select")
      .select("Happy")
      .should("have.value", "Happy")
      .get("select")
      .select("High AF")
      .should("have.value", "High AF")
      .get("select")
      .select("Sexy")
      .should("have.value", "Sexy");
  });
  it("should render a form", () => {
    cy.get("form").should("exist");
  });
  it("should change URL when the user selects a mood", () => {
    cy.get("select")
      .select("Sexy")
      .get("button")
      .click()
      .url()
      .should("be.equal", "http://localhost:3000/results");
  });
  it("should render results when a mood is selected", () => {
    cy.get("select")
      .select("Sexy")
      .get("button")
      .click()
      .get(".singleSong")
      .should("have.length", 12);
  });
  it("should render song details", () => {
    cy.get("select")
      .select("Sexy")
      .get("button")
      .click()
      .get(".singleSong")
      .first()
      .find("iFrame")
      .should("have.attr", "src")
      .and(
        "equal",
        "https://open.spotify.com/embed/track/0qprlw0jfsW4H9cG0FFE0Z?utm_source=generator&theme=0"
      );
  });
  it("should have a way to return back home", () => {
    cy.get("select")
      .select("Sexy")
      .get("button")
      .click()
      .get(".home-button")
      .click()
      .url()
      .should("be.equal", "http://localhost:3000/");
  });
  it("should render a footer with team partners corresponding social networks", () => {
    cy.get(".footer")
      .contains("Ana Bennett")
      .get(".linkedinAnchor")
      .first()
      .should("have.attr", "href")
      .and("equal", "https://www.linkedin.com/in/joshua-medina/")
      .get(".githubAnchor")
      .first()
      .should("have.attr", "href")
      .and("equal", "https://github.com/jrmedina");
  });
  it.only("should redirect the user to an error page when the page fails to load", () => {
    cy.visit("http://localhost:3000/blah")
      .get(".errorMessage")
      .contains("Sorry to kill your mood.")
      .get(".home-button")
      .click()
      .url()
      .should("be.equal", "http://localhost:3000/");
  });

  it("should allow the user to randmize a song and generate a new URL", () => {
    cy.get("select")
      .select("Sexy")
      .get("button")
      .click()
      .get(".random-button")
      .click()
      .get("iframe")
      .should("exist")
      .url()
      .should("be.equal", "http://localhost:3000/random");
  });
});

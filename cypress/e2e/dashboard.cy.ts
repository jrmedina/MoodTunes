
describe('App', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1", {
    fixtures: "MoodsData.json"
    });
    cy.visit("http://localhost:3000")
  });
  it('should render a navbar on load', () => {
    cy.get('.nav-container').contains('MoodTunes')
    cy.get('.nav-container').find("img").should('have.class','skull' )
  })
 
  it('should render featured moods on load', () => {
    cy.get('.single-mood').should('have.length', 10)
    cy.get('.App').contains('Featured Moods')
  })
  it('each featured card should have a title and an image', () => {
    cy.get('.single-mood').find('img').first().should('have.class', "mood-img") 
    cy.get('.single-mood').first().find('h2').contains('Happy')
  })
  it('should render mood options for a user to select', () => {
    cy.get('select').select('Happy').should('have.value', "Happy")
    cy.get('select').select('High AF').should('have.value', "High AF")
    cy.get('select').select('Sexy').should('have.value', "Sexy")
  })
  it('should render a form', () => {
    cy.get('form').should("exist")
  })
  it('should change URL when the user selects a mood', () => {
    cy.get('select').select('Sexy')
    cy.get('button').click()
    cy.url().should("be.equal", "http://localhost:3000/results");
  })
  it('should render results when a mood is selected', () => {
    cy.get('select').select('Sexy')
    cy.get('button').click()
    cy.get('.singleSong').should('have.length', 9)
  })
  it('should render song details', () => {
    cy.get('select').select('Sexy')
    cy.get('button').click()
    cy.get('.singleSong').first().contains('Cold Little Heart')
    cy.get('.singleSong').first().contains('Michael Kiwanuka')
    cy.get('.singleSong').first().contains('Soul')
    cy.get('.player-container').should('exist')
  })
  it('should have a way to return back home', () => {
    cy.get('select').select('Sexy')
    cy.get('button').click()
    cy.get('.home-button').click()
    cy.url().should("be.equal", "http://localhost:3000/");
  })
  it('should render a footer with team partners corresponding social networks', () => {
    cy.get('.footer').contains("Ana Bennett")
    cy.get('.linkedinAnchor').first().should("have.attr", "href")
      .and("equal", "https://www.linkedin.com/in/joshua-medina/");
    cy.get('.githubAnchor').first().should("have.attr", "href")  
      .and("equal", "https://github.com/jrmedina")
  })
})


describe('App', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/", {
      statusCode: 200,
      body: [
        {
          id: 27,
          title: "Sneaking",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
        },
        {
          id: 28,
          title: "Suspense",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
        },
      ],
    });
    cy.visit("http://localhost:3000")
  });
  it('should render a header on load', () => {
    cy.get('h1').contains('MoodTunes')

  })
  it('should render stubbed mood data', () => {
    cy.get('.App').get('.moods-container').should('exist', '.single-mood').should('have.length', 1) //why are you only one >.<
  })
})
// cy.get('.movie-trailer')
// 			.should('exist', 'iframe')
// 			.get('iframe')
// 			.should('have.attr', 'src')
// 			.should('include', '01ON04GCwKs')
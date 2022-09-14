
describe('App', () => {
  beforeEach(() => {
    // cy.intercept("GET", "http://localhost:3001/", {
    //   statusCode: 200,
    //   body: [
    //     {
    //       id: 27,
    //       title: "Sneaking",
    //       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    //     },
    //     {
    //       id: 28,
    //       title: "Suspense",
    //       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomK6c1C-ls2QaArwg5b6FCzmR0k93r13cwg&usqp=CAU",
    //     },
    //   ],
    // });
    cy.visit("http://localhost:3000")
  });
  it('should render a navbar on load', () => {
    cy.get('.nav-container').contains('MoodTunes')
    cy.get('.nav-container').find("img").should('have.class','skull' )

  })
  // it('should render stubbed mood data', () => {
  //   cy.get('.App')
  //   // cy.get('.App').get('.moods-container').should('exist', '.single-mood').should('have.length', 1) //why are you only one >.<
  // })
  it('should render featured moods on load', () => {
    cy.get('.single-mood').should('have.length', 10)
    cy.get('.App').contains('Featured Moods')
  })
  it('each featured card should have a title and an image', () => {
    cy.get('.single-mood').find('img').first().should('have.class', "mood-img") 
    cy.get('.single-mood').first().find('h2').contains('Happy')
  })
})
// cy.get('.movie-trailer')
// 			.should('exist', 'iframe')
// 			.get('iframe')
// 			.should('have.attr', 'src')
// 			.should('include', '01ON04GCwKs')
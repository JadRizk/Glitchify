describe('ui: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=Button--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Button!');
  });
});

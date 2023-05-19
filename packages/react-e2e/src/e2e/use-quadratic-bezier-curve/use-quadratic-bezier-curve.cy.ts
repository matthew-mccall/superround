describe('react: UseQuadraticBezierCurve component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=usequadraticbeziercurve--primary&args=children;distanceFromCorner;controlPointRadians;controlPointRadius;style;className;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to UseQuadraticBezierCurve!');
  });
});

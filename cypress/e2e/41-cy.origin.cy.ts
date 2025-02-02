//It is hard to find a demo website for this functionality
//The website https://mocklab-demo.herokuapp.com/login?type=mock is live at the momment I recorded this video
//Since heroku won't be free anymore, the website may be down in the future.

describe.skip('origin demo - demo website is not working property. You can test it manually.', () => {
  it('Testing a fake login', () => {
    cy.visit('https://mocklab-demo.herokuapp.com/login');
    cy.get('div.demo-box a').click();
    cy.origin('https://oauth.mocklab.io', () => {
      cy.get('[name="email"]').type('test@test.com');
      cy.get('[name="password"]').type('fakePassword');
      cy.get('#login-submit').click();
    });
    cy.get('h1 strong').should('have.text', 'test@test.com');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

// Cypress.on("before:browser:launch", (browser, launchOptions) => {
//   if (browser.name === "chrome") {
//     launchOptions.args.push(
//       "--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process"
//     );
//     launchOptions.args.push(
//       "--load-extension=cypress/extensions/Ignore-X-Frame-headers_v1.1"
//     );
//     return launchOptions;
//   }
// });

// const getIframeBody = () => {
//   // get the iframe > document > body
//   // and retry until the body element is not empty
//   return cy
//   .get('iframe[id="sp_message_iframe_524529"]')
//   .its('0.contentDocument.body').should('not.be.empty')
//   // wraps "body" DOM element to allow
//   // chaining more Cypress commands, like ".find(...)"
//   // https://on.cypress.io/wrap
//   .then(cy.wrap)
// }

describe('Homepage Search', () => {
  it('Returns 5d performance', () => {
    cy.visit('https://www.marketwatch.com/');

    cy.wait(2000);

    //getIframeBody().find('.sp_choice_type_11').should('be.visible').click()
    cy.get('#sp_message_container_524529').then((elem) => {
      const elemHtml = elem.get(0)
      elemHtml.remove()
    });
    cy.get('.j-btn-search').click();
    cy.get('#mw-search').click().type('BTCUSD');
    cy.get('a.j-result-link').first().click();
    cy.get('.c2 > tbody > tr:nth-child(1) > td:nth-child(2)> ul >li').first().should('not.include.text', '-');
  })
})
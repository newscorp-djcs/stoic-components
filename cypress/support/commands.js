import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

const checkViewport = viewport => {
  if (viewport.includes('Landscape')) {
    cy.viewport(viewport, 'landscape');
  } else {
    cy.viewport(viewport);
  }
};

Cypress.Commands.add('visitViewport', (viewport, url) => {
  checkViewport(viewport);
  cy.visit(url);
});

Cypress.Commands.add('takeSnapshot', viewport => {
  checkViewport(viewport);
  cy.matchImageSnapshot(viewport);
});

Cypress.Commands.add('checkA11yWithDefaultRules', () => {
  cy.checkA11y({
    rules: {
      'page-has-heading-one': {enabled: false},
    },
  });
});

Cypress.Commands.add('checkA11yWithCustomRule', customRule => {
  cy.checkA11y({
    rules: {
      [customRule]: {enabled: false},
    },
  });
});

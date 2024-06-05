import { getDomain, tDomain } from '../data/domain'

export function visitAsync(d?:tDomain, urlEnding?: string): Cypress.Chainable<Cypress.AUTWindow> {
	const pageUrl = getDomain(d) + urlEnding
	cy.log(`Opening url - ${pageUrl}`)
	return cy.visit(pageUrl)
}
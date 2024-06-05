export default class Notification {
	block = {
		get:() => cy.get('[data-testid="notification"]'),
		text: {
			get:() => this.block.get().find('p[class*="title"]').invoke('text')
		}
	}
}
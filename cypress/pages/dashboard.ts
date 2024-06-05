export default class Dashboard {
	nav = {
		title: {
			get:() => cy.get('h1[class*="gb-text-text-main"]'),
			text:() => this.nav.title.get().invoke('text')
		}
	}
}
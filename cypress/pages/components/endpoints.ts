export default class Endpoints {
	
	protocol = {
		get:() => cy.get('[data-testid="protocolDropdown"]'),
		input:{
			get:()=> this.protocol.get().find('input[class*="ui_search"]'),
			typeValue:(p: string) => this.protocol.input.get().type(p),
			clear:() => this.protocol.input.get().clear()
		},
		
		dropdown:{
			open:() => this.protocol.get().click(),
			getItems:() => this.protocol.get().find('div[class*="dropdown-item"]'),
			selectItem:(item: tProtocol) => {
				this.protocol.dropdown.getItems()
					.find('p[class*="dropdownListItemText"]')
					.contains(item).click()
			}
		}
	}
	
	network = {
		get:() => cy.get('[data-testid="networkDropdown"]'),
		input:{
			get:()=> this.network.get().find('input[class*="ui_search"]'),
			typeValue:(p: string) => this.network.input.get().type(p),
			clear:() => this.network.input.get().clear()
		},
		dropdown:{
			open:() => this.network.get().click(),
			getItems:() => this.network.get().find('div[class*="dropdown-item"]'),
			selectItem:(item: tNetwork) => {
				this.network.dropdown.getItems()
					.find('p[class*="dropdownListItemText"]')
					.contains(item).click()
			}
		}
	}

	card = {
		list:() => cy.get('div[class*="endpoint-card"]'),
		selectEndpointCard:(item: tProtocol) => {
			this.card.list()
				.find('p[class*="text-base"]')
				.contains(item)
				.click()
		},
		
		getToken:() => {
			let token: string | null
			this.card.list()
				.find('p[class*="gb-bg-surface-additional"]')
				.invoke('text').then(text => {
					token = extractTokenValue(text)
				cy.wrap(token).as('token')
			})
		}
	}
}

type tProtocol =
	| 'Ethereum'
	| 'Bitcoin'

type tNetwork =
	| 'Mainnet'

function extractTokenValue(value: string) {
	const lastIndex = value.lastIndexOf('/');
	if (lastIndex!== -1) {
		return value.substring(lastIndex + 1);
	} else {
		return null;
	}
}
Cypress.Commands.add('getBlock', (m: tMethod, token: string) => {
	const body: tBlock = {
		jsonrpc: '2.0',
		method: m,
		params: [],
		id: "getblock.io"
	}
	return cy.request({
		url: `https://go.getblock.io/${token}`,
		method: 'POST',
		body: body
	}).then(resp => {
		return resp.body
	})
})

type tBlock = {
	jsonrpc: string
	method: tMethod
	params: []
	id: string
}

type tResult = {
	jsonrpc: string,
	id: string,
	result: string
}

type tMethod =
	| 'eth_blockNumber'
import SignInEmail from '../../pages/signInEmail'
import Endpoints from '../../pages/components/endpoints'
import { visitAsync } from '../../utils/tools'
import { Pages } from '../../utils/consts'
import { User } from '../../data/credits'

describe('Using Endpoints', () => {
	
	const signIn = new SignInEmail()
	const endpoints = new Endpoints()
	
	beforeEach(() => {
		visitAsync('account', Pages.singInEmail)
		signIn.form.signIn(User)
	})
	
	it('Check method eth_blockNumber Ethereum', () => {
		endpoints.card.selectEndpointCard('Ethereum')
		endpoints.card.getToken()
		cy.get('@token').then(token => {
			cy.getBlock('eth_blockNumber', token.text()).then(resp => {
				expect(resp.result).eq('0x1318ac3')
			})
		})
	});
})
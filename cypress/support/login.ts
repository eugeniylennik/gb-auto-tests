import { tUserCredits } from '../utils/types'
import SignInEmail from '../pages/signInEmail'

Cypress.Commands.add('login', (user: tUserCredits) => {
	Cypress.log({
		name: `Login As ${user}`,
		message: `Email: ${user.Email}`
	})
	
	const body: tUserSingInRequest = {
		action: 'login',
		params: {
			username: user.Email,
			password: user.Password
		}
	}
	
	cy.request({
		url: `https://${user.Id}.execute-api.eu-central-1.amazonaws.com/basic`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: body
	}).then(resp => {
		cy.log(resp.body)
	})
})

type tUserSingInRequest = {
	action: string
	params: {
		username: string
		password: string
	}
}
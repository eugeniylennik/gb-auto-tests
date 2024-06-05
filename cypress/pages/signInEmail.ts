import { tUserCredits } from '../utils/types'

export default class SignInEmail {
	form = {
		email: {
			get:() => cy.get('[data-testid="emailInput"]'),
			input:{
				get:() => this.form.email.get().find('input[name="email"]'),
				typeValue:(value: string) => this.form.email.input.get().type(value),
				clearInput:() => this.form.email.input.get().clear(),
				getValue:() => this.form.email.input.get().invoke('val')
			},
			err: {
				get:() => this.form.email.get().find('p[class*="inputHintError"]'),
				text:() => this.form.email.err.get().invoke('text')
			}
		},
		password: {
			get:() => cy.get('[data-testid="passwordInput"]'),
			input:{
				get:() => this.form.password.get().find('input[name="password"]'),
				typeValue:(value: string) => this.form.password.input.get().type(value),
				clearInput:() => this.form.password.input.get().clear(),
				getValue:() => this.form.password.input.get().invoke('val')
			},
			err: {
				get:() => this.form.password.get().find('p[class*="inputHintError"]'),
				text:() => this.form.password.err.get().invoke('text')
			}
		},
		btnSignIn: {
			get:() => cy.get('[data-testid="signInButton"]'),
			click:() => this.form.btnSignIn.get().click()
		},
		signIn:(user: tUserCredits) => {
			this.form.email.input.clearInput()
			this.form.email.input.typeValue(user.Email)
			this.form.password.input.clearInput()
			this.form.password.input.typeValue(user.Password)
			return this.form.btnSignIn.click()
		}
	}
}
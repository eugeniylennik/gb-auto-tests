import { visitAsync } from '../../utils/tools'
import { ErrorHint, Pages, Title } from '../../utils/consts'
import SignInEmail from '../../pages/signInEmail'
import Notification from '../../pages/components/notification'
import { User, WrongUser } from '../../data/credits'
import Dashboard from '../../pages/dashboard'

describe('Sign in Email', () => {
	
	const signIn = new SignInEmail()
	const notification = new Notification()
	const dashboard = new Dashboard()
	
	beforeEach(() => {
		visitAsync('account', Pages.singInEmail)
	})
	
	describe('Incorrect email sign-in form', () => {
		
		const incorrectEmails = [
			'email',
			'email@',
			'email@.com',
			'@.com',
			'.',
			'имейл',
			'!#$%^&*()_+'
		]
		
		incorrectEmails.forEach((email) => {
			it('Check email is invalid input error hint', () => {
				signIn.form.email.input.typeValue(email)
				signIn.form.password.input.typeValue('Qwerty12345!')
				signIn.form.btnSignIn.click()
				signIn.form.email.err.text().should('eq', ErrorHint.EmailInvalid)
			})
		})
		
		describe('Empty sign-in form', () => {
			beforeEach(() => {
				signIn.form.btnSignIn.click()
			})
			it('Check email and password is empty input error hint', () => {
				signIn.form.email.err.text().should('eq', ErrorHint.InputIsEmpty)
				signIn.form.password.err.text().should('eq', ErrorHint.InputIsEmpty)
			})
		})
	})
	
	describe('Unsuccessful sign-in', () => {
		beforeEach(() => {
			signIn.form.email.input.typeValue(WrongUser.Email)
			signIn.form.password.input.typeValue(WrongUser.Password)
			signIn.form.btnSignIn.click()
		})
		it('Check alert unsuccessful sign-in ', () => {
			notification.block.text.get().should('eq', ErrorHint.WrongPasswordOrUsername)
		});
	})
	
	describe('Successful sign-in', () => {
		beforeEach(() => {
			signIn.form.email.input.typeValue(User.Email)
			signIn.form.password.input.typeValue(User.Password)
			signIn.form.btnSignIn.click()
		})
		it('Check openning dashboard page after successful sign-in ', () => {
			dashboard.nav.title.text().should('eq', Title.Dashboard)
		});
	})
})
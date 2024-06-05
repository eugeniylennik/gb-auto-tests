import { defineConfig } from "cypress";
import { getDomain } from './cypress/data/domain'

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {},
		viewportWidth: 1620,
		viewportHeight: 1280,
		defaultCommandTimeout: 8000,
		pageLoadTimeout: 8000,
		blockHosts: [
			'*.google.com',
			'*.doubleclick.net',
			'*.ads-twitter.com',
			'*.linkedin.com'
		],
		retries: {
			openMode: 1,
			runMode: 1
		}
	}
});

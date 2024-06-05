export function getDomain(d?: tDomain): string {
	return d ? `https://${d}.getblock.io` : 'https://getblock.io'
}

export type tDomain = |
	'account'
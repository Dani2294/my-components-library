module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				heading: 'var(--font-heading)',
				base: 'var(--font-base)',
				code: 'var(--font-code)',
			},
			colors: {
				'nav-bg': 'var(--color-nav-bg)',
				title: 'var(--color-title)',
				link: 'var(--color-link)',
				'link-active': 'var(--color-link-active)',
				'code-text': 'var(--color-code-text)',
				'btn-text-gray': 'var(--color-btn-text-gray)',

				/* Btns bg */
				default: 'var(--color-bg-default)',
				'default-hover': 'var(--color-bg-default-hover)',
				'light-blue': 'var(--color-bg-light-blue)',
				primary: 'var(--color-bg-primary)',
				'primary-hover': 'var(--color-bg-primary-hover)',
				secondary: 'var(--color-bg-secondary)',
				'secondary-hover': 'var(--color-bg-secondary-hover)',
				danger: 'var(--color-bg-danger)',
				'danger-hover': 'var(--color-bg-danger-hover)',

				/* Inputs */
				'input-text': 'var(--color-input-text)',
				'input-placeholder': 'var(--color-input-placeholder)',
				'input-border-focus': 'var(--color-input-border-focus)',
				'input-border-error': 'var(--color-input-border-error)',
				'input-bg-disabled': 'var(--color-input-bg-disabled)',
			},
			boxShadow: {
				'btn-shadow': '0px 2px 3px rgba(51, 51, 51, 0.2)',
			},
		},
	},
	plugins: [],
};

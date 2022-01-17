import PropTypes from 'prop-types';

const SIZES = ['sm', 'md', 'lg'];

const STYLES = ['default', 'primary', 'secondary', 'danger'];

const VARIANT = ['outline', 'text'];

function Button({
	label = 'Default',
	color = '',
	size = 'md',
	variant = '',
	startIcon = '',
	endIcon = '',
	disableShadow = false,
	disabled = false,
}) {
	const btnVariant = VARIANT.includes(variant) ? `btn--${variant}` : '';
	const btnDisableShadow = disableShadow ? 'btn--disableShadow' : '';
	const btnDisabled = disabled ? true : false;
	const btnIcon = startIcon !== '' || endIcon !== '' ? 'btn--icon' : '';
	const btnColor = STYLES.includes(color) ? `btn--${color}` : 'btn--default';
	const btnSize = SIZES.includes(size) ? `btn--${size}` : 'btn--md';

	return (
		<button
			className={`btn ${btnColor} ${btnSize} ${btnVariant} ${btnDisableShadow} ${
				disabled && variant === 'text'
					? 'btn--disabled-text'
					: disabled
					? 'btn--disabled'
					: ''
			} ${btnIcon}`}
			disabled={btnDisabled}>
			{startIcon !== '' && (
				<span className='material-icons text-base mr-2'>{startIcon}</span>
			)}{' '}
			{label}
			{endIcon && (
				<span className='material-icons text-base ml-2'>{endIcon}</span>
			)}
		</button>
	);
}

export default Button;

Button.propTypes = {
	label: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	variant: PropTypes.oneOf(['outline', 'text']),
	startIcon: PropTypes.string,
	endIcon: PropTypes.string,
	disableShadow: PropTypes.bool,
	disabled: PropTypes.bool,
};

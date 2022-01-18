import PropTypes from 'prop-types';

const SIZES = ['sm', 'md'];

function Input({
	error = false,
	disabled = false,
	helperText = '',
	startIcon = '',
	endIcon = '',
	value = '',
	size = 'md',
	fullWidth = false,
	multiline = false,
	row = '4',
}) {
	const inputDisabled = disabled ? true : false;
	const inputError = error ? 'input--error' : '';
	const inputSize = SIZES.includes(size) ? `input--${size}` : '';
	const inputIcon =
		startIcon !== ''
			? 'input--startIcon'
			: endIcon !== ''
			? 'input--endIcon'
			: '';
	return (
		<div className='group'>
			<label
				htmlFor=''
				className={`block mb-1 text-sm ${
					error ? 'text-input-border-error' : 'text-input-text'
				} group-hover:text-input-text`}>
				Label
			</label>
			{multiline ? (
				<textarea
					value={value}
					rows={row}
					className={`textarea ${fullWidth ? 'w-full' : ''}`}></textarea>
			) : (
				<div className='relative'>
					<input
						defaultValue={value}
						placeholder='Placeholder'
						className={`input ${inputError} ${
							disabled ? 'input--disabled' : ''
						} ${inputSize} ${fullWidth ? 'w-full' : ''} ${inputIcon}`}
						disabled={inputDisabled}
					/>
					{startIcon !== '' ? (
						<span
							className={`material-icons text-input-placeholder absolute left-2 ${
								size === 'sm' ? 'top-2' : 'top-5'
							}`}>
							{startIcon}
						</span>
					) : endIcon !== '' ? (
						<span
							className={`material-icons text-input-placeholder absolute right-2 ${
								size === 'sm' ? 'top-2' : 'top-5'
							}`}>
							{endIcon}
						</span>
					) : null}
				</div>
			)}
			{helperText !== '' && (
				<small
					className={`block mt-1 text-[0.625rem] ${
						error ? 'text-input-border-error' : 'text-input-placeholder'
					} group-hover:text-input-placeholder`}>
					{helperText}
				</small>
			)}
		</div>
	);
}

export default Input;

Input.propTypes = {
	erro: PropTypes.bool,
	disabled: PropTypes.bool,
	helperText: PropTypes.string,
	startIcon: PropTypes.string,
	endIcon: PropTypes.string,
	value: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'md']),
	fullWidth: PropTypes.bool,
	multiline: PropTypes.bool,
	row: PropTypes.string,
};

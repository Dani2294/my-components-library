function Button(props) {
	const {
		hover,
		variant,
		disableShadow,
		disabled,
		startIcon,
		endIcon,
		size,
		color,
		text,
	} = props;

	return (
		<button
			className={`${hover ? 'btn--hover' : 'btn'} ${
				variant === 'outline' && hover
					? 'btn--outline--hover'
					: variant === 'outline'
					? 'btn--outline'
					: ''
			} ${disableShadow && 'btn--disable-shadow'} ${
				disabled && variant === 'text'
					? 'btn--text-disabled'
					: disabled
					? 'btn--disabled'
					: ''
			} ${
				variant === 'text' && hover
					? 'btn--text--hover'
					: variant === 'text'
					? 'btn--text'
					: ''
			} ${startIcon || endIcon ? 'btn--icon' : ''} ${
				size === 'sm'
					? 'btn--sm'
					: size === 'md'
					? 'btn--md'
					: size === 'lg'
					? 'btn--lg'
					: ''
			} ${
				color === 'primary' && hover
					? 'btn--primary-hover'
					: color === 'primary'
					? 'btn--primary'
					: color === 'secondary' && hover
					? 'btn--secondary-hover'
					: color === 'secondary'
					? 'btn--secondary'
					: color === 'danger' && hover
					? 'btn--danger-hover'
					: color === 'danger'
					? 'btn--danger'
					: ''
			}`}>
			{startIcon && (
				<span className='material-icons text-base mr-2'>
					local_grocery_store
				</span>
			)}{' '}
			{text ? text : 'Default'}
			{endIcon && (
				<span className='material-icons text-base ml-2'>
					local_grocery_store
				</span>
			)}
		</button>
	);
}

export default Button;

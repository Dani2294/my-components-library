import Input from '../components/Input';

function Inputs() {
	return (
		<section className='pb-32'>
			<h2 className='font-heading text-2xl text-title mb-7'>Inputs</h2>

			<div className='space-y-11'>
				{/* ====================================== */}
				<div>
					<code className='code-text'>{'<Input />'}</code>
					<Input />
				</div>

				{/* ====================================== */}
				<div>
					<code className='code-text'>{'<Input error />'}</code>
					<Input error />
				</div>

				{/* ====================================== */}
				<div>
					<code className='code-text'>{'<Input disabled />'}</code>
					<Input disabled />
				</div>

				{/* ====================================== */}
				<div className='flex space-x-32'>
					<div>
						<code className='code-text'>
							{'<Input helperText="Some interesting text" />'}
						</code>
						<Input helperText='Some interesting text' />
					</div>
					<div>
						<code className='code-text'>
							{'<Input helperText="Some interesting text" error />'}
						</code>
						<Input helperText='Some interesting text' error />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-60'>
					<div>
						<code className='code-text'>{'<Input startIcon="call" />'}</code>
						<Input startIcon='call' />
					</div>
					<div>
						<code className='code-text'>{'<Input endIcon="lock" />'}</code>
						<Input endIcon='lock' />
					</div>
				</div>

				{/* ====================================== */}
				<div>
					<code className='code-text'>{'<Input value="text" />'}</code>
					<Input value='text' />
				</div>

				{/* ====================================== */}
				<div className='flex space-x-64'>
					<div>
						<code className='code-text'>{'<Input size="sm" />'}</code>
						<Input size='sm' />
					</div>
					<div>
						<code className='code-text'>{'<Input size="md" />'}</code>
						<Input size='md' />
					</div>
				</div>

				{/* ====================================== */}
				<div>
					<code className='code-text'>{'<Input fullWidth />'}</code>
					<Input fullWidth />
				</div>

				{/* ====================================== */}
				<div>
					<code className='code-text'>{'<Input multiline row="4" />'}</code>
					<Input multiline row='4' />
				</div>
			</div>
		</section>
	);
}

export default Inputs;

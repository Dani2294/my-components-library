import Button from '../components/Button';

function Buttons() {
	return (
		<section className='pb-32'>
			<h2 className='font-heading text-2xl text-title mb-7'>Buttons</h2>

			<div className='space-y-11'>
				{/* ====================================== */}
				<div className='flex space-x-44'>
					<div>
						<code className='code-text'>{'<Button />'}</code>
						<Button />
					</div>
					<div>
						<code className='code-text'>{'&:hover, &:focus'}</code>
						<Button />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-14'>
					<div>
						<code className='code-text'>{'<Button variant="outline" />'}</code>
						<Button variant='outline' />
					</div>
					<div>
						<code className='code-text'>{'&:hover, &:focus'}</code>
						<Button variant='outline' />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-20'>
					<div>
						<code className='code-text'>{'<Button variant="text" />'}</code>
						<Button variant='text' />
					</div>
					<div>
						<code className='code-text'>{'&:hover, &:focus'}</code>
						<Button variant='text' />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-20'>
					<div>
						<code className='code-text'>{'<Button disableShadow />'}</code>
						<Button color='primary' disableShadow />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-28'>
					<div>
						<code className='code-text'>{'<Button disabled />'}</code>
						<Button disabled />
					</div>
					<div>
						<code className='code-text'>
							{'<Button variant="text" disabled />'}
						</code>
						<Button disabled variant='text' />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-28'>
					<div>
						<code className='code-text'>
							{'<Button startIcon="add_shopping_car" />'}
						</code>
						<Button color='primary' startIcon='add_shopping_cart' />
					</div>
					<div>
						<code className='code-text'>
							{'<Button endIcon="add_shopping_car" />'}
						</code>
						<Button color='primary' endIcon='add_shopping_cart' />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-20'>
					<div>
						<code className='code-text'>{'<Button size="sm" />'}</code>
						<Button color='primary' size='sm' />
					</div>
					<div>
						<code className='code-text'>{'<Button size="md" />'}</code>
						<Button color='primary' size='md' />
					</div>
					<div>
						<code className='code-text'>{'<Button size="lg" />'}</code>
						<Button color='primary' size='lg' />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-20'>
					<div>
						<code className='code-text'>{'<Button color="default" />'}</code>
						<Button />
					</div>
					<div>
						<code className='code-text'>{'<Button color="primary" />'}</code>
						<Button color='primary' label='Primary' />
					</div>
					<div>
						<code className='code-text'>{'<Button color="secondary" />'}</code>
						<Button color='secondary' label='Secondary' />
					</div>
					<div>
						<code className='code-text'>{'<Button color="danger" />'}</code>
						<Button color='danger' label='Danger' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Buttons;

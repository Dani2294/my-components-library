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
						<Button hover={true} />
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
						<Button hover={true} variant='outline' />
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
						<Button hover={true} variant='text' />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-20'>
					<div>
						<code className='code-text'>{'<Button disableShadow />'}</code>
						<Button disableShadow={true} />
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
							{'<Button startIcon="local_grocery_store" />'}
						</code>
						<Button startIcon='local_grocery_store' />
					</div>
					<div>
						<code className='code-text'>
							{'<Button endIcon="local_grocery_store" />'}
						</code>
						<Button endIcon='local_grocery_store' />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-20'>
					<div>
						<code className='code-text'>{'<Button size="sm" />'}</code>
						<Button size='sm' />
					</div>
					<div>
						<code className='code-text'>{'<Button size="md" />'}</code>
						<Button size='md' />
					</div>
					<div>
						<code className='code-text'>{'<Button size="lg" />'}</code>
						<Button size='lg' />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-20'>
					<div>
						<code className='code-text'>{'<Button color="default" />'}</code>
						<Button color='default' />
					</div>
					<div>
						<code className='code-text'>{'<Button color="primary" />'}</code>
						<Button color='primary' text='Primary' />
					</div>
					<div>
						<code className='code-text'>{'<Button color="secondary" />'}</code>
						<Button color='secondary' text='Secondary' />
					</div>
					<div>
						<code className='code-text'>{'<Button color="danger" />'}</code>
						<Button color='danger' text='Danger' />
					</div>
				</div>

				{/* ====================================== */}
				<div className='flex space-x-[9.5rem]'>
					<div>
						<code className='code-text'>{'&:hover, &:focus'}</code>
						<Button hover={true} color='default' />
					</div>
					<div className='pt-9'>
						<Button hover={true} color='primary' text='Primary' />
					</div>
					<div className='pt-9'>
						<Button hover={true} color='secondary' text='Secondary' />
					</div>
					<div className='pt-9'>
						<Button hover={true} color='danger' text='Danger' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Buttons;

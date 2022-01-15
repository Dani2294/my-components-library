import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav className='fixed top-0 left-0 bottom-0 h-full w-64 pt-11 pb-5 px-14 bg-nav-bg'>
			<h1 className='text-xs text-link-active font-heading font-bold mb-32'>
				<span className='text-[#F7542E]'>Dev</span>challenges.io
			</h1>

			<ul className='flex flex-col space-y-8'>
				<NavLink
					to='/colors'
					className={({ isActive }) =>
						isActive ? 'nav-link text-link-active' : 'nav-link'
					}>
					Colors
				</NavLink>
				<NavLink
					to='/typography'
					className={({ isActive }) =>
						isActive ? 'nav-link text-link-active' : 'nav-link'
					}>
					Typography
				</NavLink>
				<NavLink
					to='/spaces'
					className={({ isActive }) =>
						isActive ? 'nav-link text-link-active' : 'nav-link'
					}>
					Spaces
				</NavLink>
				<NavLink
					to='/buttons'
					className={({ isActive }) =>
						isActive ? 'nav-link text-link-active' : 'nav-link'
					}>
					Buttons
				</NavLink>
				<NavLink
					to='/inputs'
					className={({ isActive }) =>
						isActive ? 'nav-link text-link-active' : 'nav-link'
					}>
					Inputs
				</NavLink>
				<NavLink
					to='/grid'
					className={({ isActive }) =>
						isActive ? 'nav-link text-link-active' : 'nav-link'
					}>
					Grid
				</NavLink>
			</ul>
		</nav>
	);
}

export default NavBar;

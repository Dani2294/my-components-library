import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Buttons from './pages/buttons';
import Inputs from './pages/inputs';

function App() {
	return (
		<>
			<NavBar />
			<main className='ml-64 pl-24 pt-12 pr-4'>
				<Routes>
					<Route path='/buttons' element={<Buttons />} />
					<Route path='/inputs' element={<Inputs />} />
				</Routes>
			</main>
		</>
	);
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Stories from './pages/Stories/Stories';

function App() {
	return (
		<div className='app'>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route
						exact
						path='/stories/:username'
						element={<Stories />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

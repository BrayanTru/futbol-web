import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Contactenos from './components/pages/Contactenos';
import RegisSesion from './components/pages/RegisSesion';
import Nosotros from './components/pages/Nosotros';
import Categorias from './components/pages/Categorias';
import Api from './components/pages/Api'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Inicio />}/>
				<Route exact path="/contactenos" element={<Contactenos />}/>
				<Route exact path="/nosotros" element={<Nosotros />}/>
				<Route exact path="/categorias" element={<Categorias />}/>
				<Route exact path="/regisSesion" element={<RegisSesion />}/>
				<Route exact path="/api" element={<Api />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

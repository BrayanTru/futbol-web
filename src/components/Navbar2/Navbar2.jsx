import React from 'react';
import logo from '../../assets/logo3.jpg';
import './Navbar2.css';

const Navbar2 = () => {
	return (
		<nav className="nav">
			<img className='nav__img' alt="" src={logo} />
			<div className="nav__links">
				<ul>
					<li>
						<a href="/">Inicio</a>
					</li>
					<li>
						<a href="/categorias">Categorias</a>
					</li>
					<li>
						<a href="/nosotros">Nosotros</a>
					</li>
					<li>
						<a href="/contactenos">Contactenos</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar2;

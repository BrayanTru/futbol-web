import React from 'react';
import logo from '../../assets/logo3.jpg';
import './Navbar.css';

const Navbar = () => {
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
					<li>
						<a href="/api">Api</a>
					</li>
				</ul>
			</div>
			<div className="nav__btns">
				<a href="/regisSesion" className="btn1">
					Registrarse
				</a>
				<a href="/regisSesion" className="btn2">
					Iniciar Sesión
				</a>
			</div>
		</nav>
	);
};

export default Navbar;

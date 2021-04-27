import React from 'react';
import {NavLink} from './NavLink';
import icon from '../../images/icon.svg';


 export const Header =() =>(
  <header className="header">
		
		<div className="cont-title-logo">			
			<img src={icon} className="logo"/>			
			<h1 className="title">Codigo Davinci</h1>
		</div>
		<nav>
			<ul>
			<NavLink activeOnlyWhenExact={true} to='/' label='Inicio' />
			<NavLink to='/about' label='Nosotros'/>
			</ul>
		</nav>
		
  </header>
 );
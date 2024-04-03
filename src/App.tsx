import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { NavbarMenu } from './components/NavbarMenu';
import { Profile } from './components/Profile';



function App() {
	return (
		<div className="app-wrapper">
			<Header />

			<main className='page'>
				<div className='page__block'>
					<NavbarMenu />
					<Profile />
				</div>
			</main>
			<footer className=''>footer</footer>
		</div>
	);
}

export default App;

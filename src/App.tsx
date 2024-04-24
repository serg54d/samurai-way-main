import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavbarMenu } from './components/Navbar/NavbarMenu';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';



function App() {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<main className='page'>
					<div className='page__block'>
						<NavbarMenu />
						<Routes>
							<Route path='/dialogs' element={<Dialogs />} />
							<Route path='/profile' element={<Profile />} />
							<Route path='/news' element={<News />} />
							<Route path='/music' element={<Music />} />
							<Route path='/settings' element={<Settings />} />
						</Routes>

					</div>
				</main>
				<footer className=''>footer</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;

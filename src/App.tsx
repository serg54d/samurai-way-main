import React from 'react';
import './App.css';


function App() {
	return (
		<div className="app-wrapper">
			<header className='header'>
				<a className='header__logo logo' href="#">
					<img className='logo__image' src='https://corp.wishpond.com/wp-content/uploads/2016/03/zendesk.png' />
				</a>

			</header>

			<main className='page'>
				<div className='page__block'>
					<nav className='navbar-menu'>
						<ul className='navbar-menu__list'>
							<li className='navbar-menu__item'>Profile</li>
							<li className='navbar-menu__item'>Messages</li>
							<li className='navbar-menu__item'>News</li>
							<li className='navbar-menu__item'>Music</li>
						</ul>
					</nav>
					<div className='profile'>

						<div className='profile__image-block'>
							<img src="https://seleo.gr/wp-content/uploads/2021/04/warsaw.jpg" alt="" />
						</div>
						<div className="profile__about-me">
							<div className="profile__avatar">
								<img src="https://www.sythe.org/data/avatars/m/463/463457.jpg?1447004311" alt="" />
							</div>
							<div className='profile__user user'>
								<h2 className="user__name">Sergey D.</h2>
								<div className='user__info'>
									<p className="user__birthday">
										Date of Birthday: 16 may
									</p>
									<p className="user__city">
										Voronezh
									</p>
									<p className="user__education">
										it-incubator
									</p>
									<p className="user__web-site">
										Web-site: <a href="youtube.com">youtube.com</a>
									</p>
								</div>
								<div className="user__posts posts">
									<h3>My posts</h3>
									<form className='posts__form form-posts' action="">
										<div className='form-posts__text-block'>
											<textarea className='form-posts__text' name="" id="">fafaff</textarea>
										</div>
										<div className='form-posts__btn-block'>
											<button>Send</button>
										</div>

									</form>
									<ul className='posts__list'>
										<li className='posts__item'>
											Lorem ipsum dolor sit amet.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className=''>footer</footer>
		</div>
	);
}

export default App;

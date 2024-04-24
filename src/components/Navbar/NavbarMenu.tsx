import React from 'react';
import s from './NavbarMenu.module.css'

export const NavbarMenu = () => {
	return (
		<nav className={s.navbar}>
			<ul className={s.list}>
				<li className={s.item}>
					<a href="/profile">Profile</a>
				</li>
				<li className={s.item}>
					<a href="/dialogs">Messages</a>
				</li>
				<li className={s.item}>
					<a href="/news">News</a>
				</li>
				<li className={s.item}>
					<a href="/music">Music</a>
				</li>
				<li className={s.item}>
					<a href="/settings">Settings</a>
				</li>
			</ul>
		</nav>
	)
}
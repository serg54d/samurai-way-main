import React from 'react';
import s from './NavbarMenu.module.css'

export const NavbarMenu = () => {
	return (
		<nav className={s.navbar}>
			<ul className={s.list}>
				<li className={s.item}>Profile</li>
				<li className={s.item}>Messages</li>
				<li className={s.item}>News</li>
				<li className={s.item}>Music</li>
			</ul>
		</nav>
	)
}
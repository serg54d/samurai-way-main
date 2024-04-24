import React from 'react';
import s from './NavbarMenu.module.css'
import { NavLink } from 'react-router-dom';


type ActiveClassNameType = {
	activeStyle: string
}



export const NavbarMenu = () => {
	return (
		<nav className={s.navbar}>
			<ul className={s.list}>
				<li className={s.item}>
					<NavLink className={navData => navData.isActive ? s.active : s.item} to="/profile">Profile</NavLink>
				</li>
				<li className={s.item}>
					<NavLink className={navData => navData.isActive ? s.active : s.item} to="/dialogs">Messages</NavLink>
				</li>
				<li className={s.item}>
					<NavLink className={navData => navData.isActive ? s.active : s.item} to="/news">News</NavLink>
				</li>
				<li className={s.item}>
					<NavLink className={navData => navData.isActive ? s.active : s.item} to="/music">Music</NavLink>
				</li>
				<li className={s.item}>
					<NavLink className={navData => navData.isActive ? s.active : s.item} to="/settings">Settings</NavLink>
				</li>
			</ul>
		</nav >
	)
}
import React from 'react';
import s from './Header.module.css';
export const Header = () => {
	return (
		<header className={s.header}>
			<a className={s.logo} href="#">
				<img className={s.image} src='https://corp.wishpond.com/wp-content/uploads/2016/03/zendesk.png' />
			</a>
		</header>
	)
}
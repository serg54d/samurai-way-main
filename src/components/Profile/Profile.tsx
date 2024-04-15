import React from 'react';
import s from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
export const Profile = () => {
	return (
		<div className={s.profile}>

			<div className={s.posterBlock}>
				<img src="https://seleo.gr/wp-content/uploads/2021/04/warsaw.jpg" alt="" />
			</div>
			<div className={s.aboutMe}>
				<div className={s.avatar}>
					<img src="https://cs6.pikabu.ru/avatars/716/v716906-155095666.jpg" alt="" />
				</div>
				<div className={s.user}>
					<h2 className={s.name}>Sergey D.</h2>
					<div className={s.info}>
						<p className={s.birthday}>
							Date of Birthday: 16 may
						</p>
						<p className={s.city}>
							Voronezh
						</p>
						<p className={s.education}>
							it-incubator
						</p>
						<p className={s.webSite}>
							Web-site: <a href="youtube.com">youtube.com</a>
						</p>
					</div>
					<MyPosts />
				</div>
			</div>
		</div >

	)
}
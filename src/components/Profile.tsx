import React from 'react';
import s from './Profile.module.css'
export const Profile = () => {
	return (
		<div className={s.profile}>

			<div className={s.posterBlock}>
				<img src="https://seleo.gr/wp-content/uploads/2021/04/warsaw.jpg" alt="" />
			</div>
			<div className={s.aboutMe}>
				<div className={s.avatar}>
					<img src="https://www.sythe.org/data/avatars/m/463/463457.jpg?1447004311" alt="" />
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
					<div className={s.posts}>
						<h3>My posts</h3>
						<form className={s.formPosts} action="">
							<div className={s.textBlock}>
								<textarea className={s.text} name="" id="">fafaff</textarea>
							</div>
							<div className={s.btnBlock}>
								<button>Send</button>
							</div>

						</form>
						<ul className={s.list}>
							<li className={s.item}>
								Lorem ipsum dolor sit amet.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div >

	)
}
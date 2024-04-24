import React from 'react';
import s from './MyPosts.module.css'
import { Post } from './Post/Post';
export const MyPosts = () => {
	return (
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
				<Post message='Hi, how are you' likeCounts={15} />
				<Post message="It's my first post" likeCounts={20} />
				
			</ul>
		</div>
	)
}
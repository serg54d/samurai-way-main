import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
	message: string;
	likeCounts?: number
}


export const Post = (props: PostPropsType) => {
	return (
		<li className={s.item}>
			<p>{props.message}</p>
			<p className={s.likeCounts}>{props.likeCounts}</p>
		</li>
	)
}
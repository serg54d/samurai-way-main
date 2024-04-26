import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

type DialogItemType = {
	id: string
	name: string
	styles?: string
}

const DialogItem = (props: DialogItemType) => {
	let { id, name } = props
	let path = `/dialogs/${id}`

	return (
		<li className={`${s.dialogsItem} ${props.styles}`}>
			<NavLink to={path}>{name}</NavLink>
		</li>
	)
}

type MessageItemType = {
	message: string

}

const MessageItem = (props: MessageItemType) => {
	let { message } = props
	return (
		<li className={s.messagesItem}>
			{message}
		</li>
	)
}

export const Dialogs = () => {
	return (
		<div className={s.dialogsPage}>
			<h2 className={s.title}>Dialogs</h2>
			<div className={s.wrapper}>
				<div className={s.dialogs}>
					<ul className={s.dialogsList}>
						<DialogItem id="1" name='Serj' />
						<DialogItem id="2" name='Aleks' />
						<DialogItem styles={s.active} id="3" name='Alina' />
						<DialogItem id="4" name='Oleg' />
						<DialogItem id="5" name='Kate' />
					</ul>
				</div>
				<div className={s.messages}>
					<ul className={s.messagesList}>
						<MessageItem message='Message1' />
						<MessageItem message='Message2' />
						<MessageItem message='Message3' />
						<MessageItem message='Message4' />
						<MessageItem message='Message5' />
					</ul>
				</div>

			</div>
		</div>

	)
}
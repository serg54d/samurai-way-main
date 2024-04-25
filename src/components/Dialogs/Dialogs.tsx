import React from 'react';
import s from './Dialogs.module.css'

type DialogsPropsType = {

}

export const Dialogs = (props: DialogsPropsType) => {
	return (
		<div className={s.dialogsPage}>
			<h2 className={s.title}>Dialogs</h2>
			<div className={s.wrapper}>


				<div className={s.dialogs}>

					<ul className={s.dialogsList}>
						<li className={s.dialogsItem}>Serj</li>
						<li className={s.dialogsItem}>Kate</li>
						<li className={s.dialogsItem + ' ' + s.active}>Alina</li>
						<li className={s.dialogsItem}>Aleks</li>
						<li className={s.dialogsItem}>Pablo</li>
					</ul>
				</div>
				<div className={s.messages}>
					<ul className={s.messagesList}>
						<li className={s.messagesItem}>
							message
						</li>
						<li className={s.messagesItem}>
							message
						</li>
						<li className={s.messagesItem}>
							message
						</li>
						<li className={s.messagesItem}>
							message
						</li>
						<li className={s.messagesItem}>
							message
						</li>
					</ul>
				</div>

			</div>
		</div>

	)
}
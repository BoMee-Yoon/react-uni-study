import React, { useContext } from 'react';
import {ACTION_TYPE, DispatchContext} from "./MemberPage";

export default function Member({ member }) {
	const style = {
		cursor: 'pointer',
		backgroundColor: '#f4433640'
	};
	
	const { id, nickname, status } = member;
	const dispatch = useContext(DispatchContext);

	const onToggle = id => {
		dispatch({
			type: ACTION_TYPE.TOGGLE_STATUS,
			id,
		})
	}
	
	const onRemove = id => {
		dispatch({
			type: ACTION_TYPE.REMOVE_MEMBER,
			id,
		})
	}
	
	const getStatusLabel = status => status ? '출석 😻 ' : '결석 🙀 ';
	return (
		<li>
			<span style={style} onClick={() => onToggle(id)}>{ getStatusLabel(status) }</span>
			<span> / 아이디 : { id }</span>
			<span> / 닉네임 : { nickname }</span>
			<button onClick={ () => onRemove(id) } style={{ marginLeft: '10px' }}>삭제</button>
		</li>
	)
}
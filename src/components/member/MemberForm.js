import React, { useContext } from 'react';
import useInputs from "../customhooks/useInputs";
import {ACTION_TYPE, DispatchContext} from "./MemberPage";

export default function MemberForm() {
	const style = {
		visibility: 'hidden'
	};
	
	const dispatch = useContext(DispatchContext);
	
	const defaultInputs = {
		id: '',
		nickname: '',
	}
	const { state: inputs, onChange, onReset } = useInputs(defaultInputs);
	const { id, nickname } = inputs;
	
	const onSubmit = (event) => {
		event.preventDefault();
		if (!id || !nickname) {
			alert('값을 입력하세요');
			throw new Error('empty values');
		}
		
		dispatch({
			type: ACTION_TYPE.CREATE_MEMBER,
			member: {
				id,
				nickname,
				status: false,
			}
		});
		
		onReset();
	};
	
	return (
		<form onSubmit={ onSubmit }>
			<h2>스터디원을 입력하세요</h2>
			<input type="text" placeholder="아이디를 입력하세요" name='id' value={id} onChange={onChange}/>
			<input type="text" placeholder="닉네임을 입력하세요" name='nickname' value={nickname} onChange={onChange}/>
			<input type="submit" style={style} />
		</form>
	)
}
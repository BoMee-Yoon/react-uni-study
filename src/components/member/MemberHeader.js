import React, { useContext, useMemo } from 'react';
import {StateContext} from "./MemberPage";

export default function MemberHeader() {
	const { members } = useContext(StateContext);
	
	/*
	* counter 는 굳이 state 로 관리될 필요가 없을것같아요!
	* members 의 수가 변경되면 그 때 members 의 총 합을 연산해서 사용하면 될 것 같아요
	* 그래서 저는 useMemo 를 사용했습니다.
	* */
	const counter = useMemo(() => members.length, [ members ]);
	
	return (
		<div>
			<h1>출결 확인 합니다!</h1>
			<div>👍 스터디원 총 { counter }명</div>
		</div>
	)
}
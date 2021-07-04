import React, { useContext } from 'react';
import Member from "./Member";
import {StateContext} from "./MemberPage";

export default function MemberList() {
	const {members} = useContext(StateContext);
	
	return <ul>
		{
			members.map(member => (<Member key={member.id} member={ member } />))
		}
	</ul>
}
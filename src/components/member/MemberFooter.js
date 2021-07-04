import React, { useContext, useMemo } from 'react';
import {StateContext} from "./MemberPage";

export default function MemberFooter() {
	const {members} = useContext(StateContext);
	
	const rate = useMemo(() => {
		const activeCount = members.filter(({ status }) => status).length;
		const totalCount = members.length;
		if (!totalCount) return 0;
		return Math.floor((activeCount / totalCount * 100))
	}, [members]);
	
	return (
		<div>
			<span>📈 참석율 : { rate }%</span>
		</div>
	)
}
/*
* hooks 공부하면서 custom hook 도 나오길래 따라해봤습니다!
* input 값을 제어하는 로직이 자주 사용되니 이런 custom hook 으로 만들어 놓으면 좋을 것 같네요!
* */

import { useState } from 'react';

export default function useInputs(initialState) {
	const [ state, setState ] = useState(initialState);
	
	// input 하면 제일 먼저 생각나는 change 이벤트죠!
	const onChange = ({ target: { name, value } }) => {
		const update = (state) => ({ ...state, [name]: value })
		// 여기서는 state 가 어떤 형태로 관리되어야 할지 모르게 때문에
		// 바로 변경값을 주지 않고 update 콜백을 넘겨줍니다.
		setState(update);
	};
	
	const onReset = () => {
		setState(initialState);
	};
	
	/*
	* 내보내는건 어떤 형태로 내보내도 괜찮습니다!
	* useOOO 이니까 [] 형태로 내보내도 좋을 것 같아요!
	* 저는 개인적으로 {} 형태가 편해서 이렇게 내보낼게요!
	* */
	return {
		state,
		onChange,
		onReset,
	}
}

/*
* 이렇게 custom hook 을 만들었습니다.
* 이제 useInputs 만 호출하고 onChange, onReset 함수만 호출하면
* 알아서 상태값을 관리해주니 훨씬 편한 것 같아요!
* custom hook 으로 또 만들 수 있는것을 만들어서 공유하면 좋을 것 같아요!
* */
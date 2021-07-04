import MemberList from "./MemberList";
import MemberForm from "./MemberForm";
import MemberHeader from "./MemberHeader";

export const ACTION_TYPE = {
	CREATE_MEMBER: 'CREATE_MEMBER',
	REMOVE_MEMBER: 'REMOVE_MEMBER',
	TOGGLE_STATUS: 'TOGGLE_STATUS',
};

const initialState = {
	members: [
		{
			id: 'primavera0331',
			nickname: 'bomee',
			status: true,
		},
	],
	isUsable: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPE.CREATE_MEMBER:
			return ({
				members: state.members.concat(action.member)
			})
		case ACTION_TYPE.REMOVE_MEMBER:
			return ({
				members: state.members.filter(({ id }) => id !== action.id)
			})
		case ACTION_TYPE.TOGGLE_STATUS:
			return ({
				...state,
				members: state.members.map(member => member.id === action.id
					? { ...member, status: !member.status }
					: member)
			})
		default:
			throw new Error('plz check the action type')
	}
};

export const StateContext = createContext(null);
export const DispatchContext = createContext(null);

export default function MemberPage() {
	
	const [ state, dispatch ] = useReducer(reducer, initialState);
	
	return (
		<StateContext.Provider value={ state }>
			<DispatchContext.Provider value={ dispatch }>
				<div style={{ margin: '50px' }}>
					<MemberHeader />
					<MemberForm />
					<MemberList />
					<MemberFooter />
				</div>
			</DispatchContext.Provider>
		</StateContext.Provider>
	)
}
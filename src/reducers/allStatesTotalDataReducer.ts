export interface IAllStatesTotalData {
  allStatesTotalData: IStateData[],
  loading: boolean
}

export interface IStateData {
  active?: number;
  recovered?: number;
  deaths?: number;
  confirmed?: number;
  state?: string;
}

export interface IAction {
  type: string,
  payload: any
}

const initialState: IAllStatesTotalData = {
  allStatesTotalData: [],
  loading: false
}

const allStatesDataReducer = (state:IAllStatesTotalData = initialState, action: IAction) => {
  switch (action.type) {
    case 'FETCH_ALLSTATESDATA_SUCCESS':
      // return {...state, allStatesTotalData: [...state.allStatesTotalData, action.payload], loading:true}
      return action.payload
    case 'FETCH_ALLSTATESDATA_FAILURE':
      // return {...state, allStatesTotalData: [...state.allStatesTotalData, action.payload], loading:true}
      return action.payload
    default:
      return state
  }
}
export default allStatesDataReducer
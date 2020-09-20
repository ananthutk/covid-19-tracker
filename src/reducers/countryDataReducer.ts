export interface ICountryData {
  countryData: IData
}

export interface IData {
  active?: number;
  recovered?: number;
  deaths?: number;
  confirmed?: number;
}

export interface IAction {
  type: string,
  payload: any
}

const initialState: ICountryData = {
  countryData: {}
}

const countryDataReducer = (state: ICountryData = initialState, action: IAction) => {
  switch (action.type) {
    case 'FETCH_COUNTRYDATA_SUCCESS':
      return action.payload
    case 'FETCH_COUNTRYDATA_FAILURE':
      return action.payload
    default:
      return state
  }
}
export default countryDataReducer
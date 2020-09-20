import { combineReducers } from 'redux';
import countryDataReducer from './countryDataReducer'
import allStatesDataReducer from './allStatesTotalDataReducer'

const rootReducers = combineReducers({
  countryData: countryDataReducer,
  allStatesTotalData: allStatesDataReducer,
})
export default rootReducers;
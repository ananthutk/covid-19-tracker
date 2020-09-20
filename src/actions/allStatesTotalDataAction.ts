import axios from 'axios'
import { IAllStatesTotalData } from '../reducers/allStatesTotalDataReducer'


export const fetchallStatesTotalDataSuccess = (allStatesTotalData: IAllStatesTotalData[]) => {
  return {
    type: "FETCH_ALLSTATESDATA_SUCCESS",
    payload: allStatesTotalData
  }
}

export const fetchallStatesTotalDataFailure = (error: any) => {
  return {
    type: "FETCH_ALLSTATESDATA_FAILURE",
    payload: error
  }
}

export const fetchallStatesData = () => {
  return (dispatch: any) => {
    console.log('all states data')
    axios.get("https://api.covidindiatracker.com/state_data.json")
      .then((response) => {
        // debugger
        console.log("response all states  ", response.data)
        const data = response.data
        dispatch(fetchallStatesTotalDataSuccess(data))
      })
      .catch((error) => {
        console.log("error all states", error)
        dispatch(fetchallStatesTotalDataFailure(error))
      })
  }
}
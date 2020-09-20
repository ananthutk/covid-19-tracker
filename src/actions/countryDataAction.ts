import axios from 'axios'
import { ICountryData } from '../reducers/countryDataReducer'

export const fetchCountryDataSuccess = (countryData: ICountryData) => {
  return {
    type: "FETCH_COUNTRYDATA_SUCCESS",
    payload: countryData
  }
}

export const fetchCountryDataFailure = (error: any) => {
  return {
    type: "FETCH_COUNTRYDATA_FAILURE",
    payload: error
  }
}

export const fetchCountryData = () => {
  return (dispatch: any) => {
    // console.log('action call')
    axios.get("https://api.covidindiatracker.com/total.json")
      .then((response) => {
        // debugger
        // console.log("response is ", response.data)
        const data:ICountryData = response.data
        dispatch(fetchCountryDataSuccess(data))
      })
      .catch((error) => {
        // console.log("error is", error)
        dispatch(fetchCountryDataFailure(error))
      })
  }
}
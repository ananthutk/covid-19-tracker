import React, { useEffect } from 'react'
// import { Container, Col, Row } from 'react-bootstrap';
// import Card from "react-bootstrap/Card";
import './CountryCaseStatus.css'
import { fetchCountryData } from '../../actions/countryDataAction'
import { useDispatch, useSelector } from 'react-redux'
import { ICountryData } from '../../reducers/countryDataReducer'

function CountryCaseStatus() {

  const dispatch = useDispatch()
  const countryData = useSelector((state: ICountryData) => state.countryData)

  useEffect(() => {
    // console.log('component mounted data', countryData)
    dispatch(fetchCountryData())
  }, [])  



  return (
    <div className={'mainSection'}>
      <div className="subCardDiv">
        <div className="caseTitle">Total Confirmed Cases</div>
        <div className="caseCount">{countryData.confirmed}</div>
      </div>
      <div className="subCardDiv">
        <div className="caseTitle">Active Cases</div>
        <div className="caseCount">{countryData.active}</div>
      </div>
      <div className="subCardDiv">
        <div className="caseTitle">Recovered Cases</div>
        <div className="caseCount">{countryData.recovered}</div>
      </div>
      <div className="subCardDiv">
        <div className="caseTitle">Deaths</div>
        <div className="caseCount">{countryData.deaths}</div>
      </div>
    </div>
  )
}

export default CountryCaseStatus

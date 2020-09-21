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
    <div className="container mainSection">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card subCardDiv confirmed">
            <div className="card-body">
              <div>Total Confirmed Cases</div>
              <div>{countryData.confirmed}</div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card subCardDiv active">
            <div className="card-body">
              <div>Active Cases</div>
              <div>{countryData.active}</div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card subCardDiv">
            <div className="card-body recovered">
              <div>Recovered Cases</div>
              <div>{countryData.recovered}</div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card subCardDiv deaths">
            <div className="card-body">
              <div>Deaths</div>
              <div>{countryData.deaths}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryCaseStatus

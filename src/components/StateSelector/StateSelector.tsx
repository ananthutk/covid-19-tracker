import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CountryCaseStatus from '../CountryCaseStatus/CountryCaseStatus';
import { fetchallStatesData } from '../../actions/allStatesTotalDataAction'
import { IAllStatesTotalData } from '../../reducers/allStatesTotalDataReducer';
import './StateSelector.css'
import * as Plotly from 'plotly.js';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

function StateSelector() {
  const [totalData, setTotalData] = useState({})
  const [currentState, setcurrentState] = useState('')
  const [filteredData, setFilteredData] = useState({})

  const dispatch = useDispatch()
  const { allStatesTotalData, loading } = useSelector<IAllStatesTotalData, IAllStatesTotalData>((state: IAllStatesTotalData) => {
    return {
      allStatesTotalData: state.allStatesTotalData,
      loading: state.loading,
    }
  })

  //Pie Chart

  // const pieData = Object.values(filteredData).map((item: any) => (
  //   item.confirmed
  // ))

  const pieConfirmedtotal = Object.values(filteredData).reduce((t: number, { confirmed }: any) => t + confirmed, 0)
  const pieActive = Object.values(filteredData).reduce((t: number, { active }: any) => t + active, 0)
  const pieRecovered = Object.values(filteredData).reduce((t: number, { recovered }: any) => t + recovered, 0)
  const pieDeaths = Object.values(filteredData).reduce((t: number, { deaths }: any) => t + deaths, 0)
  // console.log('pieData', pieData)
  console.log('pieConfirmedtotal-', pieConfirmedtotal, ',pieActive-', pieActive, ',-pieRecovered-', pieRecovered, '-pieDeaths', pieDeaths)
  debugger
  useEffect(() => {
    var data: any = [{
      values: [pieConfirmedtotal, pieActive, pieRecovered, pieDeaths],
      // value:[123456789,123456789,123456789,123456789],
      labels: ['Total Confirmed Cases', 'Active Cases', 'Recovered Cases', 'Deaths'],
      type: 'pie'
    }];

    var layout = {
      height: 400,
      width: 500
    };

    var bardata = [
      {
        x: ['Total Confirmed Cases', 'Active Cases', 'Recovered Cases', 'Deaths'],
        y: [pieConfirmedtotal, pieActive, pieRecovered, pieDeaths],
        // type: 'a'
      }
    ];

    Plotly.newPlot('pieChart', data, layout);
    Plotly.newPlot('barChart', bardata);
  }, [pieConfirmedtotal])

  //

  useEffect(() => {
    dispatch(fetchallStatesData())
    console.log('allStatesData ', allStatesTotalData)
  }, [])

  useEffect(() => {
    console.log(allStatesTotalData)
    setTotalData(allStatesTotalData)
    setFilteredData(allStatesTotalData)
    console.log('totalData', totalData)
    // debugger

  }, [allStatesTotalData])


  useEffect(() => {
    console.log('totalData after updation', totalData)
    Object.values(totalData).map((item: any) => {
      console.log('kk', item)
    })
  }, [totalData])

  useEffect(() => {
    console.log("current state", currentState)
    const filteredData = Object.values(totalData).filter((item: any) => {
      return (
        item.state == currentState
      )
    })
    setFilteredData(filteredData)
  }, [currentState])

  const setcurrentStateFn = (value: any) => {
    if (value != 0) {
      setcurrentState(value)
    } else {
      setFilteredData(allStatesTotalData)
    }
  }
  const position: any = [20.5937, 78.9629];

  return (
    <div>
      <div>
        <label style={{ padding: '10px' }}>Filter By State</label>

        <select onChange={(e) => setcurrentStateFn(e.target.value)} style={{ width: '85%', padding: '10px' }}>
          <option value={0}>All</option>
          {Object.values(totalData).map((item: any) => {
            return (
              <option key={item.state} value={item.state}>{item.state} - ({item.id})</option>
            );
          })}
        </select>
      </div>
      <div className="mainTableSection">

        <table>
          <tr>
            <th>State</th>
            <th>Total Confirmed Cases</th>
            <th>Active Cases</th>
            <th>Recovered Cases</th>
            <th>Deaths</th>
          </tr>
          {Object.values(filteredData).map((item: any) => (
            <tr>
              <td>{item.state}</td>
              <td>{item.confirmed}</td>
              <td>{item.active}</td>
              <td>{item.recovered}</td>
              <td>{item.deaths}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="pieAndChartSection">
        <div id="pieChart" style={{ width: '600px', height: '500px' }}></div>
        <div id="barChart" style={{ width: '600px', height: '500px' }}></div>
      </div>
      <div className="container">
        <Map center={position} zoom={10}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              <span>State<br /> Count</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    </div>
  )
}



export default StateSelector

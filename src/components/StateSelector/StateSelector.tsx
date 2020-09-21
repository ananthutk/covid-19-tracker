import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchallStatesData } from '../../actions/allStatesTotalDataAction'
import { IAllStatesTotalData } from '../../reducers/allStatesTotalDataReducer';
import './StateSelector.css'
import * as Plotly from 'plotly.js';
import MapView from '../MapView/MapView';

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
  // debugger
  useEffect(() => {
    var data: any = [{
      values: [pieConfirmedtotal, pieActive, pieRecovered, pieDeaths],
      // value:[123456789,123456789,123456789,123456789],
      labels: ['Total Confirmed Cases', 'Active Cases', 'Recovered Cases', 'Deaths'],
      type: 'pie'
    }];

    var layout = {
      height: 400,
      width: 550
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
      <div className="container">
        <label style={{ padding: '10px' }}>Filter By State</label>

        <select onChange={(e) => setcurrentStateFn(e.target.value)} style={{ width: '85%', padding: '10px' }}>
          <option value={0}>All</option>
          {Object.values(totalData).map((item: any) => {
            return (
              <option key={item.state} value={item.state}>{item.state} - ({item.id})</option>
            );
          })}fluid
        </select>
      </div>
      {/* <div className="mainTableSection">

        <table>
          <tr>fluid
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
      </div> */}
      <div className="container">
        <div className="row">
          <div id="pieChart" className="col-sm-12 col-md-6 col-lg-6  " ></div>
          <div id="barChart" className="col-sm-12 col-md-6 col-lg-6  " ></div>
          {/* <div className="col-sm-12 col-md-12 col-lg-4  ">
            <MapView
              filteredData={filteredData}
              pieConfirmedTotal={pieConfirmedtotal}
              pieActive={pieActive}
              pieRecovered={pieRecovered}
              pieDeaths={pieDeaths}
            />
          </div> */}
        </div>
      </div>


      <div className="mainTableSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
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
          </div>

        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <MapView
              filteredData={filteredData}
              pieConfirmedTotal={pieConfirmedtotal}
              pieActive={pieActive}
              pieRecovered={pieRecovered}
              pieDeaths={pieDeaths}
            />
          </div>
        </div>
      </div>

    </div>
  )
}



export default StateSelector

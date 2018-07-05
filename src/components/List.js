import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import Chart from "../components/Chart";
import Map from "../components/Maps";
const { Column } = Table;
export class List extends Component {
  renderItems = cityData => {
    return {
      key: cityData.city.id,
      name: (
        <Map
          lat={cityData.city.coord.lat}
          lon={cityData.city.coord.lon}
          mapTypeId="roadmap"
        />
      ),
      temp: (
        <Chart
          data={cityData.list.map(data => data.main.temp - 273.15)}
          color="blue"
          unit="℃"
        />
      ),
      pressure: (
        <Chart
          data={cityData.list.map(data => data.main.pressure)}
          color="red"
          unit="hPa"
        />
      ),
      humidity: (
        <Chart
          data={cityData.list.map(data => data.main.humidity)}
          color="orange"
          unit="%"
        />
      )
    };
  };
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table
          dataSource={
            !this.props.weather ? [] : this.props.weather.map(this.renderItems)
          }
          pagination={5}
        >
          <Column title="CITY" dataIndex="name" key="name" width={120} />
          <Column title="TEMPERATURE(℃)" dataIndex="temp" key="temp" />
          <Column title="PRESSURE(hPa)" dataIndex="pressure" key="pressure" />
          <Column title="HUMIDITY(%)" dataIndex="humidity" key="humidity" />
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(
  mapStateToProps,
  null
)(List);

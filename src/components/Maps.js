import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
class Maps extends Component {
  componentDidMount() {
    new this.props.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div style={{ width: 250, height: 200 }} ref="map" />;
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyC1r908ngcMbDISD7Xl9iP-ankB7wDUfZ0"
})(Maps);

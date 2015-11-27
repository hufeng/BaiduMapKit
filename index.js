var { PropTypes, requireNativeComponent } = require('react-native');

var iface = {
  name: 'RCTBaiduMap',
  propTypes: {
    mode: PropTypes.number,
    trafficEnabled: PropTypes.bool,
    heatMapEnabled: PropTypes.bool,
    marker:PropTypes.array
  }
}

module.exports = requireNativeComponent('RCTBaiduMap', iface);

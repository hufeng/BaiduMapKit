var { View, PropTypes, requireNativeComponent } = require('react-native');

var iface = {
  name: 'RCTBaiduMap',
  propTypes: {
    ...View.propTypes,
    mode: PropTypes.number,
    trafficEnabled: PropTypes.bool,
    heatMapEnabled: PropTypes.bool,
    marker:PropTypes.array
  }
}

module.exports = requireNativeComponent('RCTBaiduMap', iface);

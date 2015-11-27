'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BaiduMap from 'baidumapkit';


class BaiduMapExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Baidu MapView!
        </Text>
        <BaiduMap
          style={{flex:1}}
          marker={[
            [39.963175, 116.440244],
            [39.903175, 116.490244],
            [39.923175, 116.490244],
            [39.953175, 116.490244]]}
          mode={2} //1. 普通 2.卫星
          trafficEnabled={true} //城市实时交通图
          heatMapEnabled={true} //城市实时交通热力图
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('BaiduMapExample', () => BaiduMapExample);

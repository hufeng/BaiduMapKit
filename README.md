# react-native-baidu-map
百度地图的React-Native版本

## example

```javascript
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

```
## 效果图

![react-native-baidu-map](https://github.com/hufeng/react-native-baidu-map/blob/master/react-native-baidu-map.png
)



## step 1 install
```sh
$ npm install baidumapkit --save
```

## Step 2 - Update Gradle Settings
```gradle
// file: android/settings.gradle
...

include ':baidumapkit',  ':app'
project(':baidumapkit').projectDir = new File(rootProject.projectDir, '../node_modules/baidumapkit')
```

## Step 3 - Update app Gradle Build

```gradle
// file: android/app/build.gradle
...

dependencies {
    ...
    compile project(':baidumapkit')
}
```

## Step 4 - Register React Package
```java
public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {

  private ReactInstanceManager mReactInstanceManager;
  private ReactRootView mReactRootView;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      //初始化百度地图
      SDKInitializer.initialize(getApplicationContext());

      mReactRootView = new ReactRootView(this);
      mReactInstanceManager = ReactInstanceManager.builder()
              .setApplication(getApplication())
              .setBundleAssetName("index.android.bundle")
              .setJSMainModuleName("index.android")
              .addPackage(new MainReactPackage())
              .addPackage(new BaiduMapReactPackage(this)) // <-- Register package here
              .setUseDeveloperSupport(true)
              .setInitialLifecycleState(LifecycleState.RESUMED)
              .build();

      mReactRootView.startReactApplication(mReactInstanceManager, "AwesomeProj", null);
      setContentView(mReactRootView);
  }
```


## update AndroidManifest.xml，填写申请的app的key
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="百度注册的app的name">

    <!--地图要求的权限-->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="com.android.launcher.permission.READ_SETTINGS" />
    <uses-permission android:name="android.permission.WAKE_LOCK"/>
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_SETTINGS" />


    <application
      android:allowBackup="true"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:theme="@style/AppTheme">

        <meta-data
          android:name="com.baidu.lbsapi.API_KEY"
          android:value="App的key" />
    </application>

</manifest>
```


## At last, 祝玩得愉快。我会继续完善功能。

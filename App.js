import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

//redux data..
import { Provider, useDispatch } from 'react-redux';
import { initData } from './src/redux/reducers/coinsDataSlice';
import { coinsApiUrl, cryptoIdsArray2 } from './src/common/defaults';
import { getCoinsData } from './src/common/functions';
import store from './src/redux/store';
import ProfileScreen from './src/screens/ProfileScreen';

//tmp data
//import InitApp from './src/tmp/InitApp';

export default function App() {


  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ backgroundColor: 'transparent', flex: 1 }}>
        {/* <Text>App.js</Text> */}

        <InitAppComponent />

      </SafeAreaView>
    </Provider>
  );
}

const InitAppComponent = () => {
  const dispatch = useDispatch();
  const URL = `${coinsApiUrl}=${cryptoIdsArray2.join(',')}`;

  React.useEffect(() => {
    const loadCoinsData = async (url) => {
      let respond = await getCoinsData(url);
      if (respond && respond !== 'Error') {
        // console.log('dispatching..')
        dispatch(initData(respond));
      }
    }
    loadCoinsData(URL)

  }, []);

  return (


    <ProfileScreen />


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

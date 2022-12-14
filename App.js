import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

//redux data..
import { Provider, useDispatch } from 'react-redux';
import { initData } from './src/redux/reducers/coinsDataSlice';
import { mainURL } from './src/common/defaults';
import { getCoinsData } from './src/common/functions';
import store from './src/redux/store';

import RootNavigation from './src/navigation/RootNavigation';

export default function App() {


  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <InitAppComponent />
    </Provider>
  );
}

const InitAppComponent = () => {
  const dispatch = useDispatch();
  //const URL = `${coinsApiUrl}=${cryptoIdsArray.join(',')}`;

  React.useEffect(() => {
    const loadCoinsData = async (url) => {
      let respond = await getCoinsData(url);
      if (respond && respond !== 'Error') {
        // console.log('dispatching..')
        dispatch(initData(respond));
      }
    }
    loadCoinsData(mainURL)

  }, []);

  return (
    <RootNavigation />
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

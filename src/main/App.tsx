/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as Sentry from '@sentry/react-native';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import Config from 'react-native-config';
import { store } from 'store';
import { theme } from 'config';
import Navigation from 'navigation';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';

!__DEV__ &&
  Sentry.init({
    dsn: Config.SENTRY_DSN,
    tracesSampleRate: 1.0,
  });

const config = {
  // dependencies: {
  //   'linear-gradient': require('react-native-linear-gradient').default,
  // },
};

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider config={config} theme={theme}>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

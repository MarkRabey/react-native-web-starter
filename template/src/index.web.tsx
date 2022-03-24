import React from 'react';
import RootApp from './App';
import {AppRegistry} from 'react-native';

const App = () => {
  return <RootApp />;
};

AppRegistry.registerComponent('ReactNativeWebStarter', () => App);
AppRegistry.runApplication('ReactNativeWebStarter', {
  rootTag: document.getElementById('root'),
});

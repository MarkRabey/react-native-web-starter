import React from 'react';
import {AppRegistry} from 'react-native';
import RootApp from './App';
import {name as appName} from '../app.json';

const App = () => <RootApp />;

AppRegistry.registerComponent(appName, () => RootApp);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});

export default App;

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';

import './config/Reactotron';
import { colors } from './styles';
// import store from './store';

export default class App extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor="transparent" translucent />

        {/* <Provider store={store}> */}
        <Routes />
        {/* </Provider> */}
      </React.Fragment>
    );
  }
}

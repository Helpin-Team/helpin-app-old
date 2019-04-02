import { AsyncStorage } from 'react-native';

import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import { FluidNavigator } from 'react-navigation-fluid-transitions';

import SignIn from './screens/Login/SignIn';
import SignUp from './screens/Login/SignUp';
import ResetPassword from './screens/Login/ResetPassword';
import Splash from './screens/Login/Splash';

import Home from './screens/Home';

import { colors } from './styles';

const Login = createAppContainer(FluidNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ResetPassword: { screen: ResetPassword },
}));

Login.navigationOptions = {
  headerStyle: {
    display: 'none',
  },
};

const Routes = createAppContainer(
  createStackNavigator({
    Splash: { screen: Splash },
    Login: { screen: Login },
    Home: { screen: Home },
  }, {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTintColor: colors.darkTransparent,
    },
  }),
);

export default Routes;

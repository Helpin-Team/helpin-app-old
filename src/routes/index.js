import { AsyncStorage } from 'react-native';

import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

import { FluidNavigator } from 'react-navigation-fluid-transitions';

import SignIn from '../screens/Login/SignIn';
import SignUp from '../screens/Login/SignUp';
import ResetPassword from '../screens/Login/ResetPassword';
import Splash from '../screens/Login/Splash';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

import Forum from '../screens/Forum';
import Posts from '../screens/Forum/Posts';

import { colors } from '../styles';

const Login = createAppContainer(FluidNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ResetPassword: { screen: ResetPassword },
}));

const ForumContainer = createAppContainer(FluidNavigator({
  Forum: { screen: Forum },
  Posts: { screen: Posts },
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
    Settings: { screen: Settings },
    Forum: { screen: ForumContainer },
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

import React from 'react';

import { View, AsyncStorage, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import Logo from '../../../assets/images/logo.png';

const Splash = ({ navigation }) => {
  const handleInitialAuth = async () => {
    const userToken = await AsyncStorage.getItem('@User:id');
    navigation.navigate(userToken ? 'Home' : 'Login');
  };

  return (
    <View>
      <NavigationEvents onDidFocus={handleInitialAuth} />

      <Image source={Logo} width={255} height={55} />
    </View>
  );
};

export default Splash;

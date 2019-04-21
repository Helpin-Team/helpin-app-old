import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';

import Avatar from '../../assets/images/efraim.jpg';

import styles from './styles';

function Settings() {
  useEffect(() => {
    console.tron.log('teste');
  });

  return (
    <View style={styles.Container}>
      <View style={styles.Background}>
        <Image
          source={Avatar}
          blurRadius={1}
          resizeMode="cover"
          style={styles.BackgroundImage}
        />

        <View style={styles.BackgroundOverlay} />
      </View>

      <View style={styles.User}>
        <Image
          source={Avatar}
          resizeMode="cover"
          style={styles.UserAvatar}
        />

        <Text style={styles.UserName}>Efraim Andrade</Text>

        <Text style={styles.UserRole}>Análise e desenvolvimento de sistemas</Text>
      </View>
    </View>
  );
}

Settings.navigationOptions = {
  header: null,
};

export default Settings;

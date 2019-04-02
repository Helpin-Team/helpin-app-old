import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';

const FloatChat = () => (
  <TouchableOpacity style={styles.container}>
    <LinearGradient
      style={styles.wrap}
      colors={[colors.secondary, colors.soft_blue]}
    >
      <Text style={styles.text}>tirar duvidas no chat</Text>

      <View style={styles.info}>
        <Text style={styles.text}>12</Text>

        <View style={styles.status} />
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

export default FloatChat;

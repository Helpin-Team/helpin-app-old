import React from 'react';
import { withNavigation } from 'react-navigation';

import { View, Text } from 'react-native';
import { Avatar } from '..';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Photo from '../../assets/images/efraim.jpg';
import {
  Container, Info, TextName, TextSubtitle, Config,
} from './styles';

function UserInfo({ navigation }) {
  return (
    <Container>
      <Avatar photo={Photo} />

      <Info>
        <TextName>Efraim de Andrade Morais Junior</TextName>
        <TextSubtitle>Analise e desenvolvimento de sistemas</TextSubtitle>
      </Info>

      <Config onPress={() => navigation.navigate('Settings')}>
        <Icon name="settings" size={20} />
      </Config>
    </Container>
  );
}

export default withNavigation(UserInfo);

import React from 'react';

import { View, Text } from 'react-native';
import { Avatar } from '..';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Photo from '../../assets/images/efraim.jpg';
import {
  Container, Info, TextName, TextSubtitle, Config,
} from './styles';

const UserInfo = () => (
  <Container>
    <Avatar photo={Photo} />

    <Info>
      <TextName>Efraim de Andrade Morais Junior</TextName>
      <TextSubtitle>Analise e desenvolvimento de sistemas</TextSubtitle>
    </Info>

    <Config>
      <Icon name="settings" size={20} />
    </Config>
  </Container>
);

export default UserInfo;

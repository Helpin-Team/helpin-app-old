import React from 'react';
import { withNavigation } from 'react-navigation';

import { fonts } from '../../../styles';

import { Container, Title } from './styles';

function Course({ navigation, title, color }) {
  return (
    <Container
      color={color}
      onPress={() => navigation.navigate('Posts', { type: 'help' })}
    >
      <Title
        style={fonts.giant}
      >
        { title }
      </Title>
    </Container>
  );
}

export default withNavigation(Course);

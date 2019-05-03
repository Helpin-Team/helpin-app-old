import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

function Forum() {
  return (
    <Container>
      <Text>Forum</Text>
    </Container>
  );
}

Forum.navigationOptions = {
  header: null,
};

export default Forum;

import React from 'react';

import { fonts } from '../../../styles';

import { Container, Title } from './styles';

function Course({ title, color }) {
  return (
    <Container
      color={color}
      onPress={() => {}}
    >
      <Title
        style={fonts.giant}
      >
        { title }
      </Title>
    </Container>
  );
}

export default Course;

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Container } from './styles';
import { colors } from '../../styles';

function Dissolve() {
  return (
    <Container>
      <LinearGradient
        style={{ flex: 1 }}
        colors={[colors.transparent, colors.darker]}
      />
    </Container>
  );
}

export default Dissolve;

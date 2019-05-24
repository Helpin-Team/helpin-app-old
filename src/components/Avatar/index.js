import React from 'react';

import { Container, AvatarImage } from './styles';

const Avatar = ({ photo }) => (
  <Container>
    <AvatarImage photo={photo} />
  </Container>
);

export default Avatar;

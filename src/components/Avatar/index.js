import React from 'react';

import { View } from 'react-native';

import { Container, AvatarImage, AvatarPlaceholder } from './styles';

const Avatar = ({ photo }) => (
  <Container>
    { photo
      ? <AvatarImage source={photo} />
      : <AvatarPlaceholder>EF</AvatarPlaceholder> }
  </Container>
);

export default Avatar;

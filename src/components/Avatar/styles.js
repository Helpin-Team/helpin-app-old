
import styled from 'styled-components';
import { View, Image } from 'react-native';
import { colors } from '../../styles';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 36;
  height: 36;
  border-radius: 100;

  background: ${colors.lightBlue};
`;

export const AvatarImage = styled.Image`
  width: 36;
  height: 36;
  border-radius: 100;
  resize-mode: cover;
`;

export const AvatarPlaceholder = styled.Text`
  color: ${colors.white};
  font-size: 20;
  font-family: "SegoeUI";
`;

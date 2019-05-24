
import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 36;
  height: 36;
  border-radius: 100;

  background: ${colors.dark};
`;

export const AvatarImage = styled.Image.attrs(props => ({
  source: !props.photo ? require('../../assets/images/default-avatar.jpg') : props.photo,
}))`
  width: 36;
  height: 36;
  border-radius: 100;
  resize-mode: cover;
`;

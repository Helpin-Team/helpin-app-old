import styled from 'styled-components/native';
import { colors } from '../../../styles';

export const Container = styled.TouchableOpacity`
  width: 49%;
  height: 140px;
  border-radius: 6px;
  margin-bottom: 2%;

  align-items: center;
  justify-content: center;

  background-color: ${color => color && colors[color.color]};
`;

export const Title = styled.Text`
  color: ${colors.white};
`;

import styled from 'styled-components/native';
import { colors } from '../../../styles';

import nthChildMarginEven from '../../../functions/nthChild';

export const Container = styled.TouchableOpacity`
  width: 160px;
  height: 140px;
  border-radius: 6px;
  margin-bottom: 10px;
  margin-left: ${even => (!nthChildMarginEven(even) ? '5px' : 0)};
  margin-right: ${even => (!nthChildMarginEven(even) ? '5px' : 0)};

  align-items: center;
  justify-content: center;

  background-color: ${color => color && colors[color.color]};
`;

export const Title = styled.Text`
  color: ${colors.white};
`;

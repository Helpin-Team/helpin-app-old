import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components';
import { metrics, fonts, colors } from '../../styles';


const styles = StyleSheet.create({
  container: {
    height: 35,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: metrics.baseRadius * 10,
  },

  text: {
    color: colors.white,
    textShadowColor: colors.darkMoreTransparent,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});

export const TextCustom = styled.Text`
  font-weight: bold;
  font-family: 'SegoeUI';
  font-size: ${props => props.width};
  text-align: center;
  color: ${colors.light};
`;

export default styles;

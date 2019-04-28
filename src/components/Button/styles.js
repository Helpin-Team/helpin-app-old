import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components';
import { metrics, fonts, colors } from '../../styles';


const styles = StyleSheet.create({
  container: {
    height: 35,
  },

  button: {
    borderRadius: metrics.baseRadius * 10,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: colors.white,
    textShadowRadius: 10,
    textShadowOffset: { width: 0, height: 0 },
    textShadowColor: colors.darkMoreTransparent,
  },
});

export const TextCustom = styled.Text`
  color: ${colors.light};
  text-align: center;
  font-weight: normal;
  font-family: 'SegoeUI';
  font-size: ${props => props.width};
`;

export default styles;

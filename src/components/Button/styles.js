import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { metrics, colors } from '../../styles';


const styles = StyleSheet.create({
  // container: {
  //   height: 35,
  // },

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

export const Container = styled.TouchableOpacity`
  height: 35px;
`;

export const TextCustom = styled.Text`
  color: ${colors.light};
  text-align: center;
  font-weight: normal;
  font-family: 'SegoeUI';
  font-size: ${props => props.width}px;
`;

export default styles;

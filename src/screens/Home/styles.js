import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const styles = {
  Banner: {
    height: metrics.screenHeight / 2.5,
    paddingTop: 20,
    paddingBottom: 40,
  },

  Carousel: {
    marginTop: 40,
  },

  button: {
    height: 70,
    width: metrics.screenWidth / 2.3,
  },
};

export const Container = styled.View`
  flex: 1;

  background: ${colors.darker};
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40;
  paddingHorizontal: 20;
`;

export const Issues = styled.View`

`;

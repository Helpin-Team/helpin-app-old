import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

export const styles = StyleSheet.create({
  status: {
    position: 'absolute',
    left: -4,
    top: (70 / 2) - (42 / 2),

    width: 8,
    height: 42,
    borderRadius: metrics.baseRadius,

    backgroundColor: colors.success,
  },
});

export const Container = styled.TouchableOpacity`
  position: relative;

  width: 100%;
  height: 70;
  margin-top: ${metrics.baseMargin};
  padding-horizontal: ${metrics.basePadding};
  padding-vertical: ${metrics.basePadding / 2};
  border-radius: ${metrics.baseRadius};

  background: ${colors.dark};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${metrics.baseMargin};
  margin-bottom: ${metrics.baseMargin};

  border-bottom-width: 1;
  border-bottom-color: ${colors.white_10};
`;

export const Title = styled.Text`
  ${{ ...fonts.small }}

  width: 80%;

  color: ${colors.light};
`;

export const Date = styled.Text`
  ${{ ...fonts.smaller }}
  color: ${colors.white_30};
  text-align: right;
  font-weight: bold;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Status = styled.Text`
  ${{ ...fonts.smaller }}
  font-style: italic;
  font-weight: 300;
  color: ${colors.light};
`;

export const Course = styled.Text`
  ${{ ...fonts.smaller }}
  color: ${colors.success};
`;

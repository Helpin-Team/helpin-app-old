import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

export const styles = StyleSheet.create({
  ButtonCustom: {
    flex: 1,
  },

  ButtonLeft: {
    marginRight: 4,
  },

  ButtonRight: {
    marginLeft: 4,
  },
});

export const Container = styled.View`
  padding: 0 20px;
  flex: 1;

  background-color: ${colors.darker};
`;

export const Chat = styled.View`
  position: relative;

  height: 40px;
`;

export const Tabs = styled.View`
  flex-direction: row;
  padding-top: 50px;
`;

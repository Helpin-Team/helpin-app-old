import styled from 'styled-components';

import { StyleSheet } from 'react-native';

import { Button as ButtonDefault } from '../../../components';

import { colors, metrics } from '../../../styles';

export const styles = StyleSheet.create({
  button: {
    marginTop: 20,
  },

  withError: {
    borderColor: colors.danger,
  },

  toast: {
    backgroundColor: colors.danger,
  },
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: ${metrics.basePadding * 2};

  background-color: ${colors.darker};
`;

export const Form = styled.View`
  margin-top: ${metrics.baseMargin * 4};
`;

export const Group = styled.View`
  margin-bottom: ${metrics.baseMargin};
`;

export const Button = styled(ButtonDefault)`
  margin-top: 40;
`;

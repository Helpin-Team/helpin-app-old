import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.darker,
  },
  Background: {
    height: 100,
  },
  BackgroundImage: {
    height: 100,
  },
  BackgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: '100%',

    backgroundColor: colors.darkTransparent,
  },
  User: {
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.screenWidth,
  },
  UserAvatar: {
    width: 120,
    height: 120,
    marginTop: -70,
    marginBottom: 5,
    borderRadius: 100,
  },
  UserName: {
    ...fonts.medium,
    color: colors.light,
  },
  UserRole: {
    ...fonts.smaller,
    color: colors.light,
  },
});

export default styles;

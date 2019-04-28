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
    width: metrics.screenWidth,
    marginBottom: metrics.baseMargin * 2,

    alignItems: 'center',
    justifyContent: 'center',
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

  Tabs: {
    marginBottom: metrics.baseMargin * 3,
    paddingHorizontal: metrics.basePadding,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ButtonRight: {
    flex: 1,
    marginLeft: 5,
  },

  ButtonLeft: {
    flex: 1,
    marginRight: 5,
  },

  Form: {
    paddingBottom: metrics.basePadding,
    paddingHorizontal: metrics.basePadding * 2.4,
  },

  Field: {
    marginBottom: metrics.baseMargin,
  },

  Bottom: {
    position: 'relative',
    bottom: 0,

    paddingBottom: metrics.basePadding * 2,
    paddingHorizontal: metrics.basePadding * 2.4,
  },
});

export default styles;

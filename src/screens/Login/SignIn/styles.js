import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding * 2,

    backgroundColor: colors.darker,
  },

  form: {
    marginTop: metrics.baseMargin * 4,
  },

  group: {
    marginBottom: metrics.baseMargin,
  },

  withError: {
    borderColor: colors.danger,
  },

  input: {
    alignSelf: 'stretch',
    height: 33,
    paddingVertical: 0,
    paddingHorizontal: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius * 4,

    fontSize: 12,
    lineHeight: 16,
    backgroundColor: colors.light,
  },

  actions: {
    marginBottom: metrics.baseMargin * 4,
  },

  socialActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  socialBtn: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: metrics.baseMargin,
  },

  facebook: {
    marginRight: metrics.baseMargin * 2,

    backgroundColor: '#3C5A99',
  },

  google: {
    backgroundColor: '#db3236',
  },

  socialIcon: {
    color: colors.white,
  },

  buttons: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 2,
  },

  button: {
    flex: 1,
  },

  firstButton: {
    marginRight: metrics.baseMargin * 2,
  },

  btnText: {
    color: colors.white,
    fontSize: 12,
  },

  wrapUnderline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.baseMargin / 2,
  },

  underlineLink: {

  },

  underlineText: {
    ...fonts.normal,
    lineHeight: 16,
    fontWeight: 'normal',
    textDecorationLine: 'underline',
    color: colors.white_50,
  },

  toast: {
    backgroundColor: colors.danger,
  },
});

export default styles;

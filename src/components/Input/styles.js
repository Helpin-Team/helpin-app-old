import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  default: {
    height: 40,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.transparent,
    paddingVertical: metrics.baseMargin / 2,
    paddingHorizontal: metrics.basePadding / 2,

    ...fonts.medium,
    lineHeight: 21,
    color: colors.light,
    backgroundColor: colors.dark,
  },

  select: {
    height: 40,
    overflow: 'hidden',
  },

  textarea: {
    height: 33 * 6,
    paddingVertical: metrics.basePadding / 2,
  },

  icon: {
    position: 'absolute',
    top: 15,
    right: metrics.basePadding / 2,
  },

  eyeIcon: {
    width: 25,
    height: 12.3,
    resizeMode: 'contain',
  },

  label: {
    marginLeft: metrics.baseMargin,
    marginBottom: metrics.baseMargin / 2,

    ...fonts.regular,
    color: colors.white_30,
    lineHeight: 16,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [
      { translateX: -150 },
      { translateY: 20 },
    ],

  },

  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 40,
    borderRadius: 100,
    paddingHorizontal: metrics.basePadding,
  },

  text: {
    fontFamily: 'SegoeUI',
    fontSize: 12,
    color: colors.light,
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  status: {
    width: 12,
    height: 12,
    marginLeft: metrics.baseMargin / 2,
    borderWidth: 1,
    borderColor: colors.white_10,
    borderRadius: 100,

    backgroundColor: colors.success,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

export const styles = StyleSheet.create({
  item: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: metrics.basePadding / 2,
    height: '80%',
    marginVertical: 'auto',
    borderRadius: metrics.baseRadius,
    marginTop: metrics.basePadding,

    backgroundColor: colors.dark,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: metrics.baseMargin / 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.white_10,
  },

  title: {
    fontSize: 12,
    fontFamily: 'SegoeUI',
    color: colors.light,
  },

  icon: {
    fontSize: 20,
    color: colors.white_30,
  },

  text: {
    alignSelf: 'flex-start',

    ...fonts.small,
    color: colors.white_50,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  author: {
    fontFamily: 'SegoeUI',
    fontSize: 8,
    color: colors.white_30,
  },

  date: {
    fontFamily: 'SegoeUI',
    fontSize: 8,
    color: colors.white_30,
  },
});

import { StyleSheet } from 'react-native';
import colors from './colors';

const textStyle = StyleSheet.create({
  giant: {
    fontFamily: 'SegoeUI',
    fontSize: 36,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: 'left',
  },
  bigger: {
    fontFamily: 'SegoeUI',
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 40,
    letterSpacing: 1.3,
    textAlign: 'left',
  },
  big: {
    fontFamily: 'SegoeUI',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
  medium: {
    fontFamily: 'SegoeUI',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
  normal: {
    fontFamily: 'SegoeUI',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
  },
  small: {
    fontFamily: 'SegoeUI',
    fontSize: 10,
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
  smaller: {
    fontFamily: 'SegoeUI',
    fontSize: 8,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
});

export default textStyle;

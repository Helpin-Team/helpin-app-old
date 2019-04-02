import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.basePadding,
    paddingHorizontal: metrics.basePadding,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    ...fonts.normal,
    fontWeight: 'bold',
    color: colors.light,
  },

  icon: {
    color: colors.lightBlue,
    fontSize: 24,
  },
});

export default styles;

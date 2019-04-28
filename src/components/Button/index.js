import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Text, TouchableOpacity } from 'react-native';
import styles, { TextCustom } from './styles';
import { colors, fonts } from '../../styles';

const getTheme = (color) => {
  const localColors = {
    primary: colors.primaryGradient,
    secondary: colors.secondaryGradient,
    purple: colors.PurpleGradient,
  };

  return localColors[color];
};

const Button = ({
  text, color, onPress, stylesContainer, textSize,
}) => {
  const props = {
    style: styles.button,
    colors: getTheme(color),
    start: { x: 0, y: 5 },
    end: { x: 1, y: 1 },
  };

  return (
    <TouchableOpacity style={[styles.container, stylesContainer]} onPress={onPress}>
      <LinearGradient {...props}>
        <TextCustom style={styles.text} width={textSize}>{text}</TextCustom>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  textSize: PropTypes.number,
  stylesContainer: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
};

Button.defaultProps = {
  stylesContainer: {},
  color: 'primary',
  textSize: 12,
};

export default Button;

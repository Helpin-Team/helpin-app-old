import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { TouchableOpacity } from 'react-native';
import styles, { TextCustom, Container } from './styles';
import { colors } from '../../styles';

const getTheme = (color) => {
  const localColors = {
    primary: colors.primaryGradient,
    secondary: colors.secondaryGradient,
    purple: colors.PurpleGradient,
  };

  return localColors[color];
};

const Button = ({
  text, color, onPress, stylesContainer, textSize, disabled,
}) => {
  const props = {
    style: [styles.button, disabled && { opacity: 0.5 }],
    colors: getTheme(color),
    start: { x: 0, y: 5 },
    end: { x: 1, y: 1 },
  };

  return (
    <Container style={stylesContainer} onPress={onPress}>
      <LinearGradient {...props}>
        <TextCustom
          style={styles.text}
          width={textSize}
        >
          {text}
        </TextCustom>
      </LinearGradient>
    </Container>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  textSize: PropTypes.number,
  disabled: PropTypes.bool,
  stylesContainer: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
};

Button.defaultProps = {
  stylesContainer: {},
  color: 'primary',
  onPress: () => {},
  disabled: false,
  textSize: 12,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Picker, View, TouchableOpacity, Image, Text,
} from 'react-native';

import styles from './styles';
import { colors } from '../../styles';

import eye from '../../assets/images/icons/eye.png';
import eyeOff from '../../assets/images/icons/eye-off.png';

class Input extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    selectItems: PropTypes.arrayOf(PropTypes.string),
    search: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    style: PropTypes.shape(),
    label: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
    selectItems: [],
    search: false,
    placeholder: '',
    style: {},
    label: null,
  }

  state = {
    item: '',
    passwordVisibility: false,
  }

  renderDefault = (props) => {
    const {
      type, search, value, onChangeText, style,
    } = this.props;

    return (
      <View style={styles.container}>
        <TextInputMask
          {...props}
          value={value}
          onChangeText={onChangeText}
          style={[
            styles.default,
            { ...style },
            type === 'textarea' && styles.textarea,
          ]}
        />

        { search && (
          <TouchableOpacity onPress={() => {}} style={styles.icon}>
            <Icon name="search" size={16} />
          </TouchableOpacity>
        ) }

        { type === 'password' && (
          <TouchableOpacity onPress={() => this.passwordVisibility()} style={styles.icon}>
            <Image style={styles.eyeIcon} source={this.state.passwordVisibility ? eye : eyeOff} />
          </TouchableOpacity>
        ) }
      </View>
    );
  }

  renderSelect = () => {
    const { selectItems } = this.props;

    return (
      <View style={[styles.default, styles.select]}>
        <Picker
          selectedValue={this.state.item}
          style={styles.select}
          onValueChange={(itemValue, itemIndex) => this.setState({ item: itemValue })}
        >
          {
          selectItems.map(item => (
            <Picker.Item key={item} style={styles.selectItem} label={item} value={item} />
          ))
        }
        </Picker>
      </View>
    );
  }

  passwordVisibility = () => {
    const { passwordVisibility } = this.state;

    if (passwordVisibility === false) return this.setState({ passwordVisibility: true });

    return this.setState({ passwordVisibility: false });
  }

  render() {
    const {
      placeholder, type, style, label,
    } = this.props;
    const { passwordVisibility } = this.state;

    const props = {
      placeholder,
      style,
      secureTextEntry: type === 'password' && !passwordVisibility && true,
      keyboardType: type === 'email' ? 'email-address' : 'default',
      textContentType: type === 'email' ? 'emailAddress' : 'none',
      mask: type === 'date' ? '[00]/[00]/[0000]' : false,
      multiline: type === 'textarea',
      numberOfLines: type === 'textarea' ? 6 : 1,
      textAlignVertical: type === 'textarea' ? 'top' : 'center',
      autoCapitalize: 'none',
      autoCorrect: false,
      underlineColorAndroid: 'transparent',
      selectionColor: colors.lightBlue,
    };

    return (
      <React.Fragment>
        { label && <Text style={styles.label}>{label}</Text> }
        {
          type !== 'select'
            ? this.renderDefault(props)
            : this.renderSelect()
        }
      </React.Fragment>
    );
  }
}

export default Input;

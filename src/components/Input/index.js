import React from 'react';
import PropTypes from 'prop-types';
import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Picker, View, TouchableOpacity, Image, Text,
} from 'react-native';

import { colors } from '../../styles';
import eye from '../../assets/images/icons/eye.png';
import eyeOff from '../../assets/images/icons/eye-off.png';

import styles from './styles';

class Input extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    search: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    style: PropTypes.shape(),
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    selectItems: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    value: '',
    style: {},
    label: null,
    type: 'text',
    search: false,
    selectItems: [],
    placeholder: '',
    onChangeText: () => {},
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
            <Image 
              style={styles.eyeIcon} 
              source={this.state.passwordVisibility ? eye : eyeOff} 
            />
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
          style={styles.select}
          selectedValue={this.state.item}
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
      style,
      placeholder,
      autoCorrect: false,
      autoCapitalize: 'none',
      multiline: type === 'textarea',
      selectionColor: colors.lightBlue,
      underlineColorAndroid: 'transparent',
      numberOfLines: type === 'textarea' ? 6 : 1,
      mask: type === 'date' ? '[00]/[00]/[0000]' : false,
      textAlignVertical: type === 'textarea' ? 'top' : 'center',
      textContentType: type === 'email' ? 'emailAddress' : 'none',
      keyboardType: type === 'email' ? 'email-address' : 'default',
      secureTextEntry: type === 'password' && !passwordVisibility && true,
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

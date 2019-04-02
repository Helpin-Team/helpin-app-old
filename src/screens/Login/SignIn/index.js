import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';
import Toast from 'react-native-easy-toast';
import { withNavigation } from 'react-navigation';

import { Transition } from 'react-navigation-fluid-transitions';

import {
  View, Text, TouchableOpacity, AsyncStorage,
} from 'react-native';

import { Input, Header, Button } from '../../../components/index';

import styles from './styles';

class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  state = {
    emailInput: '',
    passwordInput: '',
  }

  login = async () => {
    const { passwordInput, emailInput } = this.state;

    try {
      if (!this.validateInputs()) return;

      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(emailInput, passwordInput);

      await this._authenticate(user);

      console.tron.log(user);

      this.props.navigation.navigate('Home');
    } catch (err) {
      this.throwError(err);
    }
  }

  validateInputs = () => {
    const { passwordInput, emailInput } = this.state;

    if (passwordInput === '' || emailInput === '') {
      this.refs.toast.show('Preencha seu email e senha');
      this.setState({ mailError: true, passwordError: true });
      return false;
    }

    if (!this.validateEmail(emailInput)) {
      this.refs.toast.show('Preencha o email corretamente');
      this.setState({ mailError: true });
      return false;
    }

    if (passwordInput.length < 6) {
      this.refs.toast.show('A senha deve conter no minimo 6 caracteres');
      this.setState({ passwordError: true });
      return false;
    }

    return true;
  }

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  _authenticate = async ({ user }) => {
    await AsyncStorage.setItem('@User:id', user.uid);
    await AsyncStorage.setItem('@User:isAuthenticate', 'true');
  }

  throwError = (firebaseResponse) => {
    if (firebaseResponse.code === 'auth/user-not-found') {
      this.refs.toast.show('Usuario nao encontrado');
      this.setState({ mailError: true });

      return false;
    }

    if (firebaseResponse.code === 'auth/wrong-password') {
      this.refs.toast.show('Senha incorreta');
      this.setState({ passwordError: true });

      return false;
    }

    console.tron.log('err', firebaseResponse);

    return this.refs.toast.show('Ocorreu algum erro tente novamente mais tarde');
  }

  render() {
    const {
      emailInput, passwordInput, mailError, passwordError,
    } = this.state;

    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Transition shared="Header" appear="scale">
          <Header />
        </Transition>

        <View style={styles.form}>
          <View style={styles.group}>
            <Input
              label="E-mail"
              type="input"
              style={mailError && styles.withError}
              value={emailInput}
              onChangeText={text => this.setState({ emailInput: text })}
            />
          </View>

          <View style={styles.group}>
            <Input
              label="Senha"
              type="password"
              style={passwordError && styles.withError}
              value={passwordInput}
              onChangeText={text => this.setState({ passwordInput: text })}
            />
          </View>

          <View style={styles.actions}>
            <View style={styles.buttons}>
              <Button
                text="cadastrar"
                color="secondary"
                onPress={() => navigation.navigate('SignUp')}
                stylesContainer={[styles.button, styles.firstButton]}
              />

              <Button
                text="entrar"
                color="primary"
                stylesContainer={styles.button}
                onPress={() => this.login()}
              />
            </View>

            <View style={styles.wrapUnderline}>
              <TouchableOpacity style={styles.underlineLink} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.underlineText}>recuperar senha</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Toast
          style={styles.toast}
          ref="toast"
          fadeOutDuration={2500}
          position="top"
          positionValue={40}
        />
      </View>
    );
  }
}


export default withNavigation(SignIn);

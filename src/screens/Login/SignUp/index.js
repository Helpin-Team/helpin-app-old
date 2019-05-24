import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';
import { Transition } from 'react-navigation-fluid-transitions';
import Toast from 'react-native-easy-toast';

import {
  styles, Container, Form, Group, Button,
} from './styles';

import { Header, Input } from '../../../components';

class SignUp extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  state = {
    emailInput: '',
    passwordInput: '',
  }

  handleSubmit = async () => {
    const { emailInput, passwordInput } = this.state;
    const { navigation } = this.props;

    try {
      if (!this.validateInputs()) return;

      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput, passwordInput);

      if (user) navigation.navigate('SignIn');
    } catch (err) {
      this.throwError(err);
    }
  };

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

  throwError = (firebaseResponse) => {
    if (firebaseResponse.code === 'auth/email-already-in-use') {
      this.refs.toast.show('E-mail já está em uso');
      this.setState({ mailError: true });

      return false;
    }

    return this.refs.toast.show('Ocorreu algum erro tente novamente mais tarde');
  }

  render() {
    const {
      emailInput,
      passwordInput,
      mailError,
      passwordError,
    } = this.state;

    return (
      <Container>
        <Transition shared="Header">
          <Header />
        </Transition>

        <Form>
          <Group>
            <Input
              label="E-mail"
              value={emailInput}
              keyboardType="email-address"
              style={mailError && styles.withError}
              onChangeText={text => this.setState({ emailInput: text })}
            />
          </Group>

          <Group>
            <Input
              label="Senha"
              type="password"
              value={passwordInput}
              style={passwordError && styles.withError}
              onChangeText={text => this.setState({ passwordInput: text })}
            />
          </Group>
        </Form>

        <Button
          text="finalizar cadastro"
          onPress={() => this.handleSubmit()}
          stylesContainer={styles.button}
        />

        <Toast
          style={styles.toast}
          ref="toast"
          fadeOutDuration={2500}
          position="top"
          positionValue={40}
        />
      </Container>
    );
  }
}

export default SignUp;

import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';
import { Transition } from 'react-navigation-fluid-transitions';
import Toast from 'react-native-easy-toast';

import {
  styles, Container, Form, Group, Button,
} from './styles';

import { Header, Input } from '../../../components';

class ResetPassword extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  state = {
    emailInput: '',
  }

  handleSubmit = async () => {
    const { emailInput } = this.state;
    const { navigation } = this.props;

    try {
      if (!this.validateInputs()) return;

      await firebase
        .auth()
        .sendPasswordResetEmail(emailInput);

      navigation.navigate('SignIn');
    } catch (error) {
      this.throwError();
    }
  };

  validateInputs = () => {
    const { emailInput } = this.state;

    if (emailInput === '') {
      this.refs.toast.show('Preencha seu email');
      this.setState({ mailError: true });
      return false;
    }

    if (!this.validateEmail(emailInput)) {
      this.refs.toast.show('Preencha o email corretamente');
      this.setState({ mailError: true });
      return false;
    }

    return true;
  }

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  throwError = () => this.refs.toast.show('Ocorreu algum erro tente novamente mais tarde')

  render() {
    const {
      emailInput,
      mailError,
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
              style={mailError && styles.withError}
              onChangeText={text => this.setState({ emailInput: text })}
            />
          </Group>
        </Form>

        <Button
          text="enviar redifinição"
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

export default ResetPassword;

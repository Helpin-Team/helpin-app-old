import React from 'react';
import { StatusBar } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {
  UserInfo, FloatChat, Button, Issues,
} from '../../components';
import CarouselComponent from './components/Carousel';

import {
  Container, styles, Buttons,
} from './styles';
import { colors } from '../../styles';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <StatusBar backgroundColor={colors.primary} />

        <LinearGradient style={styles.Banner} colors={[colors.primary, colors.lightBlue]}>
          <UserInfo />

          <CarouselComponent customStyles={styles.Carousel} />

          <FloatChat />
        </LinearGradient>

        <Buttons>
          <Button
            onPress={() => {}}
            text="ajudar"
            color="secondary"
            stylesContainer={styles.button}
            textSize={20}
          />

          <Button
            onPress={() => {}}
            text="perguntar"
            stylesContainer={styles.button}
            textSize={20}
          />

        </Buttons>

        <Issues />
      </Container>
    );
  }
}

export default Home;

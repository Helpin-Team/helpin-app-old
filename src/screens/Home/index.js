import React from 'react';
import { StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';

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
    const { navigation } = this.props

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
            onPress={() => navigation.navigate('Forum')}
            textSize={20}
            text="ajudar"
            color="secondary"
            stylesContainer={styles.button}
          />

          <Button
            onPress={() => {}}
            textSize={20}
            text="perguntar"
            stylesContainer={styles.button}
          />

        </Buttons>

        <Issues />
      </Container>
    );
  }
}

export default withNavigation(Home);

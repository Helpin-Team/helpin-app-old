import React from 'react';
import Carousel from 'react-native-snap-carousel';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import { metrics } from '../../../../styles';

class CarouselComponent extends React.Component {
  state = {
    entries: [
      {
        id: Math.random(),
        title: 'Aula de React Native',
        description: 'Nesta aula você irá aprender o basico sobre oque é react native como utilizar e configuração do ambiente de desenvolvimento.',
        author: 'Efraim Andrade',
        date: '07 mar 2019 12:50',
      },
      {
        id: Math.random(),
        title: 'Aula de Monografia',
        description: 'Confira nessa aula as boas práticas na hora de fazer aquela monográfia marota para seu trabalho de graduação',
        author: 'Gabriel Dissotti',
        date: '23 mar 2019 18:50',
      },
      {
        id: Math.random(),
        title: 'Aula de Docker',
        description: 'Não perca a aula de docker e seus containers, e como isso pode te economizar tempo e dinheiro na infraestrutura do seu projeto',
        author: 'Marcos Dissotti',
        date: '10 abr 2019 16:00',
      },
    ],
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.item}>
        <View style={styles.header}>
          <Text style={styles.title}>{ item.title }</Text>

          <TouchableOpacity>
            <Icon name="chevron-right" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.text} numberOfLines={4}>
          { item.description }
        </Text>

        <View style={styles.footer}>
          <Text style={styles.author}>{ item.author }</Text>

          <Text style={styles.date}>{ item.date }</Text>
        </View>
      </View>
    );
  }

  render() {
    const { customStyles } = this.props;

    return (
      <View styles={{ customStyles }}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={metrics.screenWidth}
          itemWidth={metrics.screenWidth / 1.3}
        />
      </View>
    );
  }
}

export default CarouselComponent;

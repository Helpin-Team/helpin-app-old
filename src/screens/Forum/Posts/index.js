import React, { useState } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';

import { FloatChat, Button } from '../../../components';

import { Text } from './styles';
import {
  Container, Chat, Tabs, styles,
} from '../styles';

function Posts({ navigation }) {
  const initialType = navigation.getParam('type');
  const [typeTab, setTypeTab] = useState(initialType);

  return (
    <Container>
      <Transition shared="Header">
        <View>
          <Chat>
            <FloatChat />
          </Chat>

          <Tabs>
            <Button
              text="ajudar"
              color="secondary"
              disabled={typeTab === 'ask'}
              onPress={() => navigation.navigate('Forum', { type: 'help' })}
              stylesContainer={[styles.ButtonCustom, styles.ButtonLeft]}
            />

            <Button
              text="perguntar"
              disabled={typeTab === 'help'}
              onPress={() => navigation.navigate('Forum', { type: 'ask' })}
              stylesContainer={[styles.ButtonCustom, styles.ButtonRight]}
            />
          </Tabs>
        </View>
      </Transition>

      <Text>Posts</Text>
    </Container>
  );
}

export default withNavigation(Posts);

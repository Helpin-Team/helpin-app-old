import React, { useState } from 'react';

import { FloatChat, Button, Courses } from '../../components';

import {
  Container, Chat, Tabs, styles,
} from './styles';

function Forum({ navigation }) {
  const initialType = navigation.getParam('type');
  const [typeTab, setTypeTab] = useState(initialType);

  return (
    <Container>
      <Chat>
        <FloatChat />
      </Chat>

      <Tabs>
        <Button
          text="ajudar"
          color="secondary"
          disabled={typeTab === 'ask'}
          onPress={() => setTypeTab('help')}
          stylesContainer={[styles.ButtonCustom, styles.ButtonLeft]}
        />

        <Button
          text="perguntar"
          disabled={typeTab === 'help'}
          onPress={() => setTypeTab('ask')}
          stylesContainer={[styles.ButtonCustom, styles.ButtonRight]}
        />
      </Tabs>

      { typeTab === 'help' && (<Courses type="help" />) }

      { typeTab === 'ask' && (<Courses type="ask" />) }
    </Container>
  );
}

Forum.navigationOptions = {
  header: null,
};

export default Forum;

import React, { useState } from 'react';

import { FloatChat, Button, Courses } from '../../components';

import {
  Container, Chat, Tabs, styles,
} from './styles';

function Forum() {
  const [typeTab, setTypeTab] = useState('help');

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

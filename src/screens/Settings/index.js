import React, { useState, useEffect } from 'react';
import {
  View, Image, Text, ScrollView,
} from 'react-native';

import { Button, Input, Dissolve } from '../../components';
import Avatar from '../../assets/images/efraim.jpg';

import styles from './styles';

function Settings() {
  useEffect(() => {
    console.tron.log('teste');
  });

  const [activeTab, setActiveTab] = useState(1);

  function changeTab(tab) {
    return setActiveTab(tab);
  }

  function personalData() {
    return (
      <ScrollView contentContainerStyle={styles.Form}>
        <Input
          label="Nome"
          style={styles.Field}
        />

        <Input
          label="E-mail"
          style={styles.Field}
        />

        <Input
          label="Curso"
          style={styles.Field}
        />

        <Input
          label="WhatsApp"
          style={styles.Field}
        />

        <Input
          label="Skype"
          style={styles.Field}
        />
      </ScrollView>
    );
  }

  function myKnowledges() {
    return (
      <ScrollView contentContainerStyle={styles.Form}>
        <Input
          icon="plus"
          label="Titulo"
        />
      </ScrollView>
    );
  }

  return (
    <View style={styles.Container}>
      <View style={styles.Background}>
        <Image
          source={Avatar}
          blurRadius={1}
          resizeMode="cover"
          style={styles.BackgroundImage}
        />

        <View style={styles.BackgroundOverlay} />
      </View>

      <View style={styles.User}>
        <Image
          source={Avatar}
          resizeMode="cover"
          style={styles.UserAvatar}
        />

        <Text style={styles.UserName}>Efraim Andrade</Text>

        <Text style={styles.UserRole}>Análise e desenvolvimento de sistemas</Text>
      </View>

      <View style={styles.Tabs}>
        <Button
          text="dados pessoais"
          onPress={() => changeTab(1)}
          disabled={activeTab !== 1 && true}
          stylesContainer={styles.ButtonLeft}
        />

        <Button
          color="secondary"
          text="meus conhecimentos"
          onPress={() => changeTab(2)}
          disabled={activeTab !== 2 && true}
          stylesContainer={styles.ButtonRight}
        />
      </View>

      { activeTab === 1 ? personalData() : myKnowledges() }

      <View style={styles.Bottom}>
        <Dissolve />

        <Button
          text="Salvar"
        />
      </View>
    </View>
  );
}

Settings.navigationOptions = {
  header: null,
};

export default Settings;

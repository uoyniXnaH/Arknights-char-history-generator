import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { ShareStyles } from './src/resources/ShareStyles';
import Texts from './src/resources/Texts.json';
import MembersColumn from './src/MembersColumn';
import MainScreen from './src/MainScreen';
import SelfColumn from './src/SelfColumn';

export default function App() {
  const [lang, setLang] = useState<string>("sc");
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[ShareStyles.font_24, ShareStyles.fw_500, {color: 'white'}]}>
          {Texts[`title_${lang}`]}
        </Text>
      </View>
      <View style={styles.main}>
        <MembersColumn />
        <MainScreen />
        <SelfColumn />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#666'
  },
  titleContainer: {
    width: 740,
    height: 80,
    justifyContent: 'center',
    paddingLeft: 18,
    backgroundColor: '#142f43'
  },
  main: {
    flexDirection: 'row',
    width: '100%',
    height: hp('100%')-80,
    justifyContent: 'center'
  },
});
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MembersColumn from './src/MembersColumn';
import MainScreen from './src/MainScreen';
import SelfColumn from './src/SelfColumn';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>明日方舟聊天记录生成器</Text>
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
    backgroundColor: '#333'
  },
  titleContainer: {
    width: 740,
    height: 60,
    justifyContent: 'center',
    paddingLeft: 18,
    backgroundColor: '#00f123'
  },
  main: {
    flexDirection: 'row',
    width: '100%',
    height: hp('100%')-60,
    justifyContent: 'center'
  },
});
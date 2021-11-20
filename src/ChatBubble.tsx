import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';

import { ShareStyles } from './resources/ShareStyles';
import Texts from './resources/Texts.json';
import Names from './resources/Names.json';
import { Images } from './resources/img/Images';
import { Characters } from './resources/characters/Characters';

function ChatBubble() {
  const [message, setMessage] = useState<string>("");
  const [inputHeight, setInputHeight] = useState<number>(0);
  const [isSelfSpk, setIsSelfSpk] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({

});


export default ChatBubble;
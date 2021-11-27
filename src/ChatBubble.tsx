import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, TextInputContentSizeChangeEventData, NativeSyntheticEvent} from 'react-native';

import { ShareStyles } from './resources/ShareStyles';
import Texts from './resources/Texts.json';
import Names from './resources/Names.json';
import { Images } from './resources/img/Images';
import { Characters } from './resources/characters/Characters';

function ChatBubble(prop: {portrait: any, name: string, text: string, isHero: boolean}) {
  const [message, setMessage] = useState<string>(prop.text);
  const [isSelfSpk, setIsSelfSpk] = useState<boolean>(true);

  return (
    <View style={[styles.container, prop.isHero ? styles.fEnd : styles.fStart]}>
    {!prop.isHero && <View style={styles.portraitContainer}>
        <Image style={styles.portrait} source={prop.portrait} />
        <Image
          style={[
            styles.bubbleArrow,
            prop.isHero ? styles.arrowGreen : styles.arrowDark
          ]}
          source={Images.bubble_arrow}
        />
      </View>}
      <View style={styles.textContainer}>
        {!prop.isHero && <Text style={[styles.name, ShareStyles.font_12]}>{prop.name}</Text>}
        {/* <Text style={[styles.msgBox, ShareStyles.font_20]}>{message}</Text> */}
        <View style={[styles.msgBox, prop.isHero ? styles.bgGreen : styles.bgDark]}>
          <View>
            <Text style={[ShareStyles.font_18, prop.isHero ? styles.txtBlack : styles.txtWhite]}>
              {message}&#8203;
            </Text>
            <TextInput
                style={[ShareStyles.font_18, styles.msgInput, prop.isHero ? styles.txtBlack : styles.txtWhite]}
                placeholder={''}
                onChangeText={text => setMessage(text)}
                value={message}
                multiline={true}
                numberOfLines={1}
              />
            </View>
          </View>
      </View>
      {prop.isHero && <View style={styles.portraitContainer}>
        <Image
          style={[
            styles.bubbleArrow,
            ShareStyles.flipX,
            prop.isHero ? styles.arrowGreen : styles.arrowDark
          ]}
          source={Images.bubble_arrow}
        />
        <Image style={styles.portrait} source={prop.portrait} />
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  fStart: {
    justifyContent: 'flex-start'
  },
  fEnd: {
    justifyContent: 'flex-end'
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    maxWidth: '70%'
  },
  name: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 2
  },
  msgBox: {
    borderRadius: 8,
    paddingTop: 17,
    paddingBottom: 19,
    paddingHorizontal: 20,
    minWidth: 46
  },
  bgGreen: {
    backgroundColor: "#81b214"
  },
  bgDark: {
    backgroundColor: "#3c373e"
  },
  msgInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  txtWhite: {
    color: 'white'
  },
  txtBlack: {
    color: 'black'
  },
  portraitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  bubbleArrow: {
    width: 5,
    height: 10
  },
  arrowGreen: {
    tintColor: "#81b214"
  },
  arrowDark: {
    tintColor: "#3c373e"
  },
  portrait: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#b4c6a6',
    marginHorizontal: 12
  }
});


export default ChatBubble;
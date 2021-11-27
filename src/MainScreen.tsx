import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { ShareStyles } from './resources/ShareStyles';
import Texts from './resources/Texts.json';
import Names from './resources/Names.json';
import { Images } from './resources/img/Images';
import { Characters } from './resources/characters/Characters';
import ChatBubble from './ChatBubble';

function MainScreen() {
  const [groupName, setGroupName] = useState<string>(Texts.sample_group_sc);
  const [message, setMessage] = useState<string>("");
  const [inputHeight, setInputHeight] = useState<number>(0);
  const [isSelfSpk, setIsSelfSpk] = useState<boolean>(true);
  const [hero, setHero] = useState<any>(Characters.npc_doctor);
  const [heroine, setHeroine] = useState<any>(Characters.char_002_amiya);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContents}>
          <Image style={styles.headerBtn} source={Images.chevron_left} />
        </View>
        <TextInput
          style={[ShareStyles.font_16, styles.groupEdit]}
          placeholder={Texts.change_group_sc}
          onChangeText={text => setGroupName(text)}
          value={groupName}
          maxLength={20}
        />
        <View style={styles.headerContents}>
          <Image style={styles.headerBtn} source={Images.more_horiz} />
        </View>
      </View>

      <View style={styles.msgContainer}>
        <ChatBubble
          portrait={Characters.npc_doctor}
          name={Names.npc_doctor_sc}
          text={"@铃兰"}
          isHero={true}
        />
        <ChatBubble
          portrait={Characters.char_358_lisa}
          name={Names.char_358_lisa_sc}
          text={"@Ash"}
          isHero={false}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Image style={styles.footerBtn} source={Images.mic} />
        </TouchableOpacity>
        <View style={styles.footerMsgBox}>
          <TextInput
            style={[ShareStyles.font_16, styles.txtInput, {height:inputHeight}]}
            placeholder={''}
            onChangeText={text => setMessage(text)}
            value={message}
            multiline={true}
            numberOfLines={1}
            onContentSizeChange={(event) => setInputHeight(event.nativeEvent.contentSize.height)}
          />
        </View>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Image style={styles.footerBtn} source={Images.emoji_emotions} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Image style={styles.footerBtn} source={Images.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Image style={styles.footerBtn} source={Images.send} />
        </TouchableOpacity>
      </View>

      <View style={styles.status}>
        <View style={styles.subjectContainer}>
          <TouchableOpacity style={styles.footerIconContainer}>
            <Image style={styles.portrait} source={heroine} />
          </TouchableOpacity>
            <TouchableOpacity style={styles.footerIconContainer} onPress={() => setIsSelfSpk(false)}>
            <Image
              style={[styles.statusBtn, {tintColor: isSelfSpk ? '#555' : '#81b214'}]}
              source={Images.comment_dots}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.subjectContainer}>
          <TouchableOpacity style={styles.footerIconContainer} onPress={() => setIsSelfSpk(true)}>
            <Image
              style={[styles.statusBtn, ShareStyles.flipX, {tintColor: isSelfSpk ? '#81b214' : '#555'}]}
              source={Images.comment_dots}
            />
          </TouchableOpacity>
            <TouchableOpacity style={styles.footerIconContainer}>
            <Image style={styles.portrait} source={hero} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



const msgStyles = StyleSheet.create({
  heroContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  msgBox: {
    maxWidth: '80%',
    paddingHorizontal: 8,
    backgroundColor: '#81b214',
    borderRadius: 8
  },
});

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: '100%',
    backgroundColor: '#1d2024'
  },
  header: {
    width: '100%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)'
  },
  headerContents: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  headerBtn: {
    width: 24,
    height: 24,
    tintColor: 'white'
  },
  groupEdit: {
    width: '70%',
    color: 'white',
    textAlign: 'center'
  },
  msgContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: hp('100%') - 241,
    overflow: 'visible',
  },
  footer: {
    position: 'absolute',
    bottom: 80,
    paddingHorizontal: 8,
    paddingVertical: 5,
    width: '100%',
    // height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2c272e',
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)'
  },
  footerIconContainer: {
    // flex: 1,
    height: '100%',
    justifyContent: 'center'
  },
  footerBtn: {
    width: 30,
    height: 30,
    tintColor: 'white'
  },
  footerMsgBox: {
    // flex: 5,
    width: '60%',
    height: '100%',
    justifyContent: 'center'
  },
  txtInput: {
    padding: 6,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#3c373e'
  },
  status: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 8,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#142f43',
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)'
  },
  subjectContainer: {
    width: '28%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portrait: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#b4c6a6'
  },
  statusBtn: {
    width: 36,
    height: 36
  },
  editContainer: {
    width: '80%',
    maxWidth: 300,
    // height: 140,
    paddingVertical: 20,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  editContents: {
    marginVertical: 5
  },
  groupNameInput: {
    width: '80%',
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)'
  }
});


export default MainScreen;
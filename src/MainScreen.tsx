import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';

import { ShareStyles } from './resources/ShareStyles';
import Texts from './resources/Texts.json';
import { Images } from './resources/img/Images';

function MainScreen() {
  const [showEditGroupName, setShowEditGroupName] = useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>(Texts.sample_group_sc);
  const [message, setMessage] = useState<string>("");
  const [inputHeight, setInputHeight] = useState<string | number | undefined>(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContents}>
          <Image style={styles.headerBtn} source={Images.chevron_left} />
        </View>
        <TouchableOpacity style={styles.headerContents} onPress={() => setShowEditGroupName(true)}>
          <Text style={[ShareStyles.font_16, {color: 'white'}]}>{groupName}</Text>
        </TouchableOpacity>
        <View style={styles.headerContents}>
          <Image style={styles.headerBtn} source={Images.more_horiz} />
        </View>
      </View>
      <View style={styles.msgContainer}>

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
      <Modal
        transparent={true}
        animationType={'fade'}
        visible={showEditGroupName}
      >
        <TouchableWithoutFeedback onPressIn={() => setShowEditGroupName(false)}>
          <View style={ShareStyles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.editContainer}>
                <TextInput
                  style={[ShareStyles.font_16, styles.groupNameInput]}
                  placeholder={Texts.change_group_sc}
                  onChangeText={text => setGroupName(text)}
                  value={groupName}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

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
  msgContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 48
  },
  footer: {
    position: 'absolute',
    bottom: 0,
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
  editContainer: {
    width: '15%',
    minWidth: 200,
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
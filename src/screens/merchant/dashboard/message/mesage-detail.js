import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  TextInput as MessageInput,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EmojiPicker from 'rn-emoji-keyboard';
import {
  COLOUR_DARK_GREEN,
  COLOUR_GHOST_WHITE,
  COLOUR_SECONDARY_GREY,
  FONT_FAMILY_BODY_THIN,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import MessageDetailHeader from './components/message-detail-header';
import MessageDetailItems from './components/message-detail-items';

const MemoizedEmojiPicker = React.memo(EmojiPicker);

export default function MessageDetailScreen() {
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [data, setData] = React.useState('');
  const messageInputRef = React.useRef();
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const handleEmojiPicker = () => {
    setIsOpen(true);
  };

  const handleOnchange = value => {
    console.log(value, 'valueee');
    setMessage(value);
  };

  const handleEmojiSelected = value => {
    console.log(value, 'valueee');
    messageInputRef.current?.focus();
    setMessage(message + value.emoji);
  };

  const onSubmitMessage = () => {
    setData(message);
    setMessage('');
  };

  return (
    <View style={styles.mainContainer}>
      <MessageDetailHeader />

      <View
        style={[
          styles.contentContainer,
          {
            width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
            flex: 1,
          },
        ]}>
        <MessageDetailItems data={data} />
        <View style={styles.messageInputContainer}>
          <View style={styles.messageSearchContainer}>
            <TouchableOpacity
              style={{marginLeft: 10, marginRight: 3}}
              onPress={handleEmojiPicker}>
              <Entypo
                name="emoji-neutral"
                size={16.67}
                color={COLOUR_DARK_GREEN}
              />
            </TouchableOpacity>
            <MessageInput
              style={styles.textInput}
              cursorColor={COLOUR_SECONDARY_GREY}
              placeholder="Type your message"
              onChangeText={handleOnchange}
              defaultValue={message}
              placeholderTextColor="#929090"
              ref={messageInputRef}
            />
          </View>
          <TouchableOpacity style={styles.sendView} onPress={onSubmitMessage}>
            <Feather name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <MemoizedEmojiPicker
          onEmojiSelected={handleEmojiSelected}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          enableRecentlyUsed
          enableSearchBar
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: COLOUR_GHOST_WHITE},
  contentContainer: {
    alignSelf: 'center',
    marginTop: 25,
  },
  messageSearchContainer: {
    width: '83%',
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: COLOUR_DARK_GREEN,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    height: 46,
    marginRight: 15,
  },
  textInput: {
    width: '83%',
    fontFamily: FONT_FAMILY_BODY_THIN,
    fontSize: 12,
    lineHeight: 14.06,
    fontWeight: 'bold',
    color: 'grey',
  },
  sendView: {
    height: 46,
    width: 46,
    backgroundColor: COLOUR_DARK_GREEN,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    width: '100%',
  },
});

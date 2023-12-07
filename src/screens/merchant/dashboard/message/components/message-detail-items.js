import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  COLOUR_DARK_GREEN,
  COLOUR_GREEN,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
} from '../../../../../constants/Styles';
export default function MessageDetailItems({data}) {
  const navigation = useNavigation();

  return (
    <>
      <View style={{alignSelf: 'flex-start'}}>
        <View style={styles.senderMessageBox}>
          <Text style={styles.senderText}>
            Hi boss, want to confirm if you are available now
          </Text>
        </View>
        <Text style={styles.messageTime}>12:30 pm</Text>
      </View>

      <View style={{alignSelf: 'flex-end', marginTop: 20}}>
        <View style={styles.receiverMessageBox}>
          <Text style={styles.receiverText}>
            {data ? data : 'Alright boss'}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.messageTime, {alignSelf: 'flex-end', right: 3}]}>
            12:30 pm
          </Text>
          <Ionicons
            name="checkmark-done-sharp"
            size={10}
            color={COLOUR_TERRACOTTA}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  senderMessageBox: {
    maxWidth: 218.34,
    minHeight: 25,
    padding: 5,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: '#F5F9F5',
    borderColor: COLOUR_GREEN,
  },
  receiverMessageBox: {
    maxWidth: 218.34,
    minHeight: 25,
    padding: 5,
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    transform: [{rotate: '180deg'}],
    backgroundColor: COLOUR_DARK_GREEN,
    borderColor: COLOUR_DARK_GREEN,
  },
  senderText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: COLOUR_DARK_GREEN,
  },
  receiverText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '400',
    color: '#FFFFFF',
    transform: [{rotate: '180deg'}],
  },
  messageTime: {
    fontSize: 10,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: FONT_FAMILY_BODY,
    color: '#929090',
  },
});

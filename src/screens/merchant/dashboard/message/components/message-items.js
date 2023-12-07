import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Badge} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_SIZE_MID,
} from '../../../../../constants/Styles';
const MessageItems = ({isRead}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.notificationItemsContainer}>
      <View style={styles.notificationItemsTitleContainer}>
        <View style={styles.notificationLeftIconTitleContainer}>
          <View style={{marginRight: 8}}>
            <View style={styles.userIcon}>
              <Feather name="user" size={25} color={COLOUR_DARK_GREEN} />
            </View>
          </View>
          <Text style={styles.notificationItemsTitleText}>Donald Trump</Text>
        </View>
        <Text style={styles.notificationItemsTime}>12:30 pm</Text>
      </View>
      <TouchableOpacity
        style={styles.notificationItemsDescContainer}
        onPress={() => navigation.navigate('MessageDetail')}>
        <Text
          style={[
            styles.notificationItemsDescText,
            {color: !isRead ? 'black' : 'grey'},
          ]}
          ellipsizeMode="tail"
          numberOfLines={2}>
          James Faviola is available for a hair cut...Kindly view to approve
          schedule right now.
        </Text>

        {!isRead && (
          <Badge style={{backgroundColor: COLOUR_TERRACOTTA}}>1</Badge>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItemsContainer: {
    marginBottom: 10,
  },
  notificationItemsTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationLeftIconStepTwoDesign: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: COLOUR_DARK_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationLeftIconStepOneDesign: {
    height: 18.5,
    width: 18.5,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationItemsTitleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    fontSize: FONT_SIZE_MID,
    lineHeight: 20,
    color: '#0C0C0C',
  },
  notificationItemsTime: {
    color: 'grey',
    fontFamily: FONT_FAMILY_BODY,
    lineHeight: 20,
    fontWeight: '400',
    fontSize: 12,
  },
  notificationItemsDescContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  notificationItemsDescText: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: FONT_FAMILY_BODY,
    maxWidth: 300,
    left: 50,
  },
  notificationViewDetailText: {
    lineHeight: 14,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: FONT_FAMILY_BODY,
    color: 'white',
  },
  notificationLeftIconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: COLOUR_SECONDARY_GREY,
    marginRight: 5,
    height: 39,
    width: 39,
    alignItems: 'center',
    top: 10,
  },
});

export default MessageItems;

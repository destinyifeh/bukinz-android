import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_SIZE_MID,
} from '../../../../../constants/Styles';

const NotificationItems = ({available, reschedule, canceled}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.notificationItemsContainer}>
      <View style={styles.notificationItemsTitleContainer}>
        <View style={styles.notificationLeftIconTitleContainer}>
          <View style={{marginRight: 18}}>
            <View style={styles.notificationLeftIconStepTwoDesign}>
              <View style={styles.notificationLeftIconStepOneDesign}>
                <Feather name="box" size={16} color={COLOUR_DARK_GREEN} />
              </View>
            </View>
          </View>
          <Text
            style={[
              styles.notificationItemsTitleText,
              {
                color: available
                  ? 'black'
                  : reschedule
                  ? 'grey'
                  : canceled
                  ? '#D70909'
                  : 'black',
              },
            ]}>
            {available
              ? 'Clent available'
              : reschedule
              ? 'Appointment reschedule notice'
              : canceled
              ? 'Appointment Canceled'
              : 'Client available'}
          </Text>
        </View>
        <Text style={styles.notificationItemsTime}>12:30 pm</Text>
      </View>
      <View style={styles.notificationItemsDescContainer}>
        <Text
          style={styles.notificationItemsDescText}
          ellipsizeMode="tail"
          numberOfLines={2}>
          James Faviola is available for a hair cut...Kindly view to approve
          schedule right now.
        </Text>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('NotificationDetail')}>
          <Text style={styles.notificationViewDetailText}>View Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItemsContainer: {
    marginTop: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    paddingVertical: 20,
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
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '500',
    fontSize: FONT_SIZE_MID,
    lineHeight: 20,
    color: COLOUR_BLACK,
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
    top: 3,
    flexWrap: 'wrap',
  },
  notificationItemsDescText: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: FONT_FAMILY_BODY,
    maxWidth: 300,
    left: 43,
  },
  notificationViewDetailText: {
    lineHeight: 14,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: FONT_FAMILY_BODY,
    color: COLOUR_TERRACOTTA,
  },
  notificationLeftIconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NotificationItems;

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import notificationIcon from '../../../../assets/icons/notification-icon.png';
import notificationListIcon from '../../../../assets/icons/notificationListIcon.png';

import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_SIZE_MID,
} from '../../../../constants/Styles';
const CustomerNotificationItems = ({reminder, approved, canceled}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.notificationItemsContainer,
        {borderBottomWidth: approved ? 0 : 0.5},
      ]}>
      <View style={styles.notificationItemsTitleContainer}>
        <View style={styles.notificationLeftIconTitleContainer}>
          <View style={{marginRight: 18}}>
            {approved && (
              //   <View style={styles.notificationLeftIconStepTwoDesign}>
              //     <View style={styles.notificationLeftIconStepOneDesign}>
              //       <Feather name="box" size={16} color={COLOUR_DARK_GREEN} />
              //     </View>
              //   </View>
              <Image source={notificationListIcon} resizeMode="contain" />
            )}
            {reminder && (
              <Image source={notificationIcon} resizeMode="contain" />
            )}
          </View>
          <Text
            style={[
              styles.notificationItemsTitleText,
              {
                color: reminder
                  ? 'black'
                  : approved
                  ? 'grey'
                  : canceled
                  ? '#D70909'
                  : 'black',
              },
            ]}>
            {reminder
              ? 'Reminder'
              : approved
              ? 'Booking Approved'
              : canceled
              ? 'Appointment Canceled'
              : 'Reminder'}
          </Text>
        </View>
        <Text style={styles.notificationItemsTime}>12:30 pm</Text>
      </View>
      <View style={styles.notificationItemsDescContainer}>
        {approved && (
          <>
            <Text
              style={styles.notificationItemsDescText}
              ellipsizeMode="tail"
              numberOfLines={2}>
              want to have a hair cut and shave my bead with my kids wondering
              if you would be available
            </Text>

            <Text
              style={{
                fontFamily: FONT_FAMILY_BODY,
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 20,
                left: 43,
                color: 'grey',
                top: 3,
              }}>
              Appointment Time: 01:30 pm - 02:00 pm
            </Text>
          </>
        )}
        {reminder && (
          <>
            <Text
              style={styles.notificationItemsDescText}
              ellipsizeMode="tail"
              numberOfLines={2}>
              Your scheduled appointment is set for 30mins; kindly proceed to
              service location
            </Text>

            <Text
              style={{
                fontFamily: FONT_FAMILY_BODY,
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 20,
                left: 43,
                color: COLOUR_TERRACOTTA,
                top: 3,
              }}>
              Appointment Time: 01:30 pm - 02:00 pm
            </Text>
          </>
        )}
        {/* <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('NotificationDetail')}>
          <Text style={styles.notificationViewDetailText}>View Detail</Text>
        </TouchableOpacity> */}
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
    top: 3,
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

export default CustomerNotificationItems;

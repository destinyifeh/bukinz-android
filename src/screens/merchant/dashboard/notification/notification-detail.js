import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_SIZE_MID,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
export default function NotificationDetailScreen() {
  const sheetRef = React.useRef();
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <View
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: COLOUR_DARK_GREEN}}>
      <View style={{marginTop: 40, flex: 1}}>
        <View style={styles.notificationTextIconContainer}>
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.notificationText}>Notification</Text>
        </View>
        <View style={styles.notificationViewDesign}></View>

        <View style={styles.notificationMainView}>
          <View
            style={{
              marginVertical: 30,
              width:
                width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
              alignSelf: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.userIcon}>
                <Feather name="user" size={25} color={COLOUR_DARK_GREEN} />
              </View>
              <Text style={styles.usernameText}>Peter Judge</Text>
            </View>
            <View style={{left: 50, width: '80%'}}>
              <Text>
                are you available because i want to make my hair right away. My
                friends are coming with me also because they need to make their
                hair too.
              </Text>
              <Text style={{marginVertical: 8, color: COLOUR_TERRACOTTA}}>
                Appointment Time: 01:35 pm - 03:00 pm{' '}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonConfirm}>
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonReschedule}>
                <Text style={styles.rescheduleText}>Reschedule</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{marginTop: 25, alignSelf: 'center'}}>
              <Text style={styles.cancelText}>Cancel Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationTextIconContainer: {
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '500',
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
  },
  notificationViewDesign: {
    height: 10,
    width: '93%',
    alignSelf: 'center',
    backgroundColor: COLOUR_SECONDARY_GREY,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  notificationMainView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    width: '100%',
  },

  notificationDayText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 16,
    color: COLOUR_BLACK,
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
  usernameText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '500',
    fontSize: FONT_SIZE_MID,
    lineHeight: 20,
    color: COLOUR_BLACK,
    left: 8,
  },
  buttonConfirm: {
    backgroundColor: COLOUR_DARK_GREEN,
    width: 130,
    height: 44,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    borderColor: COLOUR_DARK_GREEN,
    right: 7,
  },
  buttonReschedule: {
    backgroundColor: 'white',
    width: 130,
    height: 44,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    borderColor: COLOUR_DARK_GREEN,
    left: 7,
  },
  confirmText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    lineHeight: 16.41,
    fontSize: 14,
    color: 'white',
  },
  rescheduleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    lineHeight: 16.41,
    fontSize: 14,
    color: COLOUR_DARK_GREEN,
  },
  cancelText: {
    color: '#D70909',
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.41,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    left: 50,
  },
});

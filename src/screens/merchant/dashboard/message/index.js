import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  TextInput as SearchInput,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useFocusEffect} from '@react-navigation/native';
import {NotificationSkeleton} from '../../../../components/Skeletons';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_FAMILY_BODY_THIN,
  FONT_SIZE_MID,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import MessageItems from './components/message-items';

export default function MessageScreen() {
  const sheetRef = React.useRef();
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const [isLoadingMessage, setIsLoadingMessage] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');

      return () => {};
    }, []),
  );

  React.useEffect(() => {
    setIsLoadingMessage(true);
    setTimeout(() => {
      setIsLoadingMessage(false);
    }, 7000);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: COLOUR_DARK_GREEN}}>
      <View style={{marginTop: 40}}>
        <View style={styles.notificationTextIconContainer}>
          <Text style={styles.notificationText}>Messages</Text>
          <View style={styles.messageSearchContainer}>
            <View style={{marginLeft: 10}}>
              <AntDesign
                name="search1"
                size={15}
                color={COLOUR_SECONDARY_GREY}
              />
            </View>
            <SearchInput
              style={{
                width: '100%',
                fontFamily: FONT_FAMILY_BODY_THIN,
                fontSize: 12,
                lineHeight: 14.06,
                fontWeight: '400',
                color: 'white',
              }}
              cursorColor={COLOUR_SECONDARY_GREY}
              placeholder="Search by name or messages"
              //onChangeText={onSearch}
              //   defaultValue={value}
              placeholderTextColor="white"
            />
          </View>
        </View>
        <View style={styles.notificationViewDesign}></View>

        <View style={styles.notificationMainView}>
          <View
            style={{
              marginVertical: 30,
              marginHorizontal: 20,
              width: width > MAX_ALLOWED_WIDTH && MAX_ALLOWED_WIDTH,
            }}>
            {isLoadingMessage ? (
              <>
                <NotificationSkeleton />
                <NotificationSkeleton />
                <NotificationSkeleton />
                <NotificationSkeleton />
              </>
            ) : (
              <>
                <MessageItems isRead={false} />
                <View style={styles.messageDaycontainer}>
                  <View style={styles.line} />
                  <Text style={styles.dayText}>Yesterday</Text>
                  <View style={styles.line} />
                </View>
                <MessageItems isRead={true} />
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationTextIconContainer: {
    marginBottom: 35,
    //marginLeft: 18,
  },
  notificationText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 27.32,
    fontWeight: '700',
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    left: 20,
    marginBottom: 10,
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
    height: '100%',
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
  messageSearchContainer: {
    width: '85%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLOUR_SECONDARY_GREY,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: COLOUR_DARK_GREEN,
    alignSelf: 'center',
    height: 42,
  },

  messageDaycontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLOUR_SECONDARY_GREY,
  },
  dayText: {
    marginHorizontal: 10,
    color: 'grey',
  },
});

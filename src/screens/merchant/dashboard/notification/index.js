import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {NotificationSkeleton} from '../../../../components/Skeletons';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import NotificationItems from './components/notification-items';
export default function NotificationScreen() {
  const sheetRef = React.useRef();
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const [isLoadingNotification, setIsLoadingNotification] =
    React.useState(true);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  console.log(width, 'widthhh');
  useEffect(() => {
    sheetRef.current?.open();
    setTimeout(() => {
      setIsLoadingNotification(false);
    }, 3000);
  }, []);

  const data = [
    {
      updated: 'today',
      title: 'available',
      desc: 'yes it is me',
    },
    {
      updated: 'today',
      title: 'available here',
      desc: 'yes it is me here',
    },

    {
      updated: 'yesterday',
      title: 'available',
      desc: 'yes it is me',
    },
    {
      updated: 'yesterday',
      title: 'available here',
      desc: 'yes it is me here',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: COLOUR_DARK_GREEN}}>
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
            {isLoadingNotification ? (
              <NotificationSkeleton />
            ) : (
              <>
                <Text style={styles.notificationDayText}>Today</Text>
                <NotificationItems available={true} />
                <NotificationItems reschedule={true} />
                <NotificationItems canceled={true} />
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

    //height: '100%',
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
});

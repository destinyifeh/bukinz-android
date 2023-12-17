import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View, useWindowDimensions} from 'react-native';
import {NotificationSkeleton} from '../../../components/Skeletons';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_GHOST_WHITE,
  FONT_FAMILY_BODY_BOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import CustomerHeader from '../components/header';
import CustomerNotificationItems from './components/notification-items';
export default function CustomerNotificationScreen() {
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
    setTimeout(() => {
      setIsLoadingNotification(false);
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: COLOUR_GHOST_WHITE}}>
      <CustomerHeader title="Notification" />
      <View
        style={[
          styles.contentContainer,
          {
            width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
          },
        ]}
        contentContainerStyle={{}}>
        {isLoadingNotification ? (
          <NotificationSkeleton />
        ) : (
          <>
            {/* <Text style={styles.notificationDayText}>Today</Text> */}
            <CustomerNotificationItems reminder={true} />
            <CustomerNotificationItems approved={true} />
            {/* <CustomerNotificationItems canceled={true} /> */}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 30,
    flex: 1,
  },

  notificationDayText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 16,
    color: COLOUR_BLACK,
  },
});

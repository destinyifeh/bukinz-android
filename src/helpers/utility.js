import PushNotificationIOS from '@react-native-community/push-notification-ios';
import moment from 'moment';
import {AppState} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
import {COLOUR_DARK_GREEN} from '../constants/Styles';
import {
  getAppState,
  getPreviousRoute,
  getcurrentRoute,
} from '../state-management/features/global/globalSlice';
import {store} from '../state-management/store';

export const screenTrackingService = async (
  previousRouteName,
  currentRouteName,
) => {
  // Save the current route name for later comparison
  console.log(currentRouteName, 'currentRouteName');
  console.log(previousRouteName, 'previousRouteName');
  store.dispatch(getcurrentRoute(currentRouteName));
  store.dispatch(getPreviousRoute(previousRouteName));
  trackScreenView(currentRouteName);
};

const trackScreenView = route => {
  // console.log(route, 'track route');
};

const handleAppStateChange = nextAppState => {
  store.dispatch(getAppState(nextAppState));
};

export const appStateTracker = () => {
  AppState.addEventListener('change', handleAppStateChange);

  return () => {
    AppState.removeEventListener('change', handleAppStateChange);
  };
};

export const notificationService = () => {
  const date = moment().fromNow(true);
  const timestamp = Date.now() + 5000;
  console.log(date, 'donn');
  PushNotification.configure({
    // Handle remote notifications
    onNotification: function (notification) {
      console.log(notification, 'remote notification');

      // Finish handling the notification (this is important for iOS)
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
  });

  PushNotification.createChannel(
    {
      channelId: 'bukinz-message',
      channelName: 'Messages',
      channelDescription: 'Notifications for messages',
      importance: Importance.HIGH,
      vibrate: true,
    },
    created => console.log('channel created', created),
  );

  PushNotification.localNotification({
    channelId: 'bukinz-message',
    color: COLOUR_DARK_GREEN,
    vibrate: true,
    vibration: 300,
    playSound: true,
    /* iOS and Android properties */
    title: 'New message',
    message: 'You have a new message',
    //bigLargeIcon: 'ic_notification',
    largeIcon: '',
    smallIcon: 'ic_notification',
    when: timestamp,
    showWhen: true,
    //group: 'group',
    groupSummary: true,
  });
  //  PushNotification.deleteChannel('bukinz-message');

  return () => {
    PushNotification.unregister();
  };
};

const ScheduleLocalNotification = () => {
  PushNotification.localNotification({
    channelId: 'my-channel',
    ticker: 'My Notification Ticker',
    color: 'red',
    vibrate: true,
    vibration: 300,
    playSound: true,
    /* iOS and Android properties */
    title: 'My Notification Title',
    message: 'Hello, this is a local notification!',
  });
};

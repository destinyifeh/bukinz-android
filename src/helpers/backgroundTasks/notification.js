import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {AppState} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {COLOUR_DARK_GREEN} from '../../constants/Styles';
import notificationData from '../../fixtures/notifications.json';
export const runNotificationBackgroundTask = async () => {
  let notificationBackgroundTimerId;

  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: 'Bukinz-Notification',
    name: 'Appointments',
    description: 'Notification for appointments',
    badge: true,
    importance: AndroidImportance.HIGH,
    vibration: true,
    vibrationPattern: [300, 500],
  });

  notifee.onBackgroundEvent(async ({type, detail}) => {
    const {notification, pressAction} = detail;

    // Check if the user pressed the notification
    console.log(pressAction, 'notedd');
    if (type === EventType.ACTION_PRESS && pressAction.id === 'default') {
      console.log('baddest....');

      // Remove the notification
      await notifee.cancelNotification(notification.id);
    }
  });

  const handleAppStateChange = nextAppState => {
    if (nextAppState === 'background') {
      console.log('App is in the background');

      notificationBackgroundTimerId = BackgroundTimer.runBackgroundTimer(
        async () => {
          console.log('running...');
          // Display a notification
          const unreadNotifications = notificationData.filter(
            notification => !notification.isRead && notification.isNew,
          );

          if (unreadNotifications.length > 0) {
            console.log('New unread notifications:', unreadNotifications);
            // unreadNotifications.forEach(async unreadMessage => {
            //   console.log(unreadMessage.id, 'unreadMessageId');

            const unreadNotificationsText =
              unreadNotifications.length == 1
                ? 'You have 1 unread notification'
                : `You have ${unreadNotifications.length} unread notifications`;
            await notifee.displayNotification({
              id: 'notificationId',
              // title: 'New Message',
              body: unreadNotificationsText,
              android: {
                channelId: channelId,
                smallIcon: 'ic_notification', // optional, defaults to 'ic_launcher'.
                color: COLOUR_DARK_GREEN,
                timestamp: Date.now() + 5000,
                showTimestamp: true,
                badgeCount: unreadNotifications.length,
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                  id: 'default',
                },
              },
            });
            const desto = unreadNotifications.map(
              notification => notification.id,
            );
            console.log(desto, 'destoo mba');
            //call the message update api to send the array of notified messages
            // });
          }
        },
        7000,
      );
    } else if (nextAppState === 'active') {
      console.log('App is active');

      // Stop the background timer or perform other actions as needed
      BackgroundTimer.stopBackgroundTimer(notificationBackgroundTimerId);
    }
  };

  // Subscribe to app state changes
  AppState.addEventListener('change', handleAppStateChange);

  // Clean up the subscription when the component is unmounted
  return () => {
    AppState.removeEventListener('change', handleAppStateChange);

    // Stop the background timer if the component is unmounted
    BackgroundTimer.stopBackgroundTimer(notificationBackgroundTimerId);
  };
};

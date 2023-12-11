import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {AppState} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {COLOUR_DARK_GREEN} from '../../constants/Styles';
import messageData from '../../fixtures/messages.json';
export const runMessageBackgroundTask = async () => {
  let messageBackgroundTimerId;

  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: 'Bukinz-Message',
    name: 'Messages',
    description: 'Notification for messsages',
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

      messageBackgroundTimerId = BackgroundTimer.runBackgroundTimer(
        async () => {
          console.log('running...');
          // Display a notification
          const unreadMessages = messageData.filter(
            message => !message.isRead && message.isNew,
          );

          if (unreadMessages.length > 0) {
            console.log('New unread messages:', unreadMessages);
            // unreadMessages.forEach(async unreadMessage => {
            //   console.log(unreadMessage.id, 'unreadMessageId');
            const unreadMessagesText =
              unreadMessages.length == 1
                ? 'You have 1 unread message'
                : `You have ${unreadMessages.length} unread messages`;
            await notifee.displayNotification({
              id: 'messageId',
              // title: 'New Message',
              body: unreadMessagesText,
              android: {
                channelId: channelId,
                smallIcon: 'ic_notification', // optional, defaults to 'ic_launcher'.
                color: COLOUR_DARK_GREEN,
                timestamp: Date.now() + 5000,
                showTimestamp: true,
                badgeCount: unreadMessages.length,
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                  id: 'default',
                },
              },
            });
            const desto = unreadMessages.map(message => message.id);
            console.log(desto, 'destoo mba');
            //call the message update api to send the array of notified messages
            // });
          }
        },
        5000,
      );
    } else if (nextAppState === 'active') {
      console.log('App is active');

      // Stop the background timer or perform other actions as needed
      BackgroundTimer.stopBackgroundTimer(messageBackgroundTimerId);
    }
  };

  // Subscribe to app state changes
  AppState.addEventListener('change', handleAppStateChange);

  // Clean up the subscription when the component is unmounted
  return () => {
    AppState.removeEventListener('change', handleAppStateChange);

    // Stop the background timer if the component is unmounted
    BackgroundTimer.stopBackgroundTimer(messageBackgroundTimerId);
  };
};

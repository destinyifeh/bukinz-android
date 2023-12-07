import notifee, {
  AndroidBadgeIconType,
  AndroidImportance,
  EventType,
} from '@notifee/react-native';
import BackgroundTimer from 'react-native-background-timer';
import {COLOUR_DARK_GREEN} from '../constants/Styles';
import {store} from '../state-management/store';

export const notifyBackgroundTask = async () => {
  const one = false;
  await notifee.requestPermission();
  const des = store.getState();
  const checkAppSatate = des.global.appStatus;
  console.log(checkAppSatate, 'statusss22');
  //   BackgroundTimer.runBackgroundTimer(async () => {
  const channelId = await notifee.createChannel({
    id: 'Bukinz-Message',
    name: 'Messages',
    description: 'Notification for messsages',
    badge: true,
    importance: AndroidImportance.HIGH,
    vibration: true,
    vibrationPattern: [300, 500],
  });

  console.log('running...');
  // Display a notification
  notifee.displayNotification({
    // id: 'desto',
    // title: 'New Message',
    body: 'new message',
    android: {
      channelId,
      smallIcon: 'ic_notification', // optional, defaults to 'ic_launcher'.
      color: COLOUR_DARK_GREEN,
      badgeIconType: AndroidBadgeIconType.SMALL,
      timestamp: Date.now() + 5000,
      showTimestamp: true,
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
  //   }, 5000);
  //update the notification
  //   notifee.displayNotification({
  //     id: 'desto',
  //     body: '2 new messages',
  //     android: {
  //       channelId,
  //       smallIcon: 'ic_notification',
  //       color: COLOUR_DARK_GREEN,
  //       badgeIconType: AndroidBadgeIconType.SMALL,

  //       timestamp: Date.now() + 5000,
  //       showTimestamp: true,
  //       pressAction: {
  //         id: 'default',
  //       },
  //     },
  //   });

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

  //   return () => {
  //     BackgroundTimer.stopBackgroundTimer();
  //   };
};

export const runThat = () => {
  BackgroundTimer.runBackgroundTimer(() => {
    console.log('calling...');
    notifyBackgroundTask();
  }, 5000);

  return () => {
    BackgroundTimer.stopBackgroundTimer();
  };
};

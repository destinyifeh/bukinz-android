import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  COLOUR_DARK_GREEN,
  COLOUR_GREEN,
  FONT_FAMILY_BODY_BOLD,
} from '../../../constants/Styles';
import AvailabilityScreen from './availability';
import HomeScreen from './home';
import MessageScreen from './message';
import MessageDetailScreen from './message/mesage-detail';
import NotificationScreen from './notification';
import NotificationDetailScreen from './notification/notification-detail';
import ProfileScreen from './profile';
import ProfileSettingsScreen from './profile/profile-settings';
import ScheduleScreen from './schedule';
import StaffsScreen from './staff-management';
import AddStaffScreen from './staff-management/add-staff';

const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();
const DashboardBottomTab = () => {
  const tabNavigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      initialLayout={{
        width: Dimensions.get('window').width,
      }}
      screenOptions={({route, navigation}) => ({
        tabBarAndroidRipple: {borderless: false, color: COLOUR_GREEN},
        tabBarIndicatorStyle: {
          backgroundColor: COLOUR_DARK_GREEN,
          position: 'absolute',
          top: 0,
          height: 3,
        },

        tabBarLabelStyle: {fontSize: 12, fontFamily: FONT_FAMILY_BODY_BOLD},
        swipeEnabled: true,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: COLOUR_DARK_GREEN,
        tabBarLabel: navigation.isFocused() ? route.name : '',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-variant"
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Appointments"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={20}
              color={color}
            />
          ),
        }}
        // listeners={{
        //   tabPress: e => {
        //     e.preventDefault();
        //     console.log(e, 'dem say...');
        //     Vibration.vibrate();
        //     // tabNavigation.navigate('Message');
        //   },
        // }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="DashboardBottomTab">
      <Stack.Screen name="DashboardBottomTab" component={DashboardBottomTab} />

      <Stack.Screen name="MessageDetail" component={MessageDetailScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
      <Stack.Screen name="Availability" component={AvailabilityScreen} />
      <Stack.Screen name="Staffs" component={StaffsScreen} />
      <Stack.Screen name="AddStaff" component={AddStaffScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetailScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;

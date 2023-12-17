import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerHomeScreen from './home';
import CustomerNotificationScreen from './notification';
import CustomerSearchScreen from './search';
import SearchProfileScreen from './search-profile';
import ServiceDetailScreen from './services/detail-screen';
import CustomerSignupScreen from './signup';
const Stack = createNativeStackNavigator();

export default function CustomerStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="CustomerHomeScreen">
      <Stack.Screen name="Cusignup" component={CustomerSignupScreen} />
      <Stack.Screen name="CustomerHomeScreen" component={CustomerHomeScreen} />
      <Stack.Screen
        name="CustomerSearchScreen"
        component={CustomerSearchScreen}
      />
      <Stack.Screen
        name="CustomerNotificationScreen"
        component={CustomerNotificationScreen}
      />
      <Stack.Screen
        name="SearchProfileScreen"
        component={SearchProfileScreen}
      />
      <Stack.Screen
        name="ServiceDetailScreen"
        component={ServiceDetailScreen}
      />
    </Stack.Navigator>
  );
}

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerSignupScreen from './signup';
const Stack = createNativeStackNavigator();

export default function CustomerStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Cusignup" component={CustomerSignupScreen} />
    </Stack.Navigator>
  );
}

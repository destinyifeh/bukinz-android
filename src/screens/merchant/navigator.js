import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VerfiyEmailScreen from './Verify-email';
import DashboardStack from './dashboard/navigator';
import ForgotPasswordScreen from './forgot-password';
import LoginScreen from './login';
import ResetPasswordScreen from './reset-password';
import SignupScreen from './signup';
const Stack = createNativeStackNavigator();

export default function MerchantStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="VerifyEmail" component={VerfiyEmailScreen} />
      <Stack.Screen name="Dashboard" component={DashboardStack} />
    </Stack.Navigator>
  );
}

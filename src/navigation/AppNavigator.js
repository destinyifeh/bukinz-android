import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {FIRST_TIME_USER} from '../constants/configs';
import {runTask} from '../helpers/backgroundTasks/tasks';
import {screenTrackingService} from '../helpers/utility';
import CustomerStack from '../screens/customer/navigator';
import LandingScreen from '../screens/landing';
import LandingSignupScreen from '../screens/landing-signup';
import MerchantStack from '../screens/merchant/navigator';
import SignupScreen from '../screens/merchant/signup';
import OnBoardingScreen from '../screens/onboarding';
import {getData} from '../services/dataServices';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const [isFirstTimeUser, setIsFirstTimeUser] = React.useState(null);

  React.useEffect(() => {
    checkFirstTimeUser();
    runTask();
  }, []);

  const checkFirstTimeUser = async () => {
    const value = await getData(FIRST_TIME_USER);
    setIsFirstTimeUser(value === null);

    //await deleteData(FIRST_TIME_USER);
  };
  if (isFirstTimeUser === null) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          routeNameRef.current = currentRouteName;
          screenTrackingService(previousRouteName, currentRouteName);
        }
      }}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={isFirstTimeUser ? 'Onboarding' : 'Landing'}>
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} />

        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="WelcomeScreen" component={LandingSignupScreen} />

        <Stack.Screen name="MerchantScreen" component={MerchantStack} />

        <Stack.Screen name="CustomerScreen" component={CustomerStack} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

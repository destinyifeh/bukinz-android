import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {COLOUR_WHITE} from '../../../constants/Styles';
import {
  flashErrorMessage,
  flashSuccessMessage,
} from '../../../helpers/flash-message';
import VerifyEmailForm from './components/VerifyEmailForm';
export default function VerfiyEmailScreen(props) {
  const [isLoading, setIsloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({otp: ''});
  const {params} = props.route;
  const isForgotPasswordScreen = params?.isForgotPasswordScreen;
  console.log(isForgotPasswordScreen, 'isPasss');
  let serverError = false;
  let error = false;

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(isLoading ? 'grey' : 'white');
      StatusBar.setBarStyle('dark-content');
    }, [isLoading]),
  );

  const onSubmit = otp => {
    setIsloading(true);

    console.log(otp, 'otpppppsss');

    try {
      if (otp && otp !== '1234' && error) {
        setTimeout(() => {
          flashErrorMessage('Invalid verification code. Please try again.');
          props.navigation.reset({index: 0, routes: [{name: 'VerifyEmail'}]});
          setIsloading(false);
        }, 5000);
        return;
      } else if (serverError) {
        setErrorMessage({otp: 'an error occurred'});
        setTimeout(() => {
          setIsloading(false);
        }, 5000);
        return;
      }
      setTimeout(() => {
        setTimeout(() => {
          setIsloading(false);
        }, 5000);
        if (isForgotPasswordScreen) {
          props.navigation.replace('ResetPassword');
        } else {
          props.navigation.replace('Dashboard');
          //props.navigation.reset({index: 0, routes: [{name: 'Dashboard'}]});
        }
      }, 5000);
    } catch (err) {
      setIsloading(false);
    }
  };

  const handleResendCode = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      flashSuccessMessage('OTP sent successfully. Please check your email.');
      props.navigation.reset({index: 0, routes: [{name: 'VerifyEmail'}]});
    }, 5000);
  };

  return (
    <View style={{flex: 1, backgroundColor: COLOUR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VerifyEmailForm
          isLoading={isLoading}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
          handleResendCode={handleResendCode}
        />
      </ScrollView>
    </View>
  );
}

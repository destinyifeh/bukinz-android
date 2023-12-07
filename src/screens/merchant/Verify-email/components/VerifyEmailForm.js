import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useEffect, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import {useOtpVerify} from 'react-native-otp-verify';
import needHelpIcon from '../../../../assets/images/need_help_icon.png';
import {
  COLOUR_DARK_GREEN,
  COLOUR_GREEN,
  COLOUR_RED,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY_BOLD,
  FONT_SIZE_BIG,
  LINE_HEIGHT_BIGGER,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';

import DialogBox from '../../../../components/DialogBox';
import Loader from '../../../../components/loader';
import GlobalStyles from '../../../../styles/globalStyles';
export default function VerifyEmailForm({
  isLoading,
  onSubmit,
  errorMessage,
  handleResendCode,
}) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const {hash, otp, message, timeoutError, stopListener, startListener} =
    useOtpVerify({numberOfDigits: 4});

  const otpRef = useRef(null);

  useEffect(() => {
    setTimeout(() => otpRef.current.focusField(0), 250);
  }, []);

  return (
    <View
      style={[
        GlobalStyles.FormInputContainer,
        {width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9},
      ]}>
      <View style={GlobalStyles.titleDescView}>
        <Text style={GlobalStyles.titleText}>Verify Email</Text>
        <Text style={GlobalStyles.descText}>
          Please provide the verification code sent to your email{' '}
          <Text style={{color: COLOUR_TERRACOTTA}}>bukinz@bukinz.org</Text>
        </Text>
      </View>

      <OTPInputView
        pinCount={4}
        style={{width: '80%', height: 90, alignSelf: 'center'}}
        codeInputFieldStyle={[
          styles.otpInput,
          errorMessage.otp && styles.isErrorInput,
        ]}
        codeInputHighlightStyle={[
          styles.focusedInput,
          errorMessage.otp && styles.isErrorInput,
          {color: 'green'},
        ]}
        onCodeFilled={otp => {
          onSubmit(otp);
        }}
        autoFocusOnLoad={false}
        ref={otpRef}
      />

      <View style={[GlobalStyles.bottomViewContainer, {flexDirection: 'row'}]}>
        <Text style={GlobalStyles.bottomText}>
          {errorMessage.otp ? 'An error occurred...' : "Didn't receive code?"}{' '}
        </Text>
        <TouchableOpacity onPress={handleResendCode}>
          <Text style={[GlobalStyles.bottomText2, {fontWeight: 'bold'}]}>
            {errorMessage.otp ? 'Resend Code' : 'Click to Resend'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Button
        title="Continue"
        style={{marginTop: 25}}
        loading={isLoading}
        //onPress={() => navigation.replace('ResetPassword')}
        onPress={onSubmit}
        disabled={!form?.otp}
      /> */}

      <View style={styles.helpView}>
        <Image source={needHelpIcon} width={20} height={20} />
        <TouchableOpacity
          style={{left: 10}}
          onPress={() => navigation.navigate('Dashboard')}>
          <Text style={[GlobalStyles.bottomText2, {fontWeight: 'bold'}]}>
            Need Help ?
          </Text>
        </TouchableOpacity>
      </View>
      <DialogBox isVisible={isLoading}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.loaderContainer}>
            <Loader size={20} color="black" />
          </View>
        </View>
      </DialogBox>
    </View>
  );
}
const styles = StyleSheet.create({
  helpView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
  },
  otpContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: COLOUR_GREEN,
    borderWidth: 1,
    paddingHorizontal: 10,
    textAlign: 'center',
    borderRadius: 4,
    color: COLOUR_DARK_GREEN,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY_BODY_BOLD,
    lineHeight: LINE_HEIGHT_BIGGER,
    fontSize: FONT_SIZE_BIG,
    margin: 5,
  },
  otpInput: {
    borderColor: COLOUR_GREEN,
    borderRadius: 4,
    color: COLOUR_DARK_GREEN,
    fontWeight: 'bold',
  },
  focusedInput: {
    borderColor: COLOUR_DARK_GREEN,
    fontWeight: 'bold',
    borderWidth: 2,
  },
  isErrorInput: {
    borderColor: COLOUR_RED,
    fontWeight: 'bold',
    borderWidth: 2,
    color: 'red',
  },
  loaderContainer: {
    width: 75,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

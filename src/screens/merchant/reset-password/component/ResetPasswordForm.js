import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import needHelpIcon from '../../../../assets/images/need_help_icon.png';

import Button from '../../../../components/Button';
import HintText from '../../../../components/HintText';
import Input from '../../../../components/Input';
import {MAX_ALLOWED_WIDTH} from '../../../../constants/Styles';
import GlobalStyles from '../../../../styles/globalStyles';
export default function ResetPasswordForm({
  updateFormField,
  form,
  onSubmit,
  erroMessage,
  isLoading,
  setErrorMessage,
}) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  function onTogglePassword() {
    setVisiblePassword(!visiblePassword);
  }
  function onToggleConfirmPassword() {
    setVisibleConfirmPassword(!visibleConfirmPassword);
  }

  useEffect(() => {
    let passwordError = '';
    const {password} = form;

    if (password && password?.length < 8) {
      passwordError = 'Password must be a minimum of 8 characters';
    }
    setErrorMessage({password: passwordError});
  }, [form?.password]);
  return (
    <View
      style={[
        GlobalStyles.FormInputContainer,
        {width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9},
      ]}>
      <View style={GlobalStyles.titleDescView}>
        <Text style={GlobalStyles.titleText}>Reset Password</Text>
        <Text style={GlobalStyles.descText}>Setup a new password.</Text>
      </View>

      <Input
        label="Password"
        secureTextEntry={!visiblePassword}
        rightIconName="eye"
        onPressRightIcon={onTogglePassword}
        onChangeText={password => {
          updateFormField({password});
        }}
        value={form?.password}
        inputError={erroMessage?.password}
        isLoading={isLoading}
      />
      {erroMessage.password && (
        <HintText visible={erroMessage?.password}>
          {erroMessage?.password && erroMessage?.password}
        </HintText>
      )}

      <Input
        label="Confirm password"
        secureTextEntry={!visibleConfirmPassword}
        rightIconName="eye"
        onPressRightIcon={onToggleConfirmPassword}
        onChangeText={confirmPassword => {
          updateFormField({confirmPassword});
        }}
        value={form?.confirmPassword}
        inputError={erroMessage?.confirmPassword}
        isLoading={isLoading}
      />
      {erroMessage.confirmPassword && (
        <HintText visible={erroMessage?.confirmPassword}>
          {erroMessage?.confirmPassword && erroMessage?.confirmPassword}
        </HintText>
      )}
      <Button
        title="Reset Password"
        style={{marginTop: 30}}
        onPress={onSubmit}
        loading={isLoading}
        disabled={!form?.password || !form?.confirmPassword}
      />

      <View style={styles.helpView}>
        <Image source={needHelpIcon} width={20} height={20} />
        <TouchableOpacity
          style={{left: 10}}
          onPress={() => navigation.navigate('VerifyEmail')}>
          <Text style={[GlobalStyles.bottomText2, {fontWeight: 'bold'}]}>
            Need Help ?
          </Text>
        </TouchableOpacity>
      </View>
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
});

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import needHelpIcon from '../../../assets/images/need_help_icon.png';
import Button from '../../../components/Button';
import HintText from '../../../components/HintText';
import Input from '../../../components/Input';

import {COLOUR_TERRACOTTA, MAX_ALLOWED_WIDTH} from '../../../constants/Styles';
import GlobalStyles from '../../../styles/globalStyles';
export default function ForgotPasswordForm({
  updateFormField,
  form,
  onSubmit,
  erroMessage,
  isLoading,
}) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <View
      style={[
        GlobalStyles.FormInputContainer,
        {
          width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
        },
      ]}>
      <View style={GlobalStyles.titleDescView}>
        <Text style={GlobalStyles.titleText}>Forgot Password</Text>
        <Text style={GlobalStyles.descText}>
          Please provide the email associated with your account.
        </Text>
      </View>

      <Input
        label="Email"
        keyboardType="email-address"
        value={form?.email}
        textContentType="emailAddress"
        onChangeText={email => {
          updateFormField({email});
        }}
        hintColor={erroMessage?.email && COLOUR_TERRACOTTA}
        inputError={erroMessage?.email}
        isLoading={isLoading}
        inputRef={inputRef}
      />
      {erroMessage.email && (
        <HintText visible={erroMessage?.email}>
          {erroMessage?.email && erroMessage?.email}
        </HintText>
      )}
      <Button
        title="Reset Password"
        style={{marginTop: 30}}
        onPress={onSubmit}
        loading={isLoading}
        disabled={!form?.email}
      />

      <View style={styles.helpView}>
        <Image source={needHelpIcon} width={20} height={20} />
        <TouchableOpacity
          style={{left: 10}}
          onPress={() => navigation.navigate('ResetPassword')}>
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

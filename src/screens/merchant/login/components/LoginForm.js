import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import needHelpIcon from '../../../../assets/images/need_help_icon.png';
import Button from '../../../../components/Button';
import HintText from '../../../../components/HintText';
import Input from '../../../../components/Input';
import {
  COLOUR_GREEN,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import GlobalStyles from '../../../../styles/globalStyles';
export default function LoginForm({
  updateFormField,
  form,
  onSubmit,
  erroMessage,
  isLoading,
  isChecked,
  onToggleCheck,
}) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  function onTogglePassword() {
    setVisiblePassword(!visiblePassword);
  }

  return (
    <View
      style={[
        GlobalStyles.FormInputContainer,
        {width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9},
      ]}>
      <View style={GlobalStyles.titleDescView}>
        <Text style={GlobalStyles.titleText}>Login</Text>
        <Text style={GlobalStyles.descText}>
          Welcome, input credentials to view your account.
        </Text>
      </View>

      <Input
        label="Email"
        keyboardType="email-address"
        onChangeText={email => {
          updateFormField({email});
        }}
        value={form?.email}
        textContentType="emailAddress"
        hintColor={erroMessage?.email && COLOUR_TERRACOTTA}
        inputError={erroMessage?.email}
        isLoading={isLoading}
      />
      {erroMessage.email && (
        <HintText visible={erroMessage?.email}>
          {erroMessage?.email && erroMessage?.email}
        </HintText>
      )}
      <Input
        label="Password"
        secureTextEntry={!visiblePassword}
        rightIconName="eye"
        onPressRightIcon={onTogglePassword}
        onChangeText={password => {
          updateFormField({password});
        }}
        value={form?.password}
        hintColor={erroMessage?.password && COLOUR_TERRACOTTA}
        inputError={erroMessage?.password}
        isLoading={isLoading}
      />
      {erroMessage.password && (
        <HintText visible={erroMessage?.password}>
          {erroMessage?.password && erroMessage.password}
        </HintText>
      )}

      <View style={styles.rememberForgotContainer}>
        <View style={styles.rememberMeContainer}>
          <Checkbox
            color={COLOUR_GREEN}
            status={!isChecked ? 'checked' : 'unchecked'}
            uncheckedColor={COLOUR_SECONDARY_GREY}
            onPress={onToggleCheck}
          />
          <Text style={GlobalStyles.bottomText}>Remember me</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[GlobalStyles.bottomText2, {fontWeight: 'bold'}]}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Login"
        disabled={!form.email || !form.password}
        loading={isLoading}
        onPress={onSubmit}
      />

      <View style={GlobalStyles.bottomViewContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={GlobalStyles.bottomText}>Dont't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={[GlobalStyles.bottomText2, {fontWeight: 'bold'}]}>
              {' '}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    </View>
  );
}
const styles = StyleSheet.create({
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  helpView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
  },
});

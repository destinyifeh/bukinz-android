import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import Button from '../../../../components/Button';
import HintText from '../../../../components/HintText';
import Input from '../../../../components/Input';
import InputPicker from '../../../../components/InputPicker';

import {
  COLOUR_FORM_CONTROL_BACKGROUND,
  COLOUR_GHOST_WHITE,
  COLOUR_GREEN,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import businessTypes from '../../../../constants/businessTypes.json';
import GlobalStyles from '../../../../styles/globalStyles';
export default function SignupForm({
  updateFormField,
  form,
  onSubmit,
  erroMessage,
  isLoading,
  setErrorMessage,
  setBusinessTypeValue,
  businessTypeValue,
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
    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';
    const {email, password, confirmPassword} = form;
    if (email) {
      emailError = '';
    }

    if (password && password?.length < 8) {
      passwordError = 'Password must be a minimum of 8 characters';
    }
    if (
      confirmPassword &&
      confirmPassword?.lenght >= 8 &&
      confirmPassword !== password
    ) {
      confirmPasswordError = 'Password do not match';
    }
    setErrorMessage({
      password: passwordError,
      confirmPassword: confirmPasswordError,
      email: emailError,
    });
  }, [form?.password, form?.confirmPassword, form?.email]);

  const {
    email,
    password,
    postCode,
    businessAddress,
    businessType,
    staff,
    businessName,
    phone,
    confirmPassword,
  } = form;

  const checkRequiredFields = () => {
    const requiredFields = [
      email,
      password,
      confirmPassword,
      businessAddress,
      businessType,
      staff,
      businessName,
      phone,
      postCode,
    ];

    return requiredFields.some(field => !field);
  };

  return (
    <View
      style={[
        GlobalStyles.FormInputContainer,
        {width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9},
      ]}>
      <View style={GlobalStyles.titleDescView}>
        <Text style={GlobalStyles.titleText}>Sign Up</Text>
        <Text style={GlobalStyles.descText}>
          Create an account to enjoy great services.
        </Text>
      </View>
      <Input
        label="Business name"
        onChangeText={businessName => {
          updateFormField({businessName});
        }}
        value={form?.businessName}
        isLoading={isLoading}
      />
      <Input
        label="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={email => {
          updateFormField({email});
        }}
        value={form?.email}
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
        label="Phone number"
        keyboardType="phone-pad"
        onChangeText={phone => {
          updateFormField({phone});
        }}
        isLoading={isLoading}
        value={form?.phone}
      />
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

      <Input
        label="Confirm password"
        secureTextEntry={!visibleConfirmPassword}
        rightIconName="eye"
        onPressRightIcon={onToggleConfirmPassword}
        onChangeText={confirmPassword => {
          updateFormField({confirmPassword});
        }}
        value={form?.confirmPassword}
        hintColor={erroMessage?.confirmPassword && COLOUR_TERRACOTTA}
        inputError={erroMessage?.confirmPassword}
        isLoading={isLoading}
      />

      {erroMessage.confirmPassword && (
        <HintText visible={erroMessage?.confirmPassword}>
          {erroMessage?.confirmPassword && erroMessage.confirmPassword}
        </HintText>
      )}
      <Input
        label="Post code"
        onChangeText={postCode => {
          updateFormField({postCode});
        }}
        keyboardType={'numeric'}
        value={form?.postCode}
        isLoading={isLoading}
      />
      <Input
        label="Business address"
        onChangeText={businessAddress => {
          updateFormField({businessAddress});
        }}
        value={form?.businessAddress}
        isLoading={isLoading}
      />
      {/* <InputPicker2
        onSelect={businessType => {
          updateFormField({businessType});
        }}
        data={businessTypes}
        value={form?.businessType}
        label="Business Type"
        isLoading={isLoading}
      /> */}

      <InputPicker
        style={{
          backgroundColor: COLOUR_FORM_CONTROL_BACKGROUND,
          borderWidth: 0.5,
          borderColor: isLoading
            ? COLOUR_SECONDARY_GREY
            : form?.businessType
            ? COLOUR_GREEN
            : COLOUR_SECONDARY_GREY,
          marginTop: 21,
        }}
        dropDownContainerStyle={{
          backgroundColor: 'white',
          borderWidth: 0.5,
          borderColor: COLOUR_SECONDARY_GREY,
        }}
        placeholder="Business Type"
        data={businessTypes}
        onChangeValue={businessType => {
          updateFormField({businessType});
        }}
        listMode="MODAL"
        placeholderStyle={{
          fontFamily: FONT_FAMILY_BODY,
          fontSize: 16,
          color: '#353839',
          left: 5,
        }}
        searchable={false}
        modalTitle="Select Business Type"
        modalTitleStyle={{color: '#353839'}}
        modalContentContainerStyle={{
          backgroundColor: COLOUR_GHOST_WHITE,
          paddingTop: 15,
        }}
        disabled={isLoading}
        labelStyle={{
          fontFamily: FONT_FAMILY_BODY,
          fontSize: 16,
          color: isLoading && '#c0c0c0',
        }}
        value={businessTypeValue}
        setBusinessTypeValue={setBusinessTypeValue}
      />

      <Input
        label="Number of staff"
        keyboardType="number-pad"
        onChangeText={staff => {
          updateFormField({staff});
        }}
        value={form?.staff}
        isLoading={isLoading}
      />
      <View style={GlobalStyles.policyContainer}>
        <Text style={GlobalStyles.bottomText}>
          By clicking signup, you agree to the{' '}
          <Text style={GlobalStyles.bottomText2}>
            Terms of Service <Text style={GlobalStyles.bottomText}>and</Text>{' '}
            Privacy Policy
          </Text>
        </Text>
      </View>
      <Button
        title="Sign up"
        loading={isLoading}
        disabled={checkRequiredFields()}
        onPress={onSubmit}
      />
      <View style={GlobalStyles.bottomViewContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={GlobalStyles.bottomText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[GlobalStyles.bottomText2, {fontWeight: 'bold'}]}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

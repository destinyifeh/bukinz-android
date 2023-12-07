import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {COLOUR_WHITE} from '../../../constants/Styles';
import {validateEmail} from '../../../helpers/validation';
import SignupForm from './components/SignupForm';

export default function SignupScreen(props) {
  const [form, setForm] = useState('');
  const [businessTypeValue, setBusinessTypeValue] = useState(null);

  const [erroMessage, setErrorMessage] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsloading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor('white');
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  const updateFormField = value => {
    const updateForm = {
      ...form,
      ...value,
    };
    console.log(updateForm, 'form');
    setForm(updateForm);
    console.log(form, 'format');
  };

  const validateForm = () => {
    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';
    const {email, password, confirmPassword} = form;
    if (email && !validateEmail(email)) {
      emailError = 'Please enter a valid email address';
      setErrorMessage({email: emailError});
      throw new Error(emailError);
    }

    if (password && password?.length < 8) {
      passwordError = 'Password must be a minimum of 8 characters';
      setErrorMessage({
        password: passwordError,
      });

      throw new Error(passwordError);
    }

    if (confirmPassword && confirmPassword !== password) {
      confirmPasswordError = 'Password do not match ';
      setErrorMessage({
        confirmPassword: confirmPasswordError,
      });

      throw new Error(confirmPasswordError);
    }
  };

  const resetForm = () => ({
    email: '',
    password: '',
    businessAddress: '',
    postCode: '',
    businessName: '',
    businessType: '',
    staff: '',
    confirmPassword: '',
    phone: '',
  });

  const handleResetForm = () => {
    setForm(resetForm());
    setBusinessTypeValue(null);
  };

  const onSubmit = () => {
    setIsloading(true);

    const {
      email,
      password,
      businessName,
      businessType,
      postCode,
      phone,
      businessAddress,
      staff,
    } = form;
    try {
      validateForm();

      const merchantRegDoc = {
        email: email,
        phone: phone,
        password: password,
        businessName: businessName,
        businessType: businessType,
        postCode: postCode,
        staff: staff,
        businessAddress: businessAddress,
      };

      console.log(merchantRegDoc, 'merchant reg doc');
      setTimeout(() => {
        setIsloading(false);
        handleResetForm();
        props.navigation.replace('VerifyEmail');
      }, 5000);
    } catch (err) {
      console.log(err.message, 'An error');
      setIsloading(false);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: COLOUR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SignupForm
          updateFormField={updateFormField}
          form={form}
          onSubmit={onSubmit}
          erroMessage={erroMessage}
          isLoading={isLoading}
          setErrorMessage={setErrorMessage}
          setBusinessTypeValue={setBusinessTypeValue}
          businessTypeValue={businessTypeValue}
        />
      </ScrollView>
    </View>
  );
}

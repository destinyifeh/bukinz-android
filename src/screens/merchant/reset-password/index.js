import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {COLOUR_WHITE} from '../../../constants/Styles';
import {RESET_EMAIL} from '../../../constants/configs';
import {getData} from '../../../services/dataServices';
import ResetModal from './component/ResetModal';
import ResetPasswordForm from './component/ResetPasswordForm';
export default function ResetPasswordScreen(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState('');
  const [erroMessage, setErrorMessage] = useState({
    confirmPassword: '',
    password: '',
  });
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    getResetEmail();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor('white');
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  const getResetEmail = async () => {
    const email = await getData(RESET_EMAIL);
    if (email ?? email) {
      setForm({email: email});
    }
  };

  const updateFormField = value => {
    const updateForm = {
      ...form,
      ...value,
    };
    setForm(updateForm);
  };

  const validateForm = () => {
    let passwordError = '';
    let confirmPasswordError = '';
    const {password, confirmPassword} = form;

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
  const onSubmit = async () => {
    setIsloading(true);

    const {password, email} = form;

    try {
      validateForm();

      const resetDoc = {
        password: password,
        email: email,
      };

      console.log(resetDoc, 'resetdoc');
      setTimeout(() => {
        setIsloading(false);
        setForm({password: '', confirmPassword: ''});
        onToggleModal();
      }, 5000);
    } catch (err) {
      console.log(err, 'error occurred');
      setIsloading(false);
    }
  };

  function onToggleModal() {
    setIsVisible(!isVisible);
  }

  return (
    <View style={{flex: 1, backgroundColor: COLOUR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResetPasswordForm
          updateFormField={updateFormField}
          form={form}
          onSubmit={onSubmit}
          erroMessage={erroMessage}
          isLoading={isLoading}
          setErrorMessage={setErrorMessage}
        />
      </ScrollView>
      <ResetModal onToggleModal={onToggleModal} isVisible={isVisible} />
    </View>
  );
}

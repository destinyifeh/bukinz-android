import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {COLOUR_WHITE} from '../../../constants/Styles';
import {REMEMBER_ME_KEY} from '../../../constants/configs';
import {errorMessages} from '../../../constants/messages';
import {validateEmail} from '../../../helpers/validation';
import {deleteData, getData, saveData} from '../../../services/dataServices';
import LoginForm from './components/LoginForm';

export default function LoginScreen(props) {
  const [form, setForm] = useState('');
  const [erroMessage, setErrorMessage] = useState({email: '', password: ''});
  const [isLoading, setIsloading] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    getRememberUser();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor('white');
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  const getRememberUser = async () => {
    try {
      const user = await getData(REMEMBER_ME_KEY);
      console.log(user, 'remember user');
      if (user ?? user) {
        setIsChecked(!isChecked);
        setForm({email: user.email, password: user.password});
      } else {
        setIsChecked(true);
      }
    } catch (err) {
      console.log(err);
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
    let emailError = '';
    let passwordError = '';
    const {email, password} = form;
    if (email && !validateEmail(email)) {
      emailError = 'Please enter a valid email address';
      setErrorMessage({email: emailError});
      throw new Error(emailError);
    }

    // if (password && password?.length < 8) {
    //   passwordError = 'Password must be a minimum of 8 characters';
    //   setIsloading(false);
    // }
  };

  const fakeUserLogin = {
    email: 'bukinz@g.com',
    pass: '12345678',
  };
  const onSubmit = async () => {
    setIsloading(true);
    const {email, password} = form;
    try {
      validateForm();

      const loginUser = {
        email: email.toLowerCase(),
        password: password,
      };

      console.log(loginUser, 'logger');
      if (fakeUserLogin.email !== loginUser.email) {
        setErrorMessage({email: errorMessages.accountNotFound});
        throw new Error(errorMessages.accountNotFound);
      } else if (fakeUserLogin.pass !== loginUser.password) {
        setErrorMessage({password: errorMessages.incorrectPassword});
        throw new Error(errorMessages.incorrectPassword);
      } else {
        if (!isChecked) {
          await saveData(REMEMBER_ME_KEY, loginUser);
        } else {
          await deleteData(REMEMBER_ME_KEY);
        }
        setTimeout(() => {
          setForm({email: '', password: ''});
          setErrorMessage({email: '', password: ''});
          console.log(loginUser, 'login info');
          setIsloading(false);
          //props.navigation.navigate('Dashboard');
          props.navigation.reset({index: 0, routes: [{name: 'Dashboard'}]});
        }, 5000);
      }
    } catch (err) {
      console.log(err.message, 'error');
      setIsloading(false);
    }
  };

  function onToggleCheck() {
    console.log(isChecked, 'isChecked');
    setIsChecked(!isChecked);
  }

  return (
    <View style={{flex: 1, backgroundColor: COLOUR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LoginForm
          updateFormField={updateFormField}
          form={form}
          onSubmit={onSubmit}
          erroMessage={erroMessage}
          isLoading={isLoading}
          isChecked={isChecked}
          onToggleCheck={onToggleCheck}
        />
      </ScrollView>
    </View>
  );
}

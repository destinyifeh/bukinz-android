import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {COLOUR_WHITE} from '../../../constants/Styles';
import {RESET_EMAIL} from '../../../constants/configs';
import {errorMessages} from '../../../constants/messages';
import {validateEmail} from '../../../helpers/validation';
import {saveData} from '../../../services/dataServices';
import ForgotPasswordForm from './ForgotPasswordForm';
import ForgotEmailModal from './components/ForgotEmailModal';
export default function ForgotPasswordScreen(props) {
  const sheetRef = React.useRef();

  const [form, setForm] = useState('');
  const [erroMessage, setErrorMessage] = useState({email: ''});
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
    setForm(updateForm);
  };

  const validateForm = () => {
    let emailError = '';
    const {email} = form;
    if (email && !validateEmail(email)) {
      emailError = 'Please enter a valid email address';
      setErrorMessage({email: emailError});
      throw new Error(emailError);
    }
  };

  const navigateToVerifyEmail = () => {
    setForm({email: ''});
    props.navigation.replace('VerifyEmail', {
      isForgotPasswordScreen: true,
    });
  };

  const onSubmit = async () => {
    setIsloading(true);

    const {email} = form;
    try {
      validateForm();

      const forgotDoc = {
        email: email.toLowerCase(),
      };

      if (forgotDoc.email !== 'bukinz@g.com') {
        setErrorMessage({email: errorMessages.accountNotFound});
        throw new Error(errorMessages.accountNotFound);
      }
      console.log(forgotDoc, 'doc');
      await saveData(RESET_EMAIL, forgotDoc.email);
      setTimeout(() => {
        setIsloading(false);
        sheetRef.current?.open();
      }, 5000);
    } catch (err) {
      console.log(err, 'An error');
      setIsloading(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLOUR_WHITE}}>
      <ForgotPasswordForm
        updateFormField={updateFormField}
        form={form}
        onSubmit={onSubmit}
        erroMessage={erroMessage}
        isLoading={isLoading}
        sheetRef={sheetRef}
      />

      <ForgotEmailModal
        sheetRef={sheetRef}
        email={form?.email}
        navigateToVerifyEmail={navigateToVerifyEmail}
      />
    </View>
  );
}

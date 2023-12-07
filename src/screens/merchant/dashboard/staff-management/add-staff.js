import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Button from '../../../../components/Button';
import HeaderWrapper from '../../../../components/HeaderWrapper';
import HintText from '../../../../components/HintText';
import Input from '../../../../components/Input';
import InputPicker from '../../../../components/InputPicker';
import {
  COLOUR_DARK_GREEN,
  COLOUR_FORM_CONTROL_BACKGROUND,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import {validateEmail} from '../../../../helpers/validation';
import InviteSuccessModal from './components/InviteSuccessModal';
import Roles from './components/Roles.json';
const deviceWidth = Dimensions.get('window').width;
const AddStaffScreen = () => {
  const sheetRef = useRef();
  const navigation = useNavigation();
  const [form, setForm] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [erroMessage, setErrorMessage] = useState({email: ''});
  const [isError, setIsError] = useState({email: ''});
  const updateFormField = value => {
    const updateForm = {
      ...form,
      ...value,
    };
    console.log(updateForm, 'form');
    setForm(updateForm);
    console.log(form, 'format');
  };

  const emailChecker = () => {
    let emailError = '';
    const {email, password} = form;
    if (email && !validateEmail(email)) {
      emailError = 'Please enter a valid email address';
      setIsloading(false);
    }

    setErrorMessage({email: emailError});
    setIsError({email: emailError});

    console.log(isError, 'iserorr');
  };
  const onSubmit = () => {
    // setIsloading(true);
    sheetRef.current?.open();

    const {email, phone} = form;
    //emailChecker();
  };

  return (
    <HeaderWrapper
      title="Staffs"
      contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.mainContainer}>
        <Text style={styles.addStaffText}>Add Staff Details</Text>

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
        {isError.email && (
          <HintText visible={erroMessage?.email}>
            {erroMessage?.email && erroMessage?.email}
          </HintText>
        )}
        <Input
          label="Phone number"
          isLoading={isLoading}
          onChangeText={phone => {
            updateFormField({phone});
          }}
          value={form?.phone}
          keyboardType="phone-pad"
        />

        <View style={styles.roleContainer}>
          <Text style={styles.roleText}>Role</Text>
          <InputPicker
            style={{
              backgroundColor: COLOUR_FORM_CONTROL_BACKGROUND,
              borderWidth: 0.5,
              borderColor: COLOUR_SECONDARY_GREY,
            }}
            dropDownContainerStyle={{
              backgroundColor: 'white',
              borderWidth: 0.5,
              borderColor: COLOUR_SECONDARY_GREY,
            }}
            placeholder="Choose role"
            data={Roles}
            onChangeValue={role => {
              updateFormField({role});
            }}
          />
        </View>
        <Button
          onPress={onSubmit}
          loading={isLoading}
          title="Send Invite"
          style={{position: 'absolute', bottom: 40, width: '100%'}}
        />
        <InviteSuccessModal sheetRef={sheetRef} />
      </View>
    </HeaderWrapper>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
    paddingVertical: 10,
  },
  addStaffText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18.75,
    color: COLOUR_TERRACOTTA,
    marginVertical: 10,
  },
  roleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16.41,
    color: COLOUR_DARK_GREEN,
    marginBottom: 15,
  },
  roleContainer: {
    marginTop: 30,
  },
});

export default AddStaffScreen;

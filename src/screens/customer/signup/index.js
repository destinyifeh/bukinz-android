import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import BestInputss from '../../../components/ErrorBoundary';
import Input from '../../../components/Input';
import SignupFormInput from './components/SignupInput';
export default function CustomerSignupScreen(props) {
  const FormInput = () => {
    return (
      <View>
        <TextInput
          mode="outlined"
          label={'Boss'}
          right={<TextInput.Icon name="eye" />}
          style={{backgroundColor: 'green'}}
        />
      </View>
    );
  };
  return (
    <View>
      <Text>Sign Up for customer</Text>
      <Text>Create an account to enjoy great services.</Text>

      <View>
        <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          style={{backgroundColor: 'grey'}}
        />

        <SignupFormInput icon="eye" />
        <BestInputss />
        <Input label="Business name" />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Mac')}>
        <Text>Go Mac</Text>
      </TouchableOpacity>
    </View>
  );
}

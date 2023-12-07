import * as React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
const SignupFormInput = () => {
  return (
    <View>
      <TextInput
        label={'Boss'}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        style={{backgroundColor: 'grey'}}
      />
    </View>
  );
};

export default SignupFormInput;

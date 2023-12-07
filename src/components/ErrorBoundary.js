import * as React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

const BestInputss = ({icon}) => {
  return (
    <View>
      <TextInput
        label={'dee'}
        right={<TextInput.Icon icon={icon} />}
        style={{backgroundColor: 'red'}}
      />
    </View>
  );
};

export default BestInputss;

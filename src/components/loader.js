import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export default function Loader({color, size}) {
  return (
    <View>
      <ActivityIndicator
        color={color ? color : 'white'}
        size={size ? size : 35}
      />
    </View>
  );
}

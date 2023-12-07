import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {COLOUR_DARK_GREEN, COLOUR_GREEN} from '../constants/Styles';
import GlobalStyles from '../styles/globalStyles';
const Button = ({
  title,
  style,
  disabled,
  loading,
  onPress,
  backgroundColor,
  disabledBackgroundColor,
  buttonTextStyle,
}) => {
  return (
    <View style={{...style}}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          GlobalStyles.button,
          {
            backgroundColor:
              disabled || loading
                ? disabledBackgroundColor || COLOUR_GREEN
                : backgroundColor || COLOUR_DARK_GREEN,
          },
        ]}
        disabled={disabled || loading}>
        {loading ? (
          <ActivityIndicator color={'white'} style={{top: 13}} />
        ) : (
          <Text style={[GlobalStyles.buttonText, {...buttonTextStyle}]}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

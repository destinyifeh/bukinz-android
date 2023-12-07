import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {
  COLOUR_FORM_CONTROL_BACKGROUND,
  COLOUR_GREEN,
  COLOUR_SECONDARY_GREY,
  FONT_FAMILY_BODY,
} from '../constants/Styles';

const Input = ({
  label,
  rightIconName,
  onChangeText,
  keyboardType,
  secureTextEntry,
  onPressRightIcon,
  value,
  textContentType,
  onFocus,
  hintColor,
  inputError,
  isLoading,
  iconSize,
  disabled,
  rightIcon,
  placeholder,
  inputRef,
}) => {
  console.log(isLoading, 'loader');
  return (
    <View>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        // defaultValue={value}
        right={
          rightIcon ? (
            <TextInput.Icon icon={() => rightIcon()} />
          ) : (
            <TextInput.Icon
              icon={rightIconName}
              color="grey"
              onPress={onPressRightIcon}
              size={iconSize && iconSize}
            />
          )
        }
        style={{
          backgroundColor: COLOUR_FORM_CONTROL_BACKGROUND,
          marginTop: 15,
        }}
        outlineStyle={{
          borderRadius: 10,
          borderWidth: 0.5,
        }}
        contentStyle={{
          fontFamily: FONT_FAMILY_BODY,
        }}
        activeOutlineColor={COLOUR_GREEN}
        outlineColor={value ? COLOUR_GREEN : COLOUR_SECONDARY_GREY}
        cursorColor={COLOUR_SECONDARY_GREY}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        onFocus={onFocus}
        placeholder={placeholder}
        error={!!inputError}
        disabled={isLoading || disabled}
        ref={inputRef}
      />
    </View>
  );
};

export default Input;

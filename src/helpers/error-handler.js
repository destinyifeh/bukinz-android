import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOUR_DARK_GREEN, FONT_FAMILY_BODY} from '../constants/Styles';
import {flashErrorMessage} from './flash-message';
export const handleError = code => {
  switch (code) {
    case 500:
      return flashErrorMessage('Something went wrong');
    case 401:
      return flashErrorMessage('Error');

    default:
      return flashErrorMessage('Something went wrong. Try again later.');
  }
};

export const ErrorNotifier = ({onPress}) => {
  return (
    <View style={{marginVertical: 20, alignSelf: 'center'}}>
      <Text
        style={{
          fontFamily: FONT_FAMILY_BODY,
          fontSize: 16,
          fontWeight: '400',
          lineHeight: 18.75,
          textAlign: 'center',
          color: 'grey',
        }}>
        Something went wrong. Try reloading.
      </Text>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: COLOUR_DARK_GREEN,
          width: 100,
          height: 32,
          borderRadius: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          alignSelf: 'center',
          marginTop: 25,
        }}>
        <Ionicons name="reload" color="white" size={20} />
        <Text
          style={{
            color: 'white',
            fontFamily: FONT_FAMILY_BODY,
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 16.41,
          }}>
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  );
};

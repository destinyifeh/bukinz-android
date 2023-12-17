import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
} from '../../../constants/Styles';
export default function CustomerHeader({title}) {
  const sheetRef = React.useRef();
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: COLOUR_DARK_GREEN, height: 103}}>
      <View style={{top: 70}}>
        <View style={styles.headerTextIconContainer}>
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTextIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '500',
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
  },

  headerMainView: {
    backgroundColor: 'white',

    //height: '100%',
    flex: 1,
    width: '100%',
  },

  headerDayText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 16,
    color: COLOUR_BLACK,
  },
});

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
} from '../constants/Styles';

export default function HeaderWrapper({
  title,
  children,
  contentContainerStyle,
}) {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: COLOUR_DARK_GREEN}}>
      <View style={{marginTop: 40, flex: 1}}>
        <View style={styles.headerTextIconContainer}>
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <View style={styles.headerViewDesign}></View>

        <View style={[styles.headerMainView, {...contentContainerStyle}]}>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTextIconContainer: {
    marginBottom: 35,
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
  headerViewDesign: {
    height: 10,
    width: '93%',
    alignSelf: 'center',
    backgroundColor: COLOUR_SECONDARY_GREY,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerMainView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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

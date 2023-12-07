import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_THIN,
} from '../../../../../constants/Styles';

export default function MessageDetailHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <View style={styles.headerContentInner}>
          <TouchableOpacity
            style={{marginRight: 15}}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <View style={styles.userIcon}>
            <Feather name="user" size={25} color="white" />
          </View>
          <View>
            <Text style={styles.headerContentTitle}>desto is here</Text>
            <Text style={styles.headerContentDesc}>Last Available 15m ago</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="more-vertical" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOUR_DARK_GREEN,
    width: '100%',
    height: 124,
  },
  userIcon: {
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: COLOUR_SECONDARY_GREY,
    marginRight: 10,
    height: 39,
    width: 39,
    alignItems: 'center',
    top: 2,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 65,
    marginHorizontal: 20,
  },
  headerContentInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContentTitle: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: 'white',
  },
  headerContentDesc: {
    fontFamily: FONT_FAMILY_BODY_THIN,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: 'white',
    top: 3,
  },
});

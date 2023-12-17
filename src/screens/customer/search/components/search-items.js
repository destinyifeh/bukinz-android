import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import arrowBackCircle from '../../../../assets/icons/arrow-back-circle.png';
import man2 from '../../../../assets/images/man2.jpg';
import {FONT_FAMILY_BODY} from '../../../../constants/Styles';
export const CustomerSearchItems = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentContainer}>
      <View style={styles.contentInnerContainer}>
        <Image source={man2} style={styles.image} />
        <View>
          <Text style={styles.title}>King Charles</Text>
          <Text style={styles.desc}>Electrician </Text>
          <View style={styles.rating}>
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchProfileScreen')}>
        <Image source={arrowBackCircle} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    color: 'grey',
    marginBottom: 10,
    paddingVertical: 8,
  },
  contentInnerContainer: {flexDirection: 'row', alignItems: 'center', gap: 12},
  rating: {
    flexDirection: 'row',
  },

  title: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
    color: '#000000',
  },

  desc: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    color: 'grey',
  },
  image: {width: 50, height: 50, borderRadius: 50},
});

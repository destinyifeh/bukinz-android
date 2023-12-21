import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import man2 from '../../../../assets/images/man2.jpg';

import {useNavigation} from '@react-navigation/native';
import {
  COLOUR_BLACK,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_FAMILY_BODY_THIN,
} from '../../../../constants/Styles';

const Services = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity>
        <ImageBackground
          source={man2}
          style={styles.image}
          imageStyle={styles.imageStyle}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{width: 146, height: 97, borderRadius: 15}}>
            <LinearGradient
              style={styles.innerShadowContainer}
              colors={['rgba(255, 255, 255, 0.9)', 'rgba(0, 0, 0, 0.8)']}>
              <View style={styles.serviceLocationContainer}>
                <Ionicons name="location" size={9} color="white" />
                <Text style={styles.serviceLocation}>Lagos, Nigeria</Text>
              </View>
            </LinearGradient>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>

      <View style={{marginTop: 10}}>
        <Text style={styles.serviceTitleText}>Parking Paints</Text>
        <Text style={styles.serviceDescText}>Painting service</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 30,
  },
  innerShadowContainer: {
    width: 146,
    height: 20,
    top: 77,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  serviceTitleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: '500',
    color: COLOUR_BLACK,
  },
  serviceDescText: {
    fontFamily: FONT_FAMILY_BODY_THIN,
    fontSize: 12,
    lineHeight: 14.06,
    fontWeight: '400',
    color: '#333333',
    top: 3.5,
  },

  serviceLocation: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 10,
    lineHeight: 11.72,
    fontWeight: '400',
    color: 'white',
  },
  serviceLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    left: 10,
    paddingTop: 3.5,
  },

  image: {
    width: 146,
    height: 97,
    borderRadius: 15,
  },
  imageStyle: {
    width: 146,
    height: 97,
    borderRadius: 15,
  },
});

export default Services;

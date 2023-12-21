import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import man2 from '../../../../assets/images/man2.jpg';

import {useNavigation} from '@react-navigation/native';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_FAMILY_BODY_THIN,
} from '../../../../constants/Styles';

const RelatedServices = () => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={man2}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{width: '100%', height: 158, borderRadius: 15}}>
          <LinearGradient
            style={styles.innerShadowContainer}
            //start={{x: 0, y: 0}}
            //end={{x: 1, y: 1}}
            colors={['rgba(255, 255, 255, 0.9)', 'rgba(0, 0, 0, 0.8)']}>
            <View style={styles.serviceLocationContainer}>
              <Ionicons name="location" size={16} color="white" />
              <Text style={styles.serviceLocation}>Lagos, Nigeria</Text>
            </View>
          </LinearGradient>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.bookingContainer}>
        <View>
          <Text style={styles.serviceTitleText}>Parking Paints</Text>
          <Text style={styles.serviceDescText}>Painting service</Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 30,
  },
  innerShadowContainer: {
    width: '100%',
    height: 37,
    top: 120,
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
  },

  buttonContainer: {
    width: 100,
    minHeight: 32,
    borderRadius: 10,
    gap: 10,
    backgroundColor: COLOUR_DARK_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'white',
  },
  bookingContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceLocation: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: '400',
    color: 'white',
  },
  serviceLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 3,
    right: 10,
    paddingTop: 3.5,
    top: 5,
  },

  image: {
    width: '100%',
    height: 158,
    borderRadius: 15,
  },
  imageStyle: {
    width: '100%',
    height: 158,
    borderRadius: 15,
  },
});

export default RelatedServices;

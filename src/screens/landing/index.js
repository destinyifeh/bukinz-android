import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import landingBackgound from '../../assets/images/appointment_background.png';
import {
  COLOUR_DARK_GREEN,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_FAMILY_BODY_THIN,
  MAX_ALLOWED_WIDTH,
} from '../../constants/Styles';
const deviceWidth = Dimensions.get('window').width;
export default function LandingScreen() {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <ImageBackground
      source={landingBackgound}
      style={styles.mainContainer}
      resizeMode="cover">
      <View style={styles.mainInnerContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>Login</Text>
          <Text style={styles.contentText}>
            Please choose from the option which best satisfies you
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CustomerScreen')}>
            <Text style={styles.buttonText}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MerchantScreen')}
            style={[styles.button, {backgroundColor: 'transparent'}]}>
            <Text style={[styles.buttonText, {color: 'white'}]}>Merchant</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Dont't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('WelcomeScreen')}>
              <Text style={styles.loginText2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainInnerContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 281,
    bottom: 50,
  },
  contentTitle: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    lineHeight: 37.5,
    textAlign: 'center',
    bottom: 10,
  },

  contentText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 16.41,
    color: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
    width: '95%',
  },
  buttonText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: '500',
    textAlign: 'center',
    color: COLOUR_DARK_GREEN,
  },
  button: {
    height: 44,
    borderRadius: 10,
    width: '100%',
    padding: 10,
    borderWidth: 0.5,
    justifyContent: 'center',
    marginVertical: 15,
    backgroundColor: 'white',
    borderColor: 'white',
  },

  loginContainer: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  loginText: {
    fontFamily: FONT_FAMILY_BODY_THIN,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'white',
  },
  loginText2: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18.75,
    color: 'white',
  },
});

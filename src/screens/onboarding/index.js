import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import progressButton1 from '../../assets/images/Progress_button.png';
import progressButton2 from '../../assets/images/Progress_button2.png';
import progressButton3 from '../../assets/images/Progress_button3.png';
import progressButton4 from '../../assets/images/Progress_button4.png';

import * as Animatable from 'react-native-animatable';
import landingBackgound from '../../assets/images/appointment_background.png';
import {
  COLOUR_DARK_GREEN,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../constants/Styles';
import {FIRST_TIME_USER} from '../../constants/configs';
import {saveData} from '../../services/dataServices';
const deviceWidth = Dimensions.get('window').width;
export default function OnBoardingScreen() {
  const navigation = useNavigation();
  const [ItemIndex, setItemIndex] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const handleNavigation = async () => {
    await saveData(FIRST_TIME_USER, false);
    navigation.replace('WelcomeScreen');
  };

  const itemOne = () => {
    return (
      <View style={styles.content}>
        <View style={styles.contentTitleLayout}>
          <Text style={styles.contentTitle}>
            “Personalise your excellence.”
          </Text>
        </View>

        <View style={styles.contentTextLayout}>
          <Text style={styles.contentText}>
            Discover the freedom of choosing service providers that align with
            your expectations.
          </Text>
        </View>
        <TouchableOpacity style={styles.navIconContainer} onPress={onPresItem}>
          <Image
            source={progressButton1}
            resizeMode="contain"
            //style={{width: 80, height: 80}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const itemTwo = () => {
    return (
      <View style={styles.content}>
        <View style={styles.contentTitleLayout}>
          <Text style={styles.contentTitle}>
            “Experience all in one solution”
          </Text>
        </View>

        <View style={styles.contentTextLayout}>
          <Text style={styles.contentText}>
            Always staying in the loop, ensuring that you never miss a beat in
            your service journey.
          </Text>
        </View>
        <TouchableOpacity style={styles.navIconContainer} onPress={onPresItem}>
          <Image
            source={progressButton2}
            resizeMode="contain"
            //style={{width: 80, height: 80}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const itemThree = () => {
    return (
      <View style={styles.content}>
        <View style={styles.contentTitleLayout}>
          <Text style={styles.contentTitle}>
            "Easily book your preferred services."
          </Text>
        </View>

        <View style={styles.contentTextLayout}>
          <Text style={styles.contentText}>
            Guaranteed seamless communication between you and the professionals
            to ensure smooth services.
          </Text>
        </View>
        <TouchableOpacity style={styles.navIconContainer} onPress={onPresItem}>
          <Image
            source={progressButton3}
            resizeMode="contain"
            //style={{width: 80, height: 80}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const itemFour = () => {
    return (
      <View style={styles.content}>
        <View style={styles.contentTitleLayout}>
          <Text style={styles.contentTitle}>
            "Tailored preferences that matter to you."
          </Text>
        </View>

        <View style={styles.contentTextLayout}>
          <Text style={styles.contentText}>
            Get an overview of how you are performing and motivate yourself to
            achieve even more.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.navIconContainer}
          onPress={handleNavigation}>
          <Image
            source={progressButton4}
            resizeMode="contain"
            //style={{width: 80, height: 80}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = () => {
    switch (ItemIndex) {
      case 0:
        return (
          <Animatable.View animation="fadeIn">{itemOne()}</Animatable.View>
        );
      case 1:
        return (
          <Animatable.View animation="fadeIn">{itemTwo()}</Animatable.View>
        );
      case 2:
        return (
          <Animatable.View animation="fadeIn">{itemThree()}</Animatable.View>
        );
      case 3:
        return (
          <Animatable.View animation="fadeIn">{itemFour()}</Animatable.View>
        );
      default:
        return null;
    }
  };

  const onPresItem = () => {
    setItemIndex(prevIndex => (prevIndex + 1) % 4);
  };
  return (
    <ImageBackground
      source={landingBackgound}
      style={styles.mainContainer}
      resizeMode="cover">
      <View style={styles.mainInnerContainer}>
        <TouchableOpacity
          style={styles.skipContainer}
          onPress={handleNavigation}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.contentContainer}>{renderItem()}</View>
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
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
  },
  content: {
    minHeight: 350,
    width: 311,
    borderRadius: 48,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  contentTitleLayout: {
    width: 246,
    height: 68,
    alignSelf: 'center',
    marginTop: 40,
  },

  contentTextLayout: {
    width: 247,
    height: 48,
    opacity: 0.4,
    alignSelf: 'center',
    marginTop: 10,
  },
  contentTitle: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28.13,
    textAlign: 'center',
    color: 'black',
  },

  contentText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 16.41,
    color: 'black',
  },
  navIconContainer: {
    padding: 10,
    alignSelf: 'center',
    marginTop: 40,
  },
  skipText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.6,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  skipContainer: {
    height: 20,
    width: 28,
    top: 64,
    alignSelf: 'flex-end',
    right: 15,
  },
});

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import {
  COLOUR_DARK_GREEN,
  COLOUR_GHOST_WHITE,
  COLOUR_GREEN,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_THIN,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import {
  flashAlertMesage,
  flashErrorMessage,
  flashSuccessMessage,
} from '../../../../helpers/flash-message';
import UploadModal from './components/UploadModal';
const {width, height} = Dimensions.get('window');
export default function ProfileSettingsScreen() {
  const [profileImage, setProfileImage] = React.useState('');
  const [photoLoader, setPhotoLoader] = React.useState(false);
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const sheetRef = useRef();

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const handleLiveUpload = async () => {
    setPhotoLoader(true);
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.5,
        //includeBase64: true,
      };
      const response = await launchCamera(options);
      if (response.didCancel) {
        console.log('Cancelled');
        setPhotoLoader(false);

        return false;
      } else if (response.errorMessage) {
        console.log('Image picker error', response.errorMessage);
        setPhotoLoader(false);
        flashAlertMesage('Oops! Something went wrong. Please try again');
      } else {
        console.log(response.assets, 'asset');
        const {assets} = response;

        setTimeout(() => {
          setProfileImage(assets);
          setPhotoLoader(false);
          sheetRef.current?.close();
          flashSuccessMessage('Profile photo updated');
        }, 5000);
      }
    } catch (err) {
      setPhotoLoader(false);
      flashErrorMessage('Oops! Something went wrong. Please try again');

      console.log(err);
    }
  };
  const handleGalleryUpload = async () => {
    setPhotoLoader(true);
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.5,
        //includeBase64: true,
      };
      const response = await launchImageLibrary(options);
      if (response.didCancel) {
        console.log('Cancelled');
        setPhotoLoader(false);

        return false;
      } else if (response.errorMessage) {
        console.log('Gallery mage picker error', response.errorMessage);
        setPhotoLoader(false);
        flashAlertMesage('Oops! Something went wrong. Please try again');
      } else {
        console.log(response.assets, 'asset');
        const {assets} = response;
        setTimeout(() => {
          setProfileImage(assets);
          setPhotoLoader(false);
          sheetRef.current?.close();

          flashSuccessMessage('Profile photo updated');
        }, 5000);
      }
    } catch (err) {
      setPhotoLoader(false);
      flashErrorMessage('Oops! Something went wrong. Please try again');
      console.log(err);
    }
  };
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: COLOUR_GHOST_WHITE}}>
        <View style={styles.headerContainer}>
          <View style={{marginTop: 60}}>
            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={20} color="white" />
            </TouchableOpacity>
            <View style={{alignSelf: 'center'}}>
              <View style={styles.topUserView}>
                <TouchableOpacity
                  style={profileImage ? {} : styles.userIcon}
                  onPress={() => sheetRef.current?.open()}>
                  {profileImage ? (
                    <Image
                      source={profileImage}
                      style={styles.userIcon}
                      resizeMode="contain"
                    />
                  ) : (
                    <Feather name="user" size={40} color={'grey'} />
                  )}
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.camera}
                onPress={() => sheetRef.current?.open()}>
                <Feather name="camera" size={10} color="white" />
              </TouchableOpacity>
              <View style={{marginTop: 15}}>
                <Text style={styles.usernameText}>donaldspace@gmail.com</Text>
                <View style={styles.emailContainer}>
                  <MaterialCommunityIcons
                    size={20}
                    color={'white'}
                    name="email-check-outline"
                  />
                  <Text style={styles.emailText}>donaldspace@gmail.com</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.contentContainer,
            {
              width:
                width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
            },
          ]}>
          <Input
            label="Business"
            value="Donald Space"
            disabled={true}
            rightIcon={() => <EvilIcons name="lock" color="grey" size={20} />}
          />
          <Input
            label="Email"
            value="donaldspace@gmail.com"
            rightIcon={() => <EvilIcons name="lock" color="grey" size={20} />}
            disabled={true}
          />

          <Input label="Phone number" value="+44 30 4567 4222" />
          <Input
            label="Business address"
            value="4140 Parker Rd. Allentown, New Mexico 31134"
          />
          <Input label="Post code" value="G51 2UZ" />

          <Button title="Update" style={styles.button} />
        </View>
        <UploadModal
          sheetRef={sheetRef}
          handleGalleryUpload={handleGalleryUpload}
          handleLiveUpload={handleLiveUpload}
          photoLoader={photoLoader}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOUR_DARK_GREEN,
    width: '100%',
    height: 259,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  contentContainer: {
    marginTop: 10,
    alignSelf: 'center',
    padding: 10,
    flex: 1,
  },
  userIcon: {
    borderWidth: 3,
    borderRadius: 50,
    borderColor: 'grey',
    height: 70,
    width: 70,
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
  },
  topUserView: {
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
    width: 76,
    height: 76,
    borderColor: COLOUR_GREEN,
    backgroundColor: COLOUR_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center',
  },
  emailText: {
    fontFamily: FONT_FAMILY_BODY_THIN,
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'white',
    left: 5,
  },
  camera: {
    position: 'absolute',
    top: 60,
    right: 55,
    backgroundColor: COLOUR_GREEN,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  button: {
    marginTop: 50,
    marginBottom: 10,
  },
  emailContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    top: 5,
  },
});

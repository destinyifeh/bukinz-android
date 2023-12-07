import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  COLOUR_DARK_GREEN,
  COLOUR_GHOST_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
} from '../../../../../constants/Styles';

const UploadModal = ({
  sheetRef,
  handleGalleryUpload,
  handleLiveUpload,
  photoLoader,
}) => {
  const {width, height} = useWindowDimensions();

  return (
    <RBSheet
      ref={sheetRef}
      animationType="fade"
      closeOnDragDown={true}
      duration={300}
      height={height * 0.42}
      customStyles={{
        container: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: COLOUR_GHOST_WHITE,
        },
      }}>
      <View
        style={{
          marginHorizontal: 20,
          width: width > 480 ? 480 : width * 0.9,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => sheetRef?.current?.close()}>
          <AntDesign name="close" size={20} color="grey" />
        </TouchableOpacity>
        <View style={{marginVertical: 10}}>
          <Text style={styles.title}>Upload Image</Text>
          {photoLoader ? (
            <View style={{alignSelf: 'center', marginTop: 30}}>
              <Text>Updating your profile image...</Text>
            </View>
          ) : (
            <>
              <TouchableOpacity
                onPress={handleLiveUpload}
                style={[
                  styles.photoTextContainer,
                  {
                    borderBottomWidth: 0.5,
                    borderColor: 'grey',
                    paddingVertical: 20,
                  },
                ]}>
                <View style={styles.photoTextContainerInner}>
                  <View style={styles.cameralContainer}>
                    <MaterialCommunityIcons
                      name="camera-outline"
                      size={20}
                      color={COLOUR_DARK_GREEN}
                    />
                  </View>
                  <View>
                    <Text style={styles.photoTitleText}>Take Photo</Text>
                    <Text style={styles.photoDescText}>
                      Take a live snapshot
                    </Text>
                  </View>
                </View>
                <View>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.photoTextContainer}
                onPress={handleGalleryUpload}>
                <View style={styles.photoTextContainerInner}>
                  <View style={styles.cameralContainer}>
                    <MaterialCommunityIcons
                      name="camera-plus-outline"
                      size={20}
                      color={COLOUR_DARK_GREEN}
                    />
                  </View>
                  <View>
                    <Text style={[styles.photoTitleText, {paddingTop: 5}]}>
                      Upload from Gallery
                    </Text>
                    <Text style={styles.photoDescText}>
                      Add photo from phone
                    </Text>
                  </View>
                </View>
                <View>
                  <Ionicons name="chevron-forward" size={20} color="grey" />
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18.75,
    color: COLOUR_DARK_GREEN,
  },
  photoTitleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18.75,
    color: 'black',
  },
  photoTextContainer: {
    marginTop: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  photoTextContainerInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoDescText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
    color: 'grey',
    marginTop: 5,
  },
  cameralContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#8FBC8F33',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default UploadModal;

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import checkmark from '../../../../assets/images/checkmark.png';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
} from '../../../../constants/Styles';
import GlobalStyles from '../../../../styles/globalStyles';
export default function ResetModal({onToggleModal, isVisible}) {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.replace('Login');
    onToggleModal();
  };
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => onToggleModal()}>
            <MaterialIcon name="clear" size={22} color={COLOUR_BLACK} />
          </TouchableOpacity>
          <View style={{alignSelf: 'center', marginBottom: 20}}>
            {/* <MaterialCommunityIcons
              name="checkbox-marked-circle-outline"
              size={80}
              color={COLOUR_DARK_GREEN}
            /> */}
            <Image source={checkmark} resizeMode="contain" />
          </View>
          <Text style={styles.congratulationText}>Congratulation !!</Text>
          <Text style={styles.contentText}>
            Your password has been updated successfully
          </Text>
          <TouchableOpacity
            style={styles.proceed}
            onPress={() => handleLogin()}>
            <Text
              style={[
                GlobalStyles.bottomText2,
                {fontWeight: 'bold', marginRight: 10},
              ]}>
              Proceed to Login
            </Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color={COLOUR_DARK_GREEN}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    minHeight: '30%',
    padding: 10,
    borderRadius: 8,
  },
  congratulationText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontSize: 24,
    textAlign: 'center',
    color: COLOUR_TERRACOTTA,
    lineHeight: 28.13,
  },
  contentText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 18.75,
    fontWeight: '300',
  },
  proceed: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    alignSelf: 'center',
  },
});

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../../components/Button';
import DialogBox from '../../../../components/DialogBox';
import HeaderWrapper from '../../../../components/HeaderWrapper';
import {
  COLOUR_DARK_GREEN,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import Staffs from './components/staffs';
const deviceWidth = Dimensions.get('window').width;

export default function StaffsScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const checkStaff = false;

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const noStaffAvailable = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={styles.noStaffText}>No staff or employee</Text>
        <Text style={styles.noStaffDesc}>
          No worries!! you can add a user to your staff list{' '}
        </Text>
        <Button
          title="Add Staff"
          onPress={() => navigation.navigate('AddStaff')}
        />
      </View>
    );
  };

  const actionModal = () => {
    return (
      <DialogBox isVisible={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', bottom: 7}}
              onPress={toggleModal}>
              <MaterialIcons name="clear" size={20} color="grey" />
            </TouchableOpacity>
            <Text style={styles.modalText}>
              Are you sure you want to delete user from staff list?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  {
                    backgroundColor: COLOUR_TERRACOTTA,
                    borderColor: COLOUR_TERRACOTTA,
                  },
                ]}>
                <Text style={[styles.modalText, {color: 'white'}]}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  {
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: COLOUR_DARK_GREEN,
                  },
                ]}
                onPress={toggleModal}>
                <Text style={[styles.modalText, {color: COLOUR_DARK_GREEN}]}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </DialogBox>
    );
  };
  return (
    <HeaderWrapper
      title="Staffs"
      contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.mainContainer}>
        {checkStaff ? noStaffAvailable() : <Staffs toggleModal={toggleModal} />}
        {actionModal()}
      </View>
    </HeaderWrapper>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width:
      deviceWidth > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : deviceWidth * 0.9,
    alignSelf: 'center',
    flex: 1,
  },

  noStaffText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28.13,
    color: COLOUR_DARK_GREEN,
    textAlign: 'center',
  },
  noStaffDesc: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 25,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 273,
    height: 171,
    alignSelf: 'center',
    padding: 15,
  },
  modalText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: 'center',
    fontWeight: '400',
    color: '#929090',
  },
  modalButton: {
    width: 94,
    height: 39,
    borderRadius: 10,
    padding: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
});

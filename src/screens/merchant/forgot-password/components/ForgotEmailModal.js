import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import emailEnvelope from '../../../../assets/images/email_envelope.png';
import {
  COLOUR_BLACK,
  COLOUR_GREEN,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_SIZE_MID,
} from '../../../../constants/Styles';
import GlobalStyles from '../../../../styles/globalStyles';
export default function ForgotEmailModal({
  sheetRef,
  email,
  navigateToVerifyEmail,
}) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <RBSheet
      ref={sheetRef}
      animationType="fade"
      closeOnDragDown={false}
      duration={300}
      height={height * 0.5}
      customStyles={{
        container: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}>
      <ScrollView
        style={{width: width * 0.9, alignSelf: 'center', paddingVertical: 20}}>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => sheetRef?.current?.close()}>
          <MaterialIcon name="clear" size={22} color={COLOUR_BLACK} />
        </TouchableOpacity>
        <View>
          <View style={{alignSelf: 'center', marginBottom: 10}}>
            <Image source={emailEnvelope} resizeMode="contain" />
          </View>
          <View>
            <Text style={styles.checkMailText}>Check your email</Text>
            <Text style={styles.checkMailText2}>
              Please check your email address{' '}
              <Text style={{color: COLOUR_GREEN}}>{email}</Text> for
              instructions to reset your password
            </Text>
          </View>
        </View>
        <View style={styles.continueResendView}>
          <TouchableOpacity
            style={[GlobalStyles.button2, {marginRight: 10}]}
            onPress={navigateToVerifyEmail}>
            <Text style={GlobalStyles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => sheetRef.current?.close()}
            style={[GlobalStyles.buttonOutline, {marginLeft: 10}]}>
            <Text style={GlobalStyles.buttonOutlineText}>Resend</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </RBSheet>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: 'flex-end',
  },
  checkMailText: {
    color: COLOUR_TERRACOTTA,
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 23.44,
  },
  checkMailText2: {
    color: 'grey',
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_MID,
    textAlign: 'center',
    marginTop: 15,
  },
  continueResendView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    width: '100%',
    alignSelf: 'center',
    //flexWrap: 'wrap',
  },
});

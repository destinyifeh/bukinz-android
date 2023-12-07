import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import checkMark from '../../../../../assets/images/checkmark.png';
import Button from '../../../../../components/Button';
import {
  COLOUR_DARK_GREEN,
  COLOUR_LITE_TERRACOTTA,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY_SEMIBOLD,
} from '../../../../../constants/Styles';
const InviteSuccessModal = ({sheetRef}) => {
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <RBSheet
      ref={sheetRef}
      animationType="fade"
      closeOnDragDown={true}
      duration={300}
      height={height * 0.43}
      customStyles={{
        container: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: '#FFFFFF',
        },
      }}>
      <View
        style={{
          width: width > 428 ? 428 : width * 0.9,
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.clearIcon}
          onPress={() => sheetRef?.current?.close()}>
          <MaterialIcons name="clear" size={20} color="grey" />
        </TouchableOpacity>
        <View style={{marginTop: 10}}>
          <Image source={checkMark} style={{height: 80}} resizeMode="contain" />
        </View>
        <Text style={styles.inviteText}>Invite sent successfully</Text>
        <Button
          title="Back to home"
          disabledBackgroundColor={COLOUR_LITE_TERRACOTTA}
          backgroundColor={COLOUR_TERRACOTTA}
          style={{width: '100%'}}
          onPress={() => navigation.replace('Dashboard')}
        />
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  clearIcon: {
    alignSelf: 'flex-end',
  },
  inviteText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18.75,
    color: COLOUR_DARK_GREEN,
    marginVertical: 30,
  },
});

export default InviteSuccessModal;

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import man from '../../../../../assets/images/man.jpg';
import {
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_SIZE_MID,
} from '../../../../../constants/Styles';
const CallItems = ({yesterday}) => {
  const navigation = useNavigation();
  const userImage = true;
  return (
    <View
      style={[
        styles.notificationItemsContainer,
        {
          borderBottomWidth: yesterday ? 0 : 0.5,
          paddingVertical: yesterday ? 0 : 20,
          borderColor: 'grey',
        },
      ]}>
      <View style={styles.notificationItemsTitleContainer}>
        <View style={styles.notificationLeftIconTitleContainer}>
          <View style={{marginRight: 8}}>
            {userImage ? (
              <Image source={man} style={styles.userIcon} resizeMode="cover" />
            ) : (
              <View style={styles.userIcon}>
                <Feather name="user" size={25} color={COLOUR_DARK_GREEN} />
              </View>
            )}
          </View>
          <View>
            <Text
              style={[
                styles.notificationItemsTitleText,
                {color: yesterday && COLOUR_TERRACOTTA},
              ]}>
              Donald Trump
            </Text>

            <Text style={styles.notificationItemsTime}>Today 12:33pm</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather
            name={yesterday ? 'arrow-down-left' : 'arrow-up-right'}
            size={25}
            color={yesterday ? COLOUR_TERRACOTTA : COLOUR_DARK_GREEN}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItemsContainer: {
    marginBottom: 20,
  },
  notificationItemsTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationLeftIconStepTwoDesign: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: COLOUR_DARK_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationLeftIconStepOneDesign: {
    height: 18.5,
    width: 18.5,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationItemsTitleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    fontSize: FONT_SIZE_MID,
    lineHeight: 20,
    color: '#0C0C0C',
  },
  notificationItemsTime: {
    color: 'grey',
    fontFamily: FONT_FAMILY_BODY,
    lineHeight: 20,
    fontWeight: '400',
    fontSize: 12,
    //marginTop: 5,
  },
  notificationItemsDescContainer: {
    marginTop: 10,
  },

  notificationLeftIconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: COLOUR_SECONDARY_GREY,
    marginRight: 5,
    height: 39,
    width: 39,
    alignItems: 'center',
  },
});

export default CallItems;

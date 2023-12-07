import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
//import Swiper from 'react-native-swiper';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import man1 from '../../../../assets/images/man.jpg';
import man2 from '../../../../assets/images/man2.jpg';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_GHOST_WHITE,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_SIZE_MID,
  FONT_SIZE_TITLE,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';

export default function ProfileScreen() {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  const mee = [
    {key: '1', image: man1},
    {key: '2', image: man2},
    {key: '3', image: man1},
    {key: '4', image: man2},
  ];
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_GHOST_WHITE);
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  const isUserImage = true;
  return (
    <View style={{flex: 1, backgroundColor: COLOUR_GHOST_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: width > 428 ? 428 : '100%',
            alignSelf: 'center',
          }}>
          {/* <Swiper
            activeDotStyle={{
              backgroundColor: COLOUR_TERRACOTTA,
              width: 16,
              height: 8,
              borderRadius: 6.58,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
            showsButtons={false}
            index={1}
            autoPlay={true}
            dotColor={'grey'}
            loop={true}
            style={styles.imageContainer}>
            <Image
              style={[styles.imageContainer, {width: '100%'}]}
              source={man1}
              resizeMode="stretch"
            />
            <Image
              style={[styles.imageContainer, {width: '100%'}]}
              source={man1}
              resizeMode="stretch"
            />

            <Image
              style={[styles.imageContainer, {width: '100%'}]}
              source={man2}
              resizeMode="stretch"
            />
            <Image
              style={[styles.imageContainer, {width: '100%'}]}
              source={man2}
              resizeMode="stretch"
            />
            <Image
              style={[styles.imageContainer, {width: '100%'}]}
              source={man2}
              resizeMode="stretch"
            />
          </Swiper> */}

          <SwiperFlatList
            autoplay
            autoplayLoop
            data={mee}
            index={0}
            showPagination
            paginationStyleItemActive={{
              width: 16,
              height: 8,
              borderRadius: 6.58,
              backgroundColor: COLOUR_TERRACOTTA,
              marginLeft: 3,
              marginRight: 3,
            }}
            paginationStyleItem={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
            }}
            renderItem={({item}) => (
              <View
                style={[
                  styles.imageContainer,
                  {width: width > 428 ? 428 : width, justifyContent: 'center'},
                ]}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{width: '100%', height: 178}}
                />
              </View>
            )}
          />

          <View style={styles.notificationIconView}>
            <View style={styles.dot}>
              <Entypo name="dot-single" size={30} color={COLOUR_TERRACOTTA} />
            </View>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <MaterialIcons
                name="notifications-none"
                color={COLOUR_DARK_GREEN}
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.topUserView}>
            {isUserImage ? (
              <Image
                source={man2}
                style={[styles.userIcon, {borderColor: 'transparent'}]}
                resizeMode="cover"
              />
            ) : (
              <TouchableOpacity style={styles.userIcon}>
                <Feather name="user" size={25} color={'grey'} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View
          style={{
            width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
            alignSelf: 'center',
          }}>
          <View style={styles.ratingSettingContainer}>
            <View style={styles.rating}>
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            </View>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => navigation.navigate('ProfileSettings')}>
              <Text style={styles.settingsButtonText}>Settings</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.profileDescriptionViewTitle}>Dez Global</Text>
          <Text style={styles.profileDescriptionViewText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.contactView}>
              <Feather name="phone-outgoing" size={20} color={'grey'} />
              <Text style={styles.contactText}>+23480889996</Text>
            </View>
            <View style={[styles.contactView, {marginLeft: 20}]}>
              <MaterialCommunityIcons
                size={20}
                color={'grey'}
                name="email-check-outline"
              />
              <Text style={styles.contactText}>bukinz@bukinz.com</Text>
            </View>
          </View>

          <View style={styles.contactView}>
            <Ionicons name="location-outline" size={20} color={'grey'} />

            <Text style={styles.contactText}>
              11, st paul avenue, luxemburg
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={styles.contactView}>
              <Feather name="clock" size={20} color={'grey'} />
              <Text style={styles.contactText}>
                Open until <Text style={{fontWeight: 'bold'}}>6:00am</Text>
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Staffs')}
              style={[styles.availabilityInnerView, {marginTop: 15}]}>
              <Text style={styles.availabilityEditText}>Edit</Text>
              <Ionicons
                name="arrow-forward"
                size={16}
                color={COLOUR_TERRACOTTA}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>Price</Text>
            <Text style={[styles.price, {color: COLOUR_DARK_GREEN}]}>
              $400 /hr
            </Text>
          </View>
          <View style={styles.availability}>
            <View style={styles.availabilityFirstView}>
              <Text style={styles.availabilityTitle}>Availability</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Availability')}
                style={[styles.availabilityInnerView, {marginBottom: 10}]}>
                <Text style={styles.availabilityEditText}>Edit</Text>
                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color={COLOUR_TERRACOTTA}
                />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.availabilityDay}>
                <Text style={{color: COLOUR_DARK_GREEN}}>Mon</Text>
              </View>
              <View style={styles.availabilityDay}>
                <Text style={{color: COLOUR_DARK_GREEN}}>Tue</Text>
              </View>
              <View style={styles.availabilityDay}>
                <Text style={{color: COLOUR_DARK_GREEN}}>Wed</Text>
              </View>
              <View style={styles.availabilityDay}>
                <Text style={{color: COLOUR_DARK_GREEN}}>Thur</Text>
              </View>
              <View style={styles.availabilityDay}>
                <Text style={{color: COLOUR_DARK_GREEN}}>Fri</Text>
              </View>
              <View style={styles.availabilityDay}>
                <Text style={{color: COLOUR_DARK_GREEN}}>Sat</Text>
              </View>
              <View style={styles.availabilityDay}>
                <Text style={{color: COLOUR_DARK_GREEN}}>Sun</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.serviceDescription}>
            <Text style={styles.serviceTitle}>Service Description</Text>

            <Text style={styles.serviceText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewTitle}>Reviews</Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text style={styles.reviewAuthor}>Donald Trump</Text>
                <Text style={[styles.reviewTime, {marginLeft: 10}]}>
                  30 min, ago
                </Text>
              </View>

              <Text style={[styles.reviewText]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <View style={styles.reviewNumberContainer}>
                <Text style={styles.reviewNumber}>100 Reviews</Text>
                <TouchableOpacity>
                  <Text style={styles.reviewViewAll}>View All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialIcon}>
              <Feather name="facebook" size={20} color={COLOUR_DARK_GREEN} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Feather name="instagram" size={20} color={COLOUR_DARK_GREEN} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Feather name="linkedin" size={20} color={COLOUR_DARK_GREEN} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Image source={require('../../../../assets/images/big-x.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 178,
    alignSelf: 'center',
  },
  notificationIconView: {
    borderRadius: 20,
    borderWidth: 0.5,
    backgroundColor: COLOUR_WHITE,
    borderColor: COLOUR_WHITE,
    height: 32,
    width: 32,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  dot: {position: 'absolute', bottom: 10, left: 12},
  topUserView: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 0.5,
    backgroundColor: COLOUR_WHITE,
    borderColor: COLOUR_WHITE,
    justifyContent: 'center',
    position: 'absolute',
    left: 16,
    top: 140,
  },
  userIcon: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLOUR_SECONDARY_GREY,
    height: 40,
    width: 40,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
  },
  rating: {
    flexDirection: 'row',
    //alignSelf: 'flex-end',
    marginRight: 20,
  },

  profileDescriptionViewTitle: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: FONT_SIZE_TITLE,
    lineHeight: 18.75,
    color: COLOUR_BLACK,
    marginBottom: 15,
  },
  profileDescriptionViewText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_MID,
    lineHeight: 16.41,
    fontWeight: '300',
    color: 'grey',
  },
  contactView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_MID,
    lineHeight: 16.41,
    color: 'grey',
    marginLeft: 5,
  },
  availability: {
    marginTop: 20,
  },
  availabilityTitle: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: FONT_SIZE_TITLE,
    lineHeight: 18.75,
    color: COLOUR_BLACK,
    marginBottom: 15,
  },
  availabilityEditText: {
    color: COLOUR_TERRACOTTA,
    fontSize: 12,
    fontFamily: FONT_FAMILY_BODY,
    lineHeight: 14.06,
    marginRight: 5,
  },
  availabilityDay: {
    width: 48,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOUR_DARK_GREEN,
    marginHorizontal: 5,
    marginTop: 8,
  },
  availabilityFirstView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  availabilityInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  reviewContainer: {
    marginTop: 20,
    marginBottom: 30,
  },

  reviewTitle: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: FONT_SIZE_TITLE,
    lineHeight: 18.75,
    color: COLOUR_BLACK,
    marginBottom: 15,
  },
  reviewText: {
    color: 'grey',
    fontSize: 12,
    fontFamily: FONT_FAMILY_BODY,
    lineHeight: 14.06,
  },
  reviewAuthor: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_MID,
    lineHeight: 16.41,
    fontWeight: '400',
    color: COLOUR_BLACK,
  },
  reviewTime: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    lineHeight: 14.06,
    fontWeight: '400',
    color: 'grey',
  },

  reviewNumber: {
    color: COLOUR_DARK_GREEN,
    fontSize: 12,
    fontFamily: FONT_FAMILY_BODY,
    lineHeight: 14.06,
    fontWeight: '400',
  },
  reviewViewAll: {
    color: COLOUR_DARK_GREEN,
    fontSize: 12,
    fontFamily: FONT_FAMILY_BODY,
    lineHeight: 14.06,
    fontWeight: '400',
  },
  reviewNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  serviceText: {
    color: 'grey',
    fontSize: 12,
    fontFamily: FONT_FAMILY_BODY,
    lineHeight: 14.06,
  },
  serviceTitle: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: FONT_SIZE_TITLE,
    lineHeight: 18.75,
    color: COLOUR_BLACK,
    marginBottom: 15,
  },
  serviceDescription: {
    marginTop: 20,
  },
  priceContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: FONT_SIZE_TITLE,
    lineHeight: 18.75,
    color: COLOUR_BLACK,
    marginBottom: 15,
  },

  settingsButtonText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.52,
    color: 'white',
  },
  settingsButton: {
    backgroundColor: COLOUR_DARK_GREEN,
    height: 32,
    width: 84,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  ratingSettingContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 14,
  },
  wrapper: {},
});

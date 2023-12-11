import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  BackHandler,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import bannerImage from '../../../../assets/images/appointment_background.png';
import customersIcon from '../../../../assets/images/every-user.png';
import staffsIcon from '../../../../assets/images/file-staff-one.png';
import availabilityIcon from '../../../../assets/images/schedule.png';
import priceIcon from '../../../../assets/images/sort-amount-up.png';

import {useFocusEffect} from '@react-navigation/native';
import userImage from '../../../../assets/images/man2.jpg';
import DialogBox from '../../../../components/DialogBox';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_GHOST_WHITE,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  FONT_SIZE_MID,
  FONT_SIZE_TITLE,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';

import {useSelector} from 'react-redux';
import homeAd from '../../../../assets/images/home-ad.png';
import homeAd2 from '../../../../assets/images/home-ad2.png';
import {AppointmentSkeleton} from '../../../../components/Skeletons';
import {APP_BASE_URL} from '../../../../constants/configs';
import {signIn} from '../../../../services/api/merchant/accountServices';
import Appointments from './components/Appointments';

export default function HomeScreen(props) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const [isLoadingAppointment, setIsloadingAppointment] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [ads, setAds] = React.useState([
    {key: '1', image: homeAd},
    {key: '2', image: homeAd2},
  ]);
  const currentRouteName = useSelector(state => state.global.currentRoute);
  console.log(APP_BASE_URL, 'api baseee');
  console.log(currentRouteName, 'Present route');
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_GHOST_WHITE);
      StatusBar.setBarStyle('dark-content');

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      let fetch = async () => {
        try {
          const dee = await signIn('dee');
          console.log(dee, 'demw');
        } catch (err) {
          console.log(err, 'api errors');
        }
      };
      fetch();

      return () => backHandler.remove();
    }, []),
  );

  // React.useEffect(() => {
  //   setIsloadingAppointment(true);
  //   setTimeout(() => {
  //     setIsloadingAppointment(false);
  //   }, 5000);
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        setIsloadingAppointment(false);
      }, 5000);
    }, []),
  );
  const backAction = () => {
    console.log('back button press');
    props.navigation.reset({index: 0, routes: [{name: 'Login'}]});
    return true;
  };
  const isImage = true;
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const isAppointmentAvailable = true;
  const noAppointment = () => {
    return (
      <View style={styles.noAppointmentContainer}>
        <Text style={styles.noAppointmentText}>No Appointment</Text>
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
              Are you sure you want to cancel the appointment?
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

  const adContainer = () => {
    return (
      <SwiperFlatList
        style={{marginBottom: 20, marginTop: 20}}
        autoplay
        autoplayLoop
        data={ads}
        index={0}
        autoplayDelay={5}
        showPagination={true}
        paginationStyle={{top: 195}}
        paginationStyleItemActive={{
          width: 7,
          height: 7,
          borderRadius: 6.58,
          backgroundColor: COLOUR_DARK_GREEN,
          marginLeft: 3,
          marginRight: 3,
        }}
        paginationStyleItemInactive={{
          backgroundColor: '#D9D9D9',
        }}
        paginationStyleItem={{
          width: 7,
          height: 7,
          borderRadius: 6.58,
          marginLeft: 3,
          marginRight: 3,
        }}
        renderItem={({item}) => (
          <View
            style={[
              styles.bannerContainer2,
              {
                width: width * 0.9,
              },
            ]}>
            <Image
              source={item.image}
              //resizeMode="cover"
              style={styles.bannerContainer2}
            />
          </View>
        )}
      />
    );
  };
  const comingSoon = true;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOUR_GHOST_WHITE,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.contentContainer,
            {
              width:
                width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
            },
          ]}>
          <View style={styles.userNotificationContainer}>
            <View>
              <View style={styles.userIconView}>
                {!isImage ? (
                  <TouchableOpacity style={styles.userIcon}>
                    <Feather name="user" size={25} color={COLOUR_TERRACOTTA} />
                  </TouchableOpacity>
                ) : (
                  <Image
                    source={userImage}
                    style={styles.userIcon}
                    resizeMode="cover"
                  />
                )}
                <View>
                  <Text
                    style={{
                      fontFamily: FONT_FAMILY_BODY,
                      fontSize: FONT_SIZE_MID,
                      color: COLOUR_BLACK,
                    }}>
                    Morning
                    <Text
                      style={{
                        fontFamily: FONT_FAMILY_BODY_BOLD,
                        fontSize: FONT_SIZE_TITLE,
                        color: COLOUR_BLACK,
                      }}>
                      {' '}
                      Biden
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONT_FAMILY_BODY,
                      fontSize: 12,
                      color: 'grey',
                      lineHeight: 14.06,
                    }}>
                    Are you ready for business today
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.notificationIconView}>
              <View style={styles.dot}>
                <Entypo name="dot-single" size={30} color={COLOUR_TERRACOTTA} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <MaterialIcons
                  name="notifications-none"
                  color={COLOUR_DARK_GREEN}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </View>
          {!comingSoon ? (
            <ImageBackground
              style={styles.bannerContainer}
              source={bannerImage}
              imageStyle={{borderRadius: 10}}>
              <View style={{padding: 10, marginTop: 5}}>
                <View style={styles.balanceContainer}>
                  <View>
                    <Text style={styles.totalBalanceText}>Total Balance</Text>
                    <Text style={styles.balanceText}>*******</Text>
                  </View>
                  <TouchableOpacity style={{top: 2, right: 5}}>
                    <Feather name="eye" size={18} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.accountContainer}>
                  <View style={{marginTop: 8}}>
                    <Text style={styles.accountName}>Paystack-Titan</Text>
                    <View style={styles.accountInnerContainer}>
                      <Text style={styles.accountNumber}>0123456789</Text>
                      <TouchableOpacity style={styles.copyTextContainer}>
                        <Ionicons name="copy-outline" color="white" size={18} />
                        <Text style={styles.copyText}>copy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.appointmentCompletedNumber}>21+</Text>
                    <Text style={styles.appointmentCompletedText}>
                      Appointment Completed
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          ) : (
            // <ImageBackground
            //   resizeMode="cover"
            //   style={styles.bannerContainer}
            //   source={homeAd}
            //   imageStyle={{borderRadius: 10}}></ImageBackground>
            adContainer()
            // adContainer2()
          )}

          <View style={styles.navigationContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Availability')}>
              <View style={styles.navigationIconContainer}>
                <Image source={availabilityIcon} resizeMode="contain" />
              </View>
              <Text style={styles.navigationText}>Availability</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Staffs')}>
              <View style={styles.navigationIconContainer}>
                <Image source={staffsIcon} resizeMode="contain" />
              </View>
              <Text style={styles.navigationText}>Staffs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.navigationIconContainer}>
                <Image source={priceIcon} resizeMode="contain" />
              </View>
              <Text style={[styles.navigationText, {left: 5}]}>Price</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.navigationIconContainer}>
                <Image source={customersIcon} resizeMode="contain" />
              </View>
              <Text style={styles.navigationText}>Customers</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.appointmentContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Text style={styles.upcomingAppointmentText}>
                Upcoming Appointment
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>

            {!isLoadingAppointment ? (
              <>
                {isAppointmentAvailable ? (
                  <>
                    <Appointments toggleModal={toggleModal} />
                    <Appointments toggleModal={toggleModal} />
                  </>
                ) : (
                  noAppointment()
                )}
              </>
            ) : (
              <>
                <AppointmentSkeleton />
                <AppointmentSkeleton />
              </>
            )}
          </View>
          {/* <View style={styles.transactionContainer}>
            <View style={styles.transactionInnerContainer}>
              <Text style={styles.recentTransactionText}>
                Recent Transations
              </Text>
              <TouchableOpacity>
                <Text style={styles.viewAllTransactionText}>View All</Text>
              </TouchableOpacity>
            </View>
            <Transactions />
            <Transactions />
            <Transactions />
            <Transactions />
            <Transactions />
          </View> */}
          {actionModal()}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 50,
    alignSelf: 'center',
    marginBottom: 30,
  },
  userNotificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userIcon: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLOUR_SECONDARY_GREY,
    marginRight: 5,
    height: 39,
    width: 39,
    alignItems: 'center',
  },
  notificationIconView: {
    borderRadius: 20,
    borderWidth: 0.5,
    backgroundColor: '#F5F9F5',
    borderColor: '#F5F9F5',
    padding: 2.5,
  },
  userIconView: {flexDirection: 'row'},
  dot: {position: 'absolute', bottom: 10, left: 12},
  bannerContainer: {
    width: '100%',
    height: 137,
    borderRadius: 10,
    top: 25,
    alignSelf: 'center',
    marginBottom: 25,
  },
  bannerContainer2: {
    width: '100%',
    height: 137,
    borderRadius: 10,
    alignSelf: 'center',
  },
  appointmentContainer: {
    top: 0,
  },
  navigationText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 14.61,
    color: 'black',
  },
  navigationIconContainer: {
    width: 35,
    height: 35,
    backgroundColor: '#8FBC8F33',

    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 8,
    alignSelf: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
    gap: 5,
  },
  upcomingAppointmentText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_TITLE,
    lineHeight: 18.75,
    fontWeight: '400',
    color: 'black',
  },
  viewAllText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 10,
    lineHeight: 11.72,
    fontWeight: '400',
    color: '#556B2F',
  },
  noAppointmentContainer: {
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    gap: 10,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  noAppointmentText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 23.44,
    color: COLOUR_DARK_GREEN,
  },

  transactionContainer: {
    marginVertical: 5,
  },
  transactionInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },

  recentTransactionText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'black',
  },
  viewAllTransactionText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14.06,
    color: COLOUR_DARK_GREEN,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalBalanceText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'white',
  },
  balanceText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 37.5,
    color: 'white',
    marginTop: 8,
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountName: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.06,
    color: 'white',
  },
  accountNumber: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'white',
  },

  accountInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 5,
  },
  copyTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  copyText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.06,
    color: 'white',
  },
  appointmentCompletedNumber: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'white',
    textAlign: 'center',
  },
  appointmentCompletedText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.06,
    color: 'white',
    textAlign: 'center',
    width: 84,
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

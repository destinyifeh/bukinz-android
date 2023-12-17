import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TextInput as SearchInput,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useFocusEffect} from '@react-navigation/native';
import userImage from '../../../assets/images/man2.jpg';
import DialogBox from '../../../components/DialogBox';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_GHOST_WHITE,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_FAMILY_BODY_THIN,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';

import {useSelector} from 'react-redux';
import category1 from '../../../assets/icons/customer_category1.png';
import category2 from '../../../assets/icons/customer_category2.png';
import category3 from '../../../assets/icons/customer_category3.png';
import category4 from '../../../assets/icons/customer_category4.png';
import homeAd from '../../../assets/images/home-ad.png';
import homeAd2 from '../../../assets/images/home-ad2.png';
import man2 from '../../../assets/images/man.jpg';
import man from '../../../assets/images/man2.jpg';

export default function CustomerHomeScreen(props) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const [isLoadingAppointment, setIsloadingAppointment] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [adss, setAdss] = React.useState([
    {key: '1', image: homeAd},
    {key: '2', image: homeAd2},
  ]);
  const [ads, setAds] = React.useState([
    {key: '1', image: man},
    {key: '2', image: man2},
    {key: '3', image: homeAd2},
  ]);
  const currentRouteName = useSelector(state => state.global.currentRoute);
  console.log(currentRouteName, 'Present route');
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');

      //   const backHandler = BackHandler.addEventListener(
      //     'hardwareBackPress',
      //     backAction,
      //   );

      let fetch = async () => {
        try {
          const dee = await signIn('dee');
          console.log(dee, 'demw');
        } catch (err) {
          console.log(err, 'api errors');
        }
      };
      fetch();

      //return () => backHandler.remove();
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
        paginationStyle={{top: 165}}
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
            style={{
              width: width,
            }}
            key={item.key}>
            <ImageBackground
              source={item.image}
              resizeMode="cover"
              style={[styles.bannerContainer, {backgroundColor: 'transparent'}]}
              imageStyle={styles.bannerContainer}>
              <LinearGradient
                //   ]}
                colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[styles.bannerContainer]}>
                <View
                  style={{
                    width: 141,
                    left: 20,
                    gap: 14,
                    top: 21,
                  }}>
                  <Text
                    style={{
                      fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
                      lineHeight: 23.44,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                    }}>
                    Pest control
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONT_FAMILY_BODY,
                      fontWeight: '400',
                      fontSize: 14,
                      lineHeight: 16.41,
                      color: 'white',
                    }}>
                    Your uninvited guests at home{' '}
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 100,
                      minHeight: 32,
                      borderRadius: 10,
                      gap: 10,
                      backgroundColor: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: FONT_FAMILY_BODY,
                        fontWeight: '400',
                        fontSize: 14,
                        lineHeight: 16.41,
                        color: COLOUR_DARK_GREEN,
                      }}>
                      Book Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </ImageBackground>
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
        backgroundColor: COLOUR_WHITE,
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
                {isImage ? (
                  <Ionicons name="location-outline" size={20} color="grey" />
                ) : (
                  <Image
                    source={userImage}
                    style={styles.userIcon}
                    resizeMode="cover"
                  />
                )}
                <View>
                  <Text style={styles.curentLocationText}>
                    Current Location
                  </Text>
                  <View style={styles.placeContainer}>
                    <Text style={styles.placeContainerText}>New York City</Text>
                    <AntDesign name="caretdown" size={9} COLOR="grey" />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.notificationIconView}>
              <View style={styles.dot}>
                <Entypo name="dot-single" size={30} color={COLOUR_TERRACOTTA} />
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CustomerNotificationScreen')
                }>
                <MaterialIcons
                  name="notifications-none"
                  color={COLOUR_DARK_GREEN}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </View>

          {actionModal()}

          <TouchableOpacity
            style={styles.homeSearchContainer}
            onPress={() => props.navigation.navigate('CustomerSearchScreen')}>
            <View style={{marginLeft: 10}}>
              <AntDesign name="search1" size={15} color="#666464" />
            </View>
            <SearchInput
              editable={false}
              style={{
                width: '100%',
                fontFamily: FONT_FAMILY_BODY_THIN,
                fontSize: 12,
                lineHeight: 14.06,
                fontWeight: '400',
              }}
              cursorColor={COLOUR_SECONDARY_GREY}
              placeholder="Search"
              //onChangeText={onSearch}
              //   defaultValue={value}
              placeholderTextColor="#666464"
            />
          </TouchableOpacity>
          <View style={{}}>{adContainer()}</View>
          <View style={styles.categoryContainer}>
            <Text style={styles.catergoryTitle}>Categories</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryIconContainer}>
              <TouchableOpacity>
                <Image source={category4} resizeMode="contain" />
                <Text style={styles.catergoryText}>Cleaner</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={category3} resizeMode="contain" />
                <Text style={styles.catergoryText}>Barber</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={category2} resizeMode="contain" />
                <Text style={styles.catergoryText}>Painter</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={category1} resizeMode="contain" />
                <Text style={styles.catergoryText}>Electrician</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={category1} resizeMode="contain" />
                <Text style={styles.catergoryText}>Another</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={category1} resizeMode="contain" />
                <Text style={styles.catergoryText}>other</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={styles.servicesContainer}>
            <View style={styles.servicesInnerContainer}>
              <Text style={styles.servicesTitle}>Services</Text>
              <TouchableOpacity>
                <Text style={styles.servicesViewAll}>View All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.servicesImageContainer}>
              <View>
                <TouchableOpacity>
                  <ImageBackground
                    source={man}
                    style={{width: 146, height: 97, borderRadius: 15}}
                    imageStyle={{width: 146, height: 97, borderRadius: 15}}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={{width: 146, height: 97, borderRadius: 15}}>
                      <View
                        style={{
                          width: 146,
                          height: 20,
                          top: 77,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          backgroundColor: '#000000',
                          opacity: 0.5,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                            left: 10,
                            paddingTop: 3.5,
                          }}>
                          <Ionicons
                            name="location-outline"
                            size={9}
                            color="white"
                          />
                          <Text
                            style={{
                              fontFamily: FONT_FAMILY_BODY,
                              fontSize: 10,
                              lineHeight: 11.72,
                              fontWeight: '400',
                              color: 'white',
                            }}>
                            Lagos, Nigeria
                          </Text>
                        </View>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>

                <View style={{marginTop: 10}}>
                  <Text style={styles.serviceTitleText}>Parking Paints</Text>
                  <Text style={styles.serviceDescText}>Painting service</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <ImageBackground
                    source={man}
                    style={{width: 146, height: 97, borderRadius: 15}}
                    imageStyle={{width: 146, height: 97, borderRadius: 15}}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={{width: 146, height: 97, borderRadius: 15}}>
                      <View
                        style={{
                          width: 146,
                          height: 20,
                          top: 77,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          backgroundColor: '#000000',
                          opacity: 0.5,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                            left: 10,
                            paddingTop: 3.5,
                          }}>
                          <Ionicons
                            name="location-outline"
                            size={9}
                            color="white"
                          />
                          <Text
                            style={{
                              fontFamily: FONT_FAMILY_BODY,
                              fontSize: 10,
                              lineHeight: 11.72,
                              fontWeight: '400',
                              color: 'white',
                            }}>
                            Edo, Nigeria
                          </Text>
                        </View>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={{marginTop: 10}}>
                  <Text style={styles.serviceTitleText}>I-Fitness</Text>
                  <Text style={styles.serviceDescText}>Gym service</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <ImageBackground
                    source={man}
                    style={{width: 146, height: 97, borderRadius: 15}}
                    imageStyle={{width: 146, height: 97, borderRadius: 15}}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={{width: 146, height: 97, borderRadius: 15}}>
                      <View
                        style={{
                          width: 146,
                          height: 20,
                          top: 77,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          backgroundColor: '#000000',
                          opacity: 0.5,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 3,
                            left: 10,
                            paddingTop: 3.5,
                          }}>
                          <Ionicons
                            name="location-outline"
                            size={9}
                            color="white"
                          />
                          <Text
                            style={{
                              fontFamily: FONT_FAMILY_BODY,
                              fontSize: 10,
                              lineHeight: 11.72,
                              fontWeight: '400',
                              color: 'white',
                            }}>
                            Kano, Nigeria
                          </Text>
                        </View>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={{marginTop: 10}}>
                  <Text style={styles.serviceTitleText}>Gshortz</Text>
                  <Text style={styles.serviceDescText}>Barbing service</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.recentServicesContainer}>
            <View style={styles.recentServicesInnerContainer}>
              <Text style={styles.recentServicesTitle}>Recent Services</Text>
              <TouchableOpacity>
                <Text style={styles.recentServicesViewAll}>View All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentServicesImageContainer}>
              <View>
                <TouchableOpacity>
                  <ImageBackground
                    source={man}
                    style={{width: 306, height: 141, borderRadius: 15}}
                    imageStyle={{width: 306, height: 141, borderRadius: 15}}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={{width: 306, height: 141, borderRadius: 15}}>
                      <View
                        style={{
                          width: 306,
                          height: 20,
                          top: 120.9,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          backgroundColor: '#000000',
                          opacity: 0.5,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: 3,
                            right: 10,
                            paddingTop: 3.5,
                          }}>
                          <Ionicons
                            name="location-outline"
                            size={9}
                            color="white"
                          />
                          <Text
                            style={{
                              fontFamily: FONT_FAMILY_BODY,
                              fontSize: 10,
                              lineHeight: 11.72,
                              fontWeight: '400',
                              color: 'white',
                            }}>
                            Lagos, Nigeria
                          </Text>
                        </View>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>

                <View style={{marginTop: 10}}>
                  <Text style={styles.serviceTitleText}>Parking Paints</Text>
                  <Text style={styles.serviceDescText}>Painting service</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <ImageBackground
                    source={man}
                    style={{width: 306, height: 141, borderRadius: 15}}
                    imageStyle={{width: 306, height: 141, borderRadius: 15}}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={{width: 306, height: 141, borderRadius: 15}}>
                      <View
                        style={{
                          width: 306,
                          height: 20,
                          top: 120.9,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          backgroundColor: '#000000',
                          opacity: 0.5,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: 3,
                            right: 10,
                            paddingTop: 3.5,
                          }}>
                          <Ionicons
                            name="location-outline"
                            size={9}
                            color="white"
                          />
                          <Text
                            style={{
                              fontFamily: FONT_FAMILY_BODY,
                              fontSize: 10,
                              lineHeight: 11.72,
                              fontWeight: '400',
                              color: 'white',
                            }}>
                            Edo, Nigeria
                          </Text>
                        </View>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>

                <View style={{marginTop: 10}}>
                  <Text style={styles.serviceTitleText}>Dez Motors</Text>
                  <Text style={styles.serviceDescText}>
                    Transportation service
                  </Text>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <ImageBackground
                    source={man}
                    style={{width: 306, height: 141, borderRadius: 15}}
                    imageStyle={{width: 306, height: 141, borderRadius: 15}}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={{width: 306, height: 141, borderRadius: 15}}>
                      <View
                        style={{
                          width: 306,
                          height: 20,
                          top: 120.9,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          backgroundColor: '#000000',
                          opacity: 0.5,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: 3,
                            right: 10,
                            paddingTop: 3.5,
                          }}>
                          <Ionicons
                            name="location-outline"
                            size={9}
                            color="white"
                          />
                          <Text
                            style={{
                              fontFamily: FONT_FAMILY_BODY,
                              fontSize: 10,
                              lineHeight: 11.72,
                              fontWeight: '400',
                              color: 'white',
                            }}>
                            Kano, Nigeria
                          </Text>
                        </View>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>

                <View style={{marginTop: 10}}>
                  <Text style={styles.serviceTitleText}>Other</Text>
                  <Text style={styles.serviceDescText}>Other service</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 50,
    alignSelf: 'center',
    marginBottom: 30,
    flex: 1,
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
  userIconView: {flexDirection: 'row', gap: 2},
  dot: {position: 'absolute', bottom: 10, left: 12},

  bannerContainer: {
    width: width * 0.9,
    height: 149,
    borderRadius: 20,
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
  curentLocationText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    color: '#B2B1B0',
    fontWeight: '400',
    lineHeight: 14.08,
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    top: 4,
  },
  placeContainerText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    color: COLOUR_BLACK,
    lineHeight: 16.41,
  },
  homeSearchContainer: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOUR_SECONDARY_GREY,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    backgroundColor: '#F1F0EE',
    alignSelf: 'center',
    height: 42,
  },
  catergoryText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    textAlign: 'center',
    marginTop: 3,
  },
  serviceTitleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.41,
    color: COLOUR_BLACK,
  },
  serviceDescText: {
    fontFamily: FONT_FAMILY_BODY_THIN,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    color: '#333333',
    top: 3.5,
  },
  categoryContainer: {
    minHeight: 115,
    borderBottomWidth: 4,
    borderColor: COLOUR_GHOST_WHITE,
    paddingVertical: 10,
  },
  catergoryTitle: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '500',
    color: COLOUR_BLACK,
  },

  categoryIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginTop: 20,
  },
  servicesContainer: {
    minHeight: 193,
    marginTop: 10,
    borderBottomWidth: 4,
    borderColor: COLOUR_GHOST_WHITE,
  },

  servicesInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  servicesTitle: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '500',
    color: COLOUR_BLACK,
  },

  servicesViewAll: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    lineHeight: 14.06,
    fontWeight: '400',
    color: COLOUR_DARK_GREEN,
  },
  servicesImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },

  recentServicesContainer: {
    minHeight: 230,
    marginTop: 5,
  },
  recentServicesInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 14,
  },
  recentServicesTitle: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '500',
    color: COLOUR_BLACK,
  },
  recentServicesViewAll: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    lineHeight: 14.06,
    fontWeight: '400',
    color: COLOUR_DARK_GREEN,
  },
  recentServicesImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
});

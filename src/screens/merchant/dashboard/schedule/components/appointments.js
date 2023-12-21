import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import appointmentBackgroundImage from '../../../../../assets/images/appointment_background.png';
import {
  COLOUR_GHOST_WHITE,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../../constants/Styles';
//import appointmentBackgroundImage2 from "../../../../../assets/images/appointment_background2.png"
import {useFocusEffect} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {
  SessionSkeleton,
  TextSkeleton,
} from '../../../../../components/Skeletons';
const Appointments = () => {
  const {width, height} = useWindowDimensions();
  const [isItem, setIsItem] = React.useState('');
  const [toggleSesion, setToggleSession] = React.useState(false);
  const [isLoading, setIsloading] = React.useState(true);
  const noData = true;
  const noSessionContents = false;

  // React.useEffect(() => {
  //   setIsloading(true);
  //   const fetchData = () => {
  //     setIsloading(false);
  //   };
  //   setTimeout(() => {
  //     fetchData();
  //   }, 5000);
  // }, []);
  const fetchData = () => {
    setTimeout(() => {
      setIsloading(false);
    }, 5000);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  const data = [
    {
      time: '11-35am - 12:00pm',
      date: 'Nov 10',
    },

    {
      time: '11-40am - 12:20pm',
      date: 'Nov 11',
    },
    {
      time: '11-45am - 12:30pm',
      date: 'Nov 13',
    },
  ];
  const data2 = [
    {
      time: '1-45am - 2:30pm',
      date: 'Nov 18',
    },
  ];

  const data3 = [];

  const data4 = [
    {
      time: '11:1am',
      date: 'Nov 9',
      title: 'Haircut and Shaving',
    },
  ];

  const onToggleSession = itemId => {
    if (isItem === itemId) {
      console.log('Toggling session');
      setIsItem('');
    } else {
      setIsItem(itemId);
    }
  };

  const nextSession = item => {
    return (
      <Animatable.View animation="fadeInLeft">
        <ImageBackground
          style={styles.imageContainer}
          imageStyle={{borderRadius: 20}}
          source={appointmentBackgroundImage}
          resizeMode="cover"
          resizeMethod="auto">
          <View style={{margin: 25}}>
            <View style={[styles.imageContainerFirstFlexView, {width: '90%'}]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Feather name="clock" size={16} color="white" />
                <Text style={[styles.timeText, {left: 5}]}>{item?.time}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5 name="calendar-alt" size={16} color="white" />
                <Text style={[styles.timeText, {left: 5}]}>{item?.date}</Text>
              </View>
            </View>

            <View style={{marginVertical: 20}}>
              <Text style={styles.title}>Hair Cut and Shaving</Text>
              <Text style={styles.desc}>
                want to have a hair cut and shave my bead with my kids wondering
                if you would be available
              </Text>
            </View>

            <View style={[styles.imageContainerSecondFlexView, {width: '80%'}]}>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Call"
                style={styles.infoButtonContainer}>
                <Feather name="phone-call" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Message"
                style={styles.infoButtonContainer}>
                <MaterialCommunityIcons
                  name="message-text-outline"
                  color="white"
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Reschedule"
                style={styles.infoButtonContainer}>
                <Feather name="clock" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Animatable.View>
    );
  };

  const morningSession = () => {
    return (
      <View>
        {isLoading ? (
          <View>
            <TextSkeleton marginBottom={15} marginTop={15} />
            <SessionSkeleton />
          </View>
        ) : (
          <>
            <Text style={styles.dayText}>Morning</Text>
            {data.map(item => {
              return (
                <View style={{marginBottom: 15}} key={item.time}>
                  <TouchableOpacity
                    onPress={() => onToggleSession(item.time)}
                    style={styles.sessionContainer}>
                    <Text style={[styles.timeText, {left: 22, color: 'black'}]}>
                      {item.time}
                    </Text>
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      style={{right: 22}}
                      color="grey"
                    />
                  </TouchableOpacity>
                  {isItem === item.time && (
                    <View style={{marginTop: 10}}>{nextSession(item)}</View>
                  )}
                </View>
              );
            })}
          </>
        )}
      </View>
    );
  };

  const afternoonSession = () => {
    return (
      <View>
        {isLoading ? (
          <View>
            <TextSkeleton marginBottom={15} marginTop={15} />
            <SessionSkeleton />
          </View>
        ) : (
          <>
            <Text style={styles.dayText}>Afternoon</Text>

            {data2.map(item => {
              return (
                <View style={{marginBottom: 15}} key={item.time}>
                  <TouchableOpacity
                    onPress={() => onToggleSession(item.time)}
                    style={styles.sessionContainer}>
                    <Text style={[styles.timeText, {left: 22, color: 'black'}]}>
                      {item.time}
                    </Text>
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      style={{right: 22}}
                      color="grey"
                    />
                  </TouchableOpacity>
                  {isItem === item.time && (
                    <View style={{marginTop: 10}}>{nextSession(item)}</View>
                  )}
                </View>
              );
            })}
          </>
        )}
      </View>
    );
  };

  const eveningSession = () => {
    return (
      <View>
        {isLoading ? (
          <View>
            <TextSkeleton marginBottom={15} marginTop={15} />
            <SessionSkeleton />
          </View>
        ) : (
          <>
            <Text style={styles.dayText}>Evening</Text>

            {data3.length
              ? data3.map(item => {
                  return (
                    <View style={{marginBottom: 15}} key={item.time}>
                      <TouchableOpacity
                        onPress={() => onToggleSession(item.time)}
                        style={styles.sessionContainer}>
                        <Text
                          style={[styles.timeText, {left: 22, color: 'black'}]}>
                          {item.time}
                        </Text>
                        <Ionicons
                          name="chevron-forward"
                          size={20}
                          style={{right: 22}}
                          color="grey"
                        />
                      </TouchableOpacity>
                      {isItem === item.time && (
                        <View style={{marginTop: 10}}>{nextSession(item)}</View>
                      )}
                    </View>
                  );
                })
              : noSession()}
          </>
        )}
      </View>
    );
  };

  const noSession = () => {
    return (
      <TouchableOpacity
        style={[
          styles.sessionContainer,
          {backgroundColor: '#DDDCDA66', borderColor: '#DDDCDA66'},
        ]}>
        <Text style={[styles.timeText, {left: 22, color: 'black'}]}>
          No Appointment
        </Text>
      </TouchableOpacity>
    );
  };

  const pendingAppointment = () => {
    return (
      <View>
        {isLoading ? (
          <View>
            <TextSkeleton marginBottom={15} width={150} />
            <SessionSkeleton height={82} />
          </View>
        ) : (
          <>
            <Text style={styles.pendingAppointmentText}>
              Pending Appointments
            </Text>
            {data4.map(item => {
              return (
                <View style={{marginBottom: 10}} key={item.title}>
                  <TouchableOpacity
                    onPress={() => onToggleSession(item.time)}
                    style={styles.pendingAppointmentInnerContainer}>
                    <View style={{marginLeft: 20}}>
                      <Text
                        style={[styles.timeText, {bottom: 8, color: 'black'}]}>
                        {item.time}
                      </Text>
                      <Text
                        style={{
                          fontFamily: FONT_FAMILY_BODY,
                          fontSize: 20,
                          fontWeight: '500',
                          lineHeight: 23.44,
                          color: COLOUR_TERRACOTTA,
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {isItem === item.time && (
                    <View style={{marginTop: 10}}>{nextSession(item)}</View>
                  )}
                </View>
              );
            })}
          </>
        )}
      </View>
    );
  };
  //   const alternative = ()=>{
  //     return (
  //         <View style={{flex: 1, marginBottom: 30}}>
  //           <View
  //             style={{
  //               backgroundColor: COLOUR_GHOST_WHITE,
  //               padding: 10,
  //               paddingBottom: 18,
  //               flex: 1,
  //             }}>
  //             <View style={{width: width * 0.9, alignSelf: 'center'}}>
  //               <Text style={styles.pendingAppointmentText}>
  //                 Pending Appointments
  //               </Text>

  //               {nextSession()}
  //             </View>
  //           </View>

  //           {MorningSession()}
  //           {AfternoonSession()}
  //           {EveningSession()}
  //           {NoSession()}
  //         </View>
  //       );
  //   }

  return (
    <View
      style={{flex: 1, paddingBottom: 30, backgroundColor: COLOUR_GHOST_WHITE}}>
      <View
        style={{
          width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
          alignSelf: 'center',
          marginTop: 25,
        }}>
        {/* {pendingAppointment()} */}
        {morningSession()}
        {afternoonSession()}
        {eveningSession()}
        {/* {noSession()} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    minHeight: 200,
    width: '100%',
    //width: 343,
    alignSelf: 'center',
  },
  imageContainerFirstFlexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainerSecondFlexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeContainer: {
    width: 343,
    height: 61,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: '#DDDCDA66',
    backgroundColor: '#DDDCDA66',
  },
  timeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'white',
  },
  dayText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'black',
    marginVertical: 10,
  },
  title: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 23.44,
    color: 'white',
    marginBottom: 20,
  },
  desc: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: 'white',
  },
  infoButtonContainer: {
    width: 42,
    height: 42,
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sessionContainer: {
    height: 61,
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: '#F5F9F5',
    borderColor: COLOUR_SECONDARY_GREY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  pendingAppointmentText: {
    lineHeight: 18.75,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONT_FAMILY_BODY_BOLD,
    color: COLOUR_TERRACOTTA,
    marginBottom: 15,
  },
  pendingAppointmentInnerContainer: {
    minHeight: 82,
    borderWidth: 0.3,
    borderColor: COLOUR_SECONDARY_GREY,
    borderRadius: 10,
    backgroundColor: '#D2691E33',
    justifyContent: 'center',
  },
});

export default Appointments;

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import appointmentBackgroundImage from '../../../../../assets/images/appointment_background.png';
import {FONT_FAMILY_BODY} from '../../../../../constants/Styles';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import appointmentBackgroundImage2 from "../../../../../assets/images/appointment_background2.png"
import {useFocusEffect} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {
  SessionSkeleton,
  TextSkeleton,
} from '../../../../../components/Skeletons';

const CompletedAppointments = () => {
  const [isItem, setIsItem] = React.useState('');
  const [toggleSesion, setToggleSession] = React.useState(false);
  const [isLoading, setIsloading] = React.useState(true);

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

  const onToggleSession = itemId => {
    if (isItem === itemId) {
      console.log('Toggling session');
      setIsItem('');
    } else {
      setIsItem(itemId);
    }
  };

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
  return (
    <View>
      {isLoading ? (
        <View>
          <TextSkeleton marginBottom={15} marginTop={15} />
          <SessionSkeleton />
        </View>
      ) : (
        <>
          {data.map(item => {
            return (
              <View style={{marginBottom: 15}} key={item.time}>
                <TouchableOpacity onPress={() => onToggleSession(item.time)}>
                  <ImageBackground
                    source={appointmentBackgroundImage}
                    style={styles.sessionContainer}
                    imageStyle={styles.imageStyle}>
                    <Text style={[styles.timeText, {left: 22, color: 'black'}]}>
                      {item.time}
                    </Text>
                  </ImageBackground>
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

const styles = StyleSheet.create({
  image: {
    height: 61,
  },
  imageStyle: {
    borderRadius: 10,
  },
  text: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
    color: 'white',
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
  imageContainer: {
    minHeight: 200,
    width: '100%',
    alignSelf: 'center',
  },
  timeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'white',
  },
  sessionContainer: {
    height: 61,
    borderRadius: 10,
    borderWidth: 0.5,

    width: '100%',
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
});

export default CompletedAppointments;

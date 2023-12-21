import React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {useFocusEffect} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';

import {
  COLOUR_DARK_GREEN,
  COLOUR_GHOST_WHITE,
  COLOUR_TERRACOTTA,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';
import Appointments from './components/Appointments';
import CanceledAppointments from './components/CanceledAppointments';
import CompletedAppointments from './components/CompletedAppointments';
const {width} = Dimensions.get('window');
export default function ScheduleScreen(props) {
  const {width, height} = useWindowDimensions();
  const [appointmentType, setAppointmentType] = React.useState({
    pending: false,
    completed: false,
    canceled: false,
  });
  const noSessionContents = true;
  const today = new Date().toISOString().split('T')[0];

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
      return () => {};
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      setAppointmentType({pending: true});
    }, []),
  );

  const marked = {
    '2023-11-10': {marked: true, dotColor: 'red'},
    '2023-11-12': {
      selected: true,
      selectedColor: COLOUR_DARK_GREEN,
      selectedTextColor: 'white',
    },
    '2023-11-13': {
      marked: true,
      selected: true,
      selectedColor: COLOUR_DARK_GREEN,

      selectedTextColor: 'white',
      dotColor: 'white',
    },
    [today]: {
      selected: true,
      marked: true,
      selectedColor: COLOUR_DARK_GREEN,
      selectedTextColor: 'white',
    },
  };

  const NoSessionContents = () => {
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 30,
        }}>
        <View
          style={{
            width: width * 0.9,
            alignSelf: 'center',
            marginVertical: 50,
          }}>
          <Text style={styles.noAppointmentText}>No Appointments</Text>
          <Text style={styles.noAppointmentDesc}>
            No worries!! Check back for bookings and appointments....
          </Text>
        </View>
      </View>
    );
  };

  const handleAppointment = type => {
    if (type === 'pending') {
      setAppointmentType({canceled: false, completed: false, pending: true});
    } else if (type === 'completed') {
      setAppointmentType({canceled: false, completed: true, pending: false});
    } else {
      setAppointmentType({canceled: true, completed: false, pending: false});
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLOUR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20}}>
          <Calendar
            markedDates={marked}
            theme={{
              textMonthFontFamily: FONT_FAMILY_BODY,
              dayTextColor: 'grey',
              calendarBackground: 'white',
            }}
            renderArrow={direction => (
              <View style={styles.calendarRenderArrowContainer}>
                <Entypo
                  name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                  size={24}
                  color={COLOUR_DARK_GREEN}
                />
              </View>
            )}
            renderHeader={date => {
              const month = date.toString('MMMM');
              return <Text style={styles.monthText}>{month}</Text>;
            }}
            style={{}}
            onDayPress={day => console.log('onDayPress', day)}
          />
        </View>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => handleAppointment('pending')}>
            <Text
              style={
                appointmentType.pending ? styles.activeNavText : styles.navText
              }>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAppointment('completed')}>
            <Text
              style={
                appointmentType.completed
                  ? styles.activeNavText
                  : styles.navText
              }>
              Completed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAppointment('canceled')}>
            <Text
              style={
                appointmentType.canceled ? styles.activeNavText : styles.navText
              }>
              Canceled
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contents}>
          {appointmentType.pending && (
            <>{noSessionContents ? <Appointments /> : NoSessionContents()}</>
          )}
          {appointmentType.completed && <CompletedAppointments />}
          {appointmentType.canceled && <CanceledAppointments />}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,

    backgroundColor: COLOUR_GHOST_WHITE,
  },

  noAppointmentText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28.13,
    color: COLOUR_DARK_GREEN,
    textAlign: 'center',
    marginBottom: 20,
  },
  noAppointmentDesc: {
    color: 'grey',
    fontWeight: '400',
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    lineHeight: 16.41,
    textAlign: 'center',
  },
  navText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 18.75,
  },
  activeNavText: {
    color: COLOUR_TERRACOTTA,
    borderBottomWidth: 1.5,
    borderBottomColor: COLOUR_TERRACOTTA,
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 18.75,
    paddingVertical: 3,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
    alignSelf: 'center',
    marginTop: 30,
  },

  contents: {
    width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
    marginTop: 10,
    alignSelf: 'center',
  },
  calendarRenderArrowContainer: {
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthText: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: FONT_FAMILY_BODY_BOLD,
    color: COLOUR_TERRACOTTA,
  },
});

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
} from '../../../../constants/Styles';
import Appointments from './components/appointments';
export default function ScheduleScreen(props) {
  const {width, height} = useWindowDimensions();
  const noSessionContents = true;
  const today = new Date().toISOString().split('T')[0];

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_WHITE);
      StatusBar.setBarStyle('dark-content');
      return () => {};
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
              <View
                style={{
                  width: 42,
                  height: 42,
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo
                  name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                  size={24}
                  color={COLOUR_DARK_GREEN}
                />
              </View>
            )}
            renderHeader={date => {
              const month = date.toString('MMMM');
              return (
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    fontFamily: FONT_FAMILY_BODY_BOLD,
                    color: COLOUR_TERRACOTTA,
                  }}>
                  {month}
                </Text>
              );
            }}
            style={{}}
            onDayPress={day => console.log('onDayPress', day)}
          />
        </View>
        {noSessionContents ? <Appointments /> : NoSessionContents()}
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
});

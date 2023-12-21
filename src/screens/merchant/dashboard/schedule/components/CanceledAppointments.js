import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SessionSkeleton} from '../../../../../components/Skeletons';
import {
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
} from '../../../../../constants/Styles';
const CanceledAppointments = () => {
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
  const data4 = [
    {
      time: '11:1am - 12:15pm',
      date: 'Nov 9',
      title: 'Haircut and Shaving',
    },
  ];

  const NoSessionContents = () => {
    return (
      <View style={styles.noAppointmentContainer}>
        <View style={styles.noAppointmentInnerContainer}>
          <Text style={styles.noAppointmentText}>No Appointments</Text>
          <Text style={styles.noAppointmentDesc}>
            No worries!! Check back for bookings and appointments....
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      {isLoading ? (
        <View>
          <SessionSkeleton height={82} />
        </View>
      ) : (
        <>
          {data4.length > 0
            ? data4.map(item => {
                return (
                  <View style={{marginBottom: 10}} key={item.title}>
                    <TouchableOpacity
                      style={styles.canceledAppointmentInnerContainer}>
                      <View style={{marginLeft: 20, gap: 8}}>
                        <Text
                          style={[
                            styles.timeText,
                            {bottom: 0, color: 'black'},
                          ]}>
                          {item.time}
                        </Text>
                        <Text style={styles.text}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })
            : NoSessionContents()}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  canceledAppointmentInnerContainer: {
    minHeight: 82,
    borderWidth: 0.3,
    borderColor: COLOUR_SECONDARY_GREY,
    borderRadius: 10,
    // backgroundColor: '#D2691E33',
    justifyContent: 'center',
    backgroundColor: '#F5DEB3',
  },
  text: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 23.44,
    color: COLOUR_TERRACOTTA,
  },
  timeText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'white',
  },
  noAppointmentContainer: {
    flex: 1,
    marginBottom: 30,
  },
  noAppointmentInnerContainer: {
    width: '100%',
    alignSelf: 'center',
    marginVertical: 50,
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

export default CanceledAppointments;

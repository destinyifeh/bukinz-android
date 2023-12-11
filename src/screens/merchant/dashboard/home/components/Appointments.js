import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  COLOUR_DARK_GREEN,
  COLOUR_GHOST_WHITE,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY,
} from '../../../../../constants/Styles';
export default function Appointments({toggleModal}) {
  return (
    <View style={{marginBottom: 5}}>
      <View style={styles.appointmentItem}>
        <View style={styles.appointmentItemInnerView}>
          <TouchableOpacity style={styles.userIcon}>
            <Feather name="user" size={25} color={COLOUR_TERRACOTTA} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: 'grey',
                fontFamily: FONT_FAMILY_BODY,
                maxWidth: 300,
                textAlign: 'center',
                right: 3,
              }}
              numberOfLines={1}
              ellipsizeMode="tail">
              Appointment with{' '}
              <Text
                style={{
                  color: COLOUR_TERRACOTTA,
                  fontFamily: FONT_FAMILY_BODY,
                  fontWeight: 'bold',
                }}>
                Vladmir Putin
              </Text>
            </Text>
            <View style={styles.acceptTimeView}>
              <View style={styles.timeView}>
                <View style={styles.clock}>
                  <Feather name="clock" color={'grey'} />
                  <Text style={{color: 'grey', left: 5}}>12:30am</Text>
                </View>
                <View style={styles.date}>
                  <MaterialCommunityIcons
                    name="calendar-month-outline"
                    color={'grey'}
                  />
                  <Text style={{color: 'grey', left: 5}}>Mon, 11 Dec</Text>
                </View>
              </View>
              <View style={styles.acceptCancelItemView}>
                <TouchableOpacity style={styles.acceptButton}>
                  <Text style={styles.acceptText}> Accept</Text>
                  <Ionicons name="checkmark-circle" color={'white'} size={14} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={toggleModal}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userIcon: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: COLOUR_SECONDARY_GREY,
    marginRight: 5,
    height: 39,
    width: 39,
    alignItems: 'center',
  },

  appointmentContainer: {
    top: 50,
  },

  appointmentItem: {
    padding: 20,
    height: 124,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },

  appointmentItemInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  timeView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 30,
  },
  acceptCancelItemView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    gap: 30,
  },

  acceptButton: {
    backgroundColor: COLOUR_DARK_GREEN,
    height: 32,
    width: 100,
    paddingVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },

  cancelButton: {
    height: 32,
    width: 100,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D70909',
  },
  clock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  acceptTimeView: {
    marginTop: 5,
  },
  cancelText: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY_BODY,
    color: '#D70909',
  },
  acceptText: {
    textAlign: 'center',
    right: 5,
    fontFamily: FONT_FAMILY_BODY,
    color: COLOUR_GHOST_WHITE,
  },
});

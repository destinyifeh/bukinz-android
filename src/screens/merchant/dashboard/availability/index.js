import {useFocusEffect, useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../../components/Button';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  COLOUR_TERRACOTTA,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../../constants/Styles';

export default function AvailabilityScreen() {
  const sheetRef = React.useRef();
  const deviceWidth = useWindowDimensions().width;
  const navigation = useNavigation();
  console.log(deviceWidth, 'deviceWidth');

  const [day, setDay] = React.useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  const [availability, setAvailability] = React.useState({
    sunday: {from: '', to: ''},
    monday: {from: '', to: ''},
    tuesday: {from: '', to: ''},
    wednesday: {from: '', to: ''},
    thursday: {from: '', to: ''},
    friday: {from: '', to: ''},
    saturday: {from: '', to: ''},
  });
  const [isOption, setIsOption] = React.useState({
    sun: '',
    mon: '',
    tue: '',
    wed: '',
    thu: '',
    fri: '',
    sat: '',
  });

  const [isDatePickerVisible2, setDatePickerVisibility2] = React.useState({
    sunday: {from: false, to: false},
    monday: {from: false, to: false},
    tuesday: {from: false, to: false},
    wednesday: {from: false, to: false},
    thursday: {from: false, to: false},
    friday: {from: false, to: false},
    saturday: {from: false, to: false},
  });

  const [time, setTime] = React.useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const handleAvailableDay = selectedDay => {
    console.log(selectedDay, 'new dee');
    setDay(prevDays => {
      return {
        ...prevDays,
        [selectedDay]: !prevDays[selectedDay],
      };
    });
    handleClearTime(selectedDay);
  };

  const onPressAddAvailableHour = (option, day) => {
    console.log('option', option, day);

    setDatePickerVisibility2(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [option]: true,
      },
    }));
  };

  const onSelectTime = (selectedTime, day, option) => {
    console.log(day, 'dezzzz');
    //setDatePickerVisibility(false);
    setDatePickerVisibility2(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [option]: false,
      },
    }));

    const time = moment(selectedTime).format('h:mm A');

    setAvailability(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [option]: time,
      },
    }));
  };

  const handleClearTime = day => {
    setAvailability(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        from: '',
        to: '',
      },
    }));
  };

  const onCancelSelect = (day, option) => {
    setDatePickerVisibility2(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [option]: false,
      },
    }));
  };
  const updateAvailability = () => {
    const availabilities = {
      sunday: availability.sunday,
      monday: availability.monday,
      tuesday: availability.tuesday,
      wednesday: availability.wednesday,
      thursday: availability.thursday,
      friday: availability.friday,
      saturday: availability.saturday,
    };
    console.log(availabilities, 'aval');
  };

  const getAvailableDay = () => {
    return (
      <>
        <View style={{marginBottom: 15}}>
          {!day.sunday && (
            <View style={styles.availabilityDayView}>
              <Text style={styles.initialAvailabilityDayText}>Sunday</Text>
              <TouchableOpacity onPress={() => handleAvailableDay('sunday')}>
                <MaterialCommunityIcons
                  name="toggle-switch-off"
                  size={25}
                  color="#929090"
                />
              </TouchableOpacity>
            </View>
          )}
          {day.sunday && (
            <Animatable.View animation="fadeIn">
              <View style={{marginTop: 10}}>
                <View style={styles.availabilitySelectContainer}>
                  <View style={styles.availabilityDayView}>
                    <Text style={styles.availabilitySelectDayText}>Sunday</Text>
                    <TouchableOpacity
                      onPress={() => handleAvailableDay('sunday')}>
                      <MaterialCommunityIcons
                        name="toggle-switch-off"
                        size={25}
                        color={COLOUR_DARK_GREEN}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.availabilitySelectTimeMainContainer}>
                    <TouchableOpacity
                      style={styles.availabilitySelectTimeContainer}
                      onPress={() => onPressAddAvailableHour('from', 'sunday')}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.sunday.from
                            ? availability.sunday.from
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>

                    <Text style={styles.availabilitySelectToText}>to</Text>
                    <TouchableOpacity
                      onPress={() => onPressAddAvailableHour('to', 'sunday')}
                      style={styles.availabilitySelectTimeContainer}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.sunday.to
                            ? availability.sunday.to
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClearTime('sunday')}>
                      <MaterialIcons name="clear" size={20} color="grey" />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 16}}>
                    <Text style={styles.availabilitySelectAddHourText}>
                      Add availability hours +
                    </Text>
                  </View>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.sunday.from}
                  onConfirm={date => onSelectTime(date, 'sunday', 'from')}
                  onCancel={() => onCancelSelect()}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.sunday.to}
                  onConfirm={date => onSelectTime(date, 'sunday', 'to')}
                  onCancel={() => onCancelSelect()}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
              </View>
            </Animatable.View>
          )}
        </View>
        <View style={{marginBottom: 15}}>
          {!day.monday && (
            <View style={styles.availabilityDayView}>
              <Text style={styles.initialAvailabilityDayText}>Monday</Text>
              <TouchableOpacity onPress={() => handleAvailableDay('monday')}>
                <MaterialCommunityIcons
                  name="toggle-switch-off"
                  size={25}
                  color="#929090"
                />
              </TouchableOpacity>
            </View>
          )}
          {day.monday && (
            <Animatable.View animation="fadeIn">
              <View style={{marginTop: 10}}>
                <View style={styles.availabilitySelectContainer}>
                  <View style={styles.availabilityDayView}>
                    <Text style={styles.availabilitySelectDayText}>Monday</Text>
                    <TouchableOpacity
                      onPress={() => handleAvailableDay('monday')}>
                      <MaterialCommunityIcons
                        name="toggle-switch-off"
                        size={25}
                        color={COLOUR_DARK_GREEN}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.availabilitySelectTimeMainContainer}>
                    <TouchableOpacity
                      style={styles.availabilitySelectTimeContainer}
                      onPress={() => onPressAddAvailableHour('from', 'monday')}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.monday.from
                            ? availability.monday.from
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>

                    <Text style={styles.availabilitySelectToText}>to</Text>
                    <TouchableOpacity
                      onPress={() => onPressAddAvailableHour('to', 'monday')}
                      style={styles.availabilitySelectTimeContainer}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.monday.to
                            ? availability.monday.to
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClearTime('monday')}>
                      <MaterialIcons name="clear" size={20} color="grey" />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 16}}>
                    <Text style={styles.availabilitySelectAddHourText}>
                      Add availability hours +
                    </Text>
                  </View>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.monday.from}
                  onConfirm={date => onSelectTime(date, 'monday', 'from')}
                  onCancel={() => onCancelSelect()}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.monday.to}
                  onConfirm={date => onSelectTime(date, 'monday', 'to')}
                  onCancel={() => onCancelSelect()}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
              </View>
            </Animatable.View>
          )}
        </View>
        <View style={{marginBottom: 15}}>
          {!day.tuesday && (
            <View style={styles.availabilityDayView}>
              <Text style={styles.initialAvailabilityDayText}>Tuesday</Text>
              <TouchableOpacity onPress={() => handleAvailableDay('tuesday')}>
                <MaterialCommunityIcons
                  name="toggle-switch-off"
                  size={25}
                  color="#929090"
                />
              </TouchableOpacity>
            </View>
          )}
          {day.tuesday && (
            <Animatable.View animation="fadeIn">
              <View style={{marginTop: 10}}>
                <View style={styles.availabilitySelectContainer}>
                  <View style={styles.availabilityDayView}>
                    <Text style={styles.availabilitySelectDayText}>
                      Tuesday
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleAvailableDay('tuesday')}>
                      <MaterialCommunityIcons
                        name="toggle-switch-off"
                        size={25}
                        color={COLOUR_DARK_GREEN}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.availabilitySelectTimeMainContainer}>
                    <TouchableOpacity
                      style={styles.availabilitySelectTimeContainer}
                      onPress={() =>
                        onPressAddAvailableHour('from', 'tuesday')
                      }>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.tuesday.from
                            ? availability.tuesday.from
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>

                    <Text style={styles.availabilitySelectToText}>to</Text>
                    <TouchableOpacity
                      onPress={() => onPressAddAvailableHour('to', 'tuesday')}
                      style={styles.availabilitySelectTimeContainer}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.tuesday.to
                            ? availability.tuesday.to
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleClearTime('tuesday')}>
                      <MaterialIcons name="clear" size={20} color="grey" />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 16}}>
                    <Text style={styles.availabilitySelectAddHourText}>
                      Add availability hours +
                    </Text>
                  </View>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.tuesday.from}
                  onConfirm={date => onSelectTime(date, 'tuesday', 'from')}
                  onCancel={() => onCancelSelect('tuesday', 'from')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.tuesday.to}
                  onConfirm={date => onSelectTime(date, 'tuesday', 'to')}
                  onCancel={() => onCancelSelect('tuesday', 'to')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
              </View>
            </Animatable.View>
          )}
        </View>
        <View style={{marginBottom: 15}}>
          {!day.wednesday && (
            <View style={styles.availabilityDayView}>
              <Text style={styles.initialAvailabilityDayText}>Wednesday</Text>
              <TouchableOpacity onPress={() => handleAvailableDay('wednesday')}>
                <MaterialCommunityIcons
                  name="toggle-switch-off"
                  size={25}
                  color="#929090"
                />
              </TouchableOpacity>
            </View>
          )}
          {day.wednesday && (
            <Animatable.View animation="fadeIn">
              <View style={{marginTop: 10}}>
                <View style={styles.availabilitySelectContainer}>
                  <View style={styles.availabilityDayView}>
                    <Text style={styles.availabilitySelectDayText}>
                      Wednesday
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleAvailableDay('wednesday')}>
                      <MaterialCommunityIcons
                        name="toggle-switch-off"
                        size={25}
                        color={COLOUR_DARK_GREEN}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.availabilitySelectTimeMainContainer}>
                    <TouchableOpacity
                      style={styles.availabilitySelectTimeContainer}
                      onPress={() =>
                        onPressAddAvailableHour('from', 'wednesday')
                      }>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.wednesday.from
                            ? availability.wednesday.from
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>

                    <Text style={styles.availabilitySelectToText}>to</Text>
                    <TouchableOpacity
                      onPress={() => onPressAddAvailableHour('to', 'wednesday')}
                      style={styles.availabilitySelectTimeContainer}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.wednesday.to
                            ? availability.wednesday.to
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleClearTime('wednesday')}>
                      <MaterialIcons name="clear" size={20} color="grey" />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 16}}>
                    <Text style={styles.availabilitySelectAddHourText}>
                      Add availability hours +
                    </Text>
                  </View>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.wednesday.from}
                  onConfirm={date => onSelectTime(date, 'wednesday', 'from')}
                  onCancel={() => onCancelSelect('wednesday', 'from')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.wednesday.to}
                  onConfirm={date => onSelectTime(date, 'wednesday', 'to')}
                  onCancel={() => onCancelSelect('wednesday', 'to')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
              </View>
            </Animatable.View>
          )}
        </View>
        <View style={{marginBottom: 15}}>
          {!day.thursday && (
            <View style={styles.availabilityDayView}>
              <Text style={styles.initialAvailabilityDayText}>Thursday</Text>
              <TouchableOpacity onPress={() => handleAvailableDay('thursday')}>
                <MaterialCommunityIcons
                  name="toggle-switch-off"
                  size={25}
                  color="#929090"
                />
              </TouchableOpacity>
            </View>
          )}
          {day.thursday && (
            <Animatable.View animation="fadeIn">
              <View style={{marginTop: 10}}>
                <View style={styles.availabilitySelectContainer}>
                  <View style={styles.availabilityDayView}>
                    <Text style={styles.availabilitySelectDayText}>
                      Thursday
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleAvailableDay('thursday')}>
                      <MaterialCommunityIcons
                        name="toggle-switch-off"
                        size={25}
                        color={COLOUR_DARK_GREEN}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.availabilitySelectTimeMainContainer}>
                    <TouchableOpacity
                      style={styles.availabilitySelectTimeContainer}
                      onPress={() =>
                        onPressAddAvailableHour('from', 'thursday')
                      }>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.thursday.from
                            ? availability.thursday.from
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>

                    <Text style={styles.availabilitySelectToText}>to</Text>
                    <TouchableOpacity
                      onPress={() => onPressAddAvailableHour('to', 'thursday')}
                      style={styles.availabilitySelectTimeContainer}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.thursday.to
                            ? availability.thursday.to
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleClearTime('thursday')}>
                      <MaterialIcons name="clear" size={20} color="grey" />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 16}}>
                    <Text style={styles.availabilitySelectAddHourText}>
                      Add availability hours +
                    </Text>
                  </View>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.thursday.from}
                  onConfirm={date => onSelectTime(date, 'thursday', 'from')}
                  onCancel={() => onCancelSelect('thursday', 'from')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.thursday.to}
                  onConfirm={date => onSelectTime(date, 'thursday', 'to')}
                  onCancel={() => onCancelSelect('thursday', 'to')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
              </View>
            </Animatable.View>
          )}
        </View>
        <View style={{marginBottom: 15}}>
          {!day.friday && (
            <View style={styles.availabilityDayView}>
              <Text style={styles.initialAvailabilityDayText}>Friday</Text>
              <TouchableOpacity onPress={() => handleAvailableDay('friday')}>
                <MaterialCommunityIcons
                  name="toggle-switch-off"
                  size={25}
                  color="#929090"
                />
              </TouchableOpacity>
            </View>
          )}
          {day.friday && (
            <Animatable.View animation="fadeIn">
              <View style={{marginTop: 10}}>
                <View style={styles.availabilitySelectContainer}>
                  <View style={styles.availabilityDayView}>
                    <Text style={styles.availabilitySelectDayText}>Friday</Text>
                    <TouchableOpacity
                      onPress={() => handleAvailableDay('friday')}>
                      <MaterialCommunityIcons
                        name="toggle-switch-off"
                        size={25}
                        color={COLOUR_DARK_GREEN}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.availabilitySelectTimeMainContainer}>
                    <TouchableOpacity
                      style={styles.availabilitySelectTimeContainer}
                      onPress={() => onPressAddAvailableHour('from', 'friday')}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.friday.from
                            ? availability.friday.from
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>

                    <Text style={styles.availabilitySelectToText}>to</Text>
                    <TouchableOpacity
                      onPress={() => onPressAddAvailableHour('to', 'friday')}
                      style={styles.availabilitySelectTimeContainer}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.friday.to
                            ? availability.friday.to
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleClearTime('friday')}>
                      <MaterialIcons name="clear" size={20} color="grey" />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 16}}>
                    <Text style={styles.availabilitySelectAddHourText}>
                      Add availability hours +
                    </Text>
                  </View>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.friday.from}
                  onConfirm={date => onSelectTime(date, 'friday', 'from')}
                  onCancel={() => onCancelSelect('friday', 'from')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.friday.to}
                  onConfirm={date => onSelectTime(date, 'friday', 'to')}
                  onCancel={() => onCancelSelect('friday', 'to')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
              </View>
            </Animatable.View>
          )}
        </View>
        <View style={{marginBottom: 15}}>
          {!day.saturday && (
            <View style={styles.availabilityDayView}>
              <Text style={styles.initialAvailabilityDayText}>Saturday</Text>
              <TouchableOpacity onPress={() => handleAvailableDay('saturday')}>
                <MaterialCommunityIcons
                  name="toggle-switch-off"
                  size={25}
                  color="#929090"
                />
              </TouchableOpacity>
            </View>
          )}
          {day.saturday && (
            <Animatable.View animation="fadeIn">
              <View style={{marginTop: 10}}>
                <View style={styles.availabilitySelectContainer}>
                  <View style={styles.availabilityDayView}>
                    <Text style={styles.availabilitySelectDayText}>
                      Saturday
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleAvailableDay('saturday')}>
                      <MaterialCommunityIcons
                        name="toggle-switch-off"
                        size={25}
                        color={COLOUR_DARK_GREEN}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.availabilitySelectTimeMainContainer}>
                    <TouchableOpacity
                      style={styles.availabilitySelectTimeContainer}
                      onPress={() =>
                        onPressAddAvailableHour('from', 'saturday')
                      }>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.saturday.from
                            ? availability.saturday.from
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>

                    <Text style={styles.availabilitySelectToText}>to</Text>
                    <TouchableOpacity
                      onPress={() => onPressAddAvailableHour('to', 'saturday')}
                      style={styles.availabilitySelectTimeContainer}>
                      <View style={styles.availabilitySelectTimeInnerContainer}>
                        <Text style={styles.availabilitySelectTimeText}>
                          {availability.saturday.to
                            ? availability.saturday.to
                            : 'Select'}
                        </Text>
                        <AntDesign name="down" size={14} color="#525252" />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleClearTime('saturday')}>
                      <MaterialIcons name="clear" size={20} color="grey" />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 16}}>
                    <Text style={styles.availabilitySelectAddHourText}>
                      Add availability hours +
                    </Text>
                  </View>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.saturday.from}
                  onConfirm={date => onSelectTime(date, 'saturday', 'from')}
                  onCancel={() => onCancelSelect('saturday', 'from')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible2.saturday.to}
                  onConfirm={date => onSelectTime(date, 'saturday', 'to')}
                  onCancel={() => onCancelSelect('saturday', 'to')}
                  mode="time"
                  is24Hour={false}
                  date={time}
                  negativeButton={{
                    label: 'Cancel',
                    textColor: COLOUR_TERRACOTTA,
                  }}
                  positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
                />
              </View>
            </Animatable.View>
          )}
        </View>
      </>
    );
  };

  // const availableItem = (day, fromHour, toHour) => {
  //   return (
  //     <View style={{marginTop: 10}}>
  //       <View style={styles.availabilitySelectContainer}>
  //         <View style={styles.availabilityDayView}>
  //           <Text style={styles.availabilitySelectDayText}>{day}</Text>
  //           <TouchableOpacity onPress={() => handleAvailableDay(day)}>
  //             <MaterialCommunityIcons
  //               name="toggle-switch-off"
  //               size={25}
  //               color={COLOUR_DARK_GREEN}
  //             />
  //           </TouchableOpacity>
  //         </View>
  //         <View style={styles.availabilitySelectTimeMainContainer}>
  //           <TouchableOpacity
  //             style={styles.availabilitySelectTimeContainer}
  //             onPress={() => onPressAddAvailableHour('from')}>
  //             <View style={styles.availabilitySelectTimeInnerContainer}>
  //               <Text style={styles.availabilitySelectTimeText}>
  //                 {fromHour ? fromHour : 'Select'}
  //               </Text>
  //               <AntDesign name="down" size={14} color="#525252" />
  //             </View>
  //           </TouchableOpacity>

  //           <Text style={styles.availabilitySelectToText}>to</Text>
  //           <TouchableOpacity
  //             onPress={() => onPressAddAvailableHour('to')}
  //             style={styles.availabilitySelectTimeContainer}>
  //             <View style={styles.availabilitySelectTimeInnerContainer}>
  //               <Text style={styles.availabilitySelectTimeText}>
  //                 {toHour ? toHour : 'Select'}
  //               </Text>
  //               <AntDesign name="down" size={14} color="#525252" />
  //             </View>
  //           </TouchableOpacity>
  //           <TouchableOpacity onPress={() => handleClearTime(day)}>
  //             <MaterialIcons name="clear" size={20} color="grey" />
  //           </TouchableOpacity>
  //         </View>
  //         <View style={{marginTop: 16}}>
  //           <Text style={styles.availabilitySelectAddHourText}>
  //             Add availability hours +
  //           </Text>
  //         </View>
  //       </View>
  //       <DateTimePickerModal
  //         isVisible={isDatePickerVisible}
  //         onConfirm={date => onSelectTime(date, day, isOption)}
  //         onCancel={() => onCancelSelect()}
  //         mode="time"
  //         is24Hour={false}
  //         date={time}
  //         negativeButton={{label: 'Cancel', textColor: COLOUR_DARK_GREEN}}
  //         positiveButton={{label: 'Save', textColor: COLOUR_DARK_GREEN}}
  //       />
  //     </View>
  //   );
  // };

  return (
    <View style={{flex: 1, backgroundColor: COLOUR_DARK_GREEN}}>
      <View style={{marginTop: 40, flex: 1}}>
        <View style={styles.availabilityTextIconContainer}>
          <TouchableOpacity
            style={{position: 'absolute', left: 15}}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.availabilityText}>Availability</Text>
        </View>
        <View style={styles.availabilityViewDesign}></View>

        <View style={styles.availabilityMainView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              width:
                deviceWidth > MAX_ALLOWED_WIDTH
                  ? MAX_ALLOWED_WIDTH
                  : deviceWidth * 0.9,
              alignSelf: 'center',
              paddingVertical: 20,
              flex: 1,
            }}>
            <Text
              style={{
                fontFamily: FONT_FAMILY_BODY_BOLD,
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 16.41,
                color: COLOUR_DARK_GREEN,
                marginBottom: 15,
                marginTop: 5,
              }}>
              Set Availability
            </Text>
            <View style={{marginBottom: 80}}>{getAvailableDay()}</View>
          </ScrollView>
          <View
            style={{
              width: deviceWidth > 428 ? 428 : deviceWidth * 0.9,
              alignSelf: 'center',
              bottom: 30,
            }}>
            <Button title="Upate" style={{}} onPress={updateAvailability} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  availabilityTextIconContainer: {
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  availabilityText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '500',
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
  },
  availabilityViewDesign: {
    height: 10,
    width: '93%',
    alignSelf: 'center',
    backgroundColor: COLOUR_SECONDARY_GREY,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  availabilityMainView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    width: '100%',
  },

  availabilityDayText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 16,
    color: COLOUR_BLACK,
  },
  availabilitySelectContainer: {
    minHeight: 137,
    borderWidth: 0.8,
    borderColor: COLOUR_DARK_GREEN,
    backgroundColor: '#F5F9F5',
    padding: 10,
    borderRadius: 10,
  },
  availabilitySelectDayText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18.75,
    color: '#525252',
  },
  availabilitySelectToText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#525252',
  },
  availabilitySelectTimeText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#525252',
  },
  availabilitySelectAddHourText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#2D2C2C',
    textAlign: 'center',
  },
  availabilityDayView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  availabilitySelectTimeContainer: {
    backgroundColor: '#FFFFFF',
    height: 25,
    width: 98.74,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
  },
  availabilitySelectTimeInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  availabilitySelectTimeMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    flexWrap: 'wrap',
  },

  initialAvailabilityDayText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18.75,
    color: '#929090',
  },
});

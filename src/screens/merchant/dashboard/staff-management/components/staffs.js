import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Staffs = ({toggleModal}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Donald Trump</Text>
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <AntDesign name="edit" size={18} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Feather name="trash" size={18} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 38,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F9F5',
    marginVertical: 30,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
});
export default Staffs;

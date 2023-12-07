import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOUR_GREEN, FONT_FAMILY_BODY} from '../../../../../constants/Styles';

const Transactions = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.line}></View>

      <View style={styles.itemInnerContainer}>
        <View>
          <Text style={styles.itemTitle}>Donald Trump</Text>
          <Text style={styles.itemDesc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>
          <Text style={styles.itemTime}>10mins ago</Text>
        </View>
        <Text style={styles.itemPrice}>$ 5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F9F5',
    marginVertical: 5,
  },
  itemInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 5,
  },
  itemTitle: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#0A0A0A',
  },
  itemPrice: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#0A0A0A',
    marginRight: 20,
  },
  itemDesc: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 11.72,
    color: 'grey',
    width: 179,
    marginVertical: 8,
  },
  itemTime: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 11.72,
    color: '#7F7F7F',
  },
  line: {
    height: '100%',
    width: 2,
    backgroundColor: COLOUR_GREEN,
    marginRight: 5,
  },
});
export default Transactions;

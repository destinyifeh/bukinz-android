import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import man2 from '../../../../assets/images/man2.jpg';
import {
  COLOUR_BLACK,
  COLOUR_GREEN,
  FONT_FAMILY_BODY,
} from '../../../constants/Styles';

export default function ServiceDetailScreen() {
  return (
    <View>
      <ScrollView>
        <View style={styles.topBannerContainer}></View>
        <View style={styles.serviceTypeContainer}>
          <View style={styles.serviceNameContainer}>
            <Text style={styles.serviceName}>Dez World</Text>

            <View style={styles.ratingContainer}>
              <MaterialIcons name="star-rate" color={COLOUR_BLACK} size={13} />
              <Text style={styles.rating}>4.8 (23k)</Text>
            </View>
          </View>
          <View style={styles.jobCompletedContainer}>
            <AntDesign name="checksquare" color="#757575" size={16} />
            <Text style={styles.jobCompletedText}>354 jobs completed</Text>
          </View>
        </View>
        <View style={styles.serviceDescContainer}>
          <View style={styles.serviceDescInnerContainer}>
            <Image source={man2} style={{width: 60, height: 60}} />
            <Text style={styles.titleText}>Diamond Facial</Text>
          </View>
          <View style={styles.detailContainer}>
            <Octicons name="dot-fill" color="#757575" size={4} />
            <Text style={styles.descText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore My grandma is having running
              stomach and she has been feeling nausea. I would need you come
              help me treat her asap. She is also complaining of severe migrain,
              I believe you can help me treat her.
            </Text>
          </View>
        </View>

        <View style={styles.relatedServicesContainer}>
          <Text style={styles.relatedServicesText}>Related Services</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topBannerContainer: {
    height: 210,
    gap: 10,
    backgroundColor: 'grey',
  },
  serviceDescContainer: {
    height: 202,
    borderWidth: 1,
    borderRadius: 20,
    top: 79,
    backgroundColor: COLOUR_GREEN,
  },

  serviceDescInnerContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  serviceTypeContainer: {
    marginTop: 10,
  },

  serviceNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceName: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 23.44,
    textAlign: 'center',
    color: '#161616',
  },
  rating: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
    color: COLOUR_BLACK,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 4,
  },

  jobCompletedContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  jobCompletedText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: '#161616',
  },
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
    color: COLOUR_BLACK,
  },

  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
    color: '#666464',
  },
  relatedServicesContainer: {
    marginTop: 10,
  },
  relatedServicesText: {
    fontFamily: FONT_FAMILY_BODY,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18.75,
    color: '#161616',
  },
});

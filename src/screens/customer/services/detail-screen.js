import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import man2 from '../../../assets/images/man2.jpg';

import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../../components/Button';
import {
  COLOUR_BLACK,
  COLOUR_GREEN,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  FONT_FAMILY_BODY_SEMIBOLD,
  FONT_FAMILY_BODY_THIN,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import RelatedServices from './components/RelatedServices';

export default function ServiceDetailScreen() {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: COLOUR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={styles.topBannerContainer}>
          <TouchableOpacity
            style={{top: 30, left: 20}}
            onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.contentContainer,
            {
              width:
                width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
            },
          ]}>
          <View style={styles.serviceTypeContainer}>
            <View style={styles.serviceNameContainer}>
              <Text style={styles.serviceName}>Dez World</Text>

              <View style={styles.ratingContainer}>
                <MaterialIcons
                  name="star-rate"
                  color={COLOUR_BLACK}
                  size={16}
                  style={{bottom: 1}}
                />
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
              <Image
                source={man2}
                style={styles.serviceDescImage}
                resizeMode="cover"
              />
              <Text style={styles.titleText}>Diamond Facial</Text>
            </View>
            <View style={styles.detailContainer}>
              <Octicons name="dot-fill" color="#757575" size={10} />
              <Text style={styles.descText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore My grandma is having running
                stomach and she has been feeling nausea. I would need you come
                help me treat her asap. She is also complaining of severe
                migrain, I believe you can help me treat her.
              </Text>
            </View>
          </View>

          <View style={styles.relatedServicesContainer}>
            <Text style={styles.relatedServicesText}>Related Services</Text>
            <RelatedServices />
            <RelatedServices />
          </View>

          <View style={styles.bookButtonContainer}>
            <Button title="Book Now" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 15,
    alignSelf: 'center',
    marginBottom: 30,
    flex: 1,
  },
  topBannerContainer: {
    height: 210,
    gap: 10,
    backgroundColor: 'grey',
  },
  serviceDescContainer: {
    with: '100%',
    minHeight: 202,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 40.5,
    backgroundColor: '#F5F9F5',
    borderColor: COLOUR_GREEN,
    padding: 15,
  },

  serviceDescInnerContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    gap: 5,
    width: '100%',
  },
  serviceTypeContainer: {
    marginTop: 10,
  },
  serviceDescImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 10,
  },
  serviceNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceName: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 23.44,
    textAlign: 'center',
    color: '#161616',
  },
  rating: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
    color: COLOUR_BLACK,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },

  jobCompletedContainer: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 10,
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
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18.75,
    color: '#161616',
    marginBottom: 20,
    marginTop: 12,
  },
  innerShadowContainer: {
    width: '100%',
    height: 37,
    top: 120,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  serviceTitleText: {
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: '500',
    color: COLOUR_BLACK,
  },
  serviceDescText: {
    fontFamily: FONT_FAMILY_BODY_THIN,
    fontSize: 12,
    lineHeight: 14.06,
    fontWeight: '400',
    color: '#333333',
  },

  bookButtonContainer: {
    marginTop: 50,
  },
});

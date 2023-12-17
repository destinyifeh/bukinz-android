import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import callIcon from '../../../assets/icons/call-round-icon.png';
import messageIcon from '../../../assets/icons/message-round-icon.png';
import man2 from '../../../assets/images/man2.jpg';
import Button from '../../../components/Button';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_GREEN,
  COLOUR_SECONDARY_GREY,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import CustomerHeader from '../components/header';
const {width} = Dimensions.get('window');
export default function SearchProfileScreen() {
  const {height, width} = useWindowDimensions();

  const ratingContent = width => {
    return (
      <View
        style={[
          styles.ratingContentContainer,
          {borderBottomWidth: width ? 0.5 : 0},
        ]}>
        <View style={styles.ratingNameContainer}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={styles.ratingName}>Elon Musk</Text>
            <Text style={styles.ratingTime}>20 min. ago</Text>
          </View>
          <View style={styles.rating}>
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
          </View>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={styles.ratingDesc}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Tike theg fed
            velata guteiu
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLOUR_WHITE}}>
      <CustomerHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          styles.mainContentContainer,
          {
            width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
          },
        ]}>
        <View style={styles.contentContainer}>
          <View style={styles.contentImageContainer}>
            <Image source={man2} style={styles.image} resizeMode="cover" />
            <View style={styles.imageStar}>
              <MaterialIcons name="star-rate" color="white" size={18} />
            </View>
          </View>

          <View style={{gap: 4, marginTop: 15}}>
            <Text style={styles.title}>King Charles</Text>
            <Text style={styles.desc}>Electrician </Text>
            <View style={styles.rating}>
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
              <MaterialIcons name="star-rate" color={'#FFBF1C'} size={16} />
            </View>
          </View>
          <View style={styles.callMessageContainer}>
            <TouchableOpacity>
              <Image source={callIcon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={messageIcon} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoView}>
            <Feather name="clock" size={16} color="grey" />
            <Text style={styles.infoText}>54+</Text>
            <Text style={styles.infoText2}>Hours</Text>
          </View>
          <View style={styles.infoView}>
            <Feather name="users" size={16} color="grey" />
            <Text style={styles.infoText}>30+</Text>
            <Text style={styles.infoText2}>Customers</Text>
          </View>
          <View style={styles.infoView}>
            <SimpleLineIcons name="badge" size={16} color="grey" />
            <Text style={styles.infoText}>5</Text>
            <Text style={styles.infoText2}>Badges</Text>
          </View>
          <View style={styles.infoView}>
            <Feather name="star" color="grey" size={16} />

            <Text style={styles.infoText}>5+</Text>
            <Text style={styles.infoText2}>star</Text>
          </View>
        </View>
        <View style={{marginTop: 22}}>
          <View style={styles.ratingViewAllContainer}>
            <Text style={styles.ratingReviewText}>Ratings and Reviews </Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          {ratingContent('width')}
          {ratingContent()}
        </View>

        <View style={{marginVertical: 40}}>
          <Button title="Book Now" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContentContainer: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  contentContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },

  contentImageContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: COLOUR_DARK_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rating: {
    flexDirection: 'row',
  },

  title: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
    color: '#000000',
  },

  desc: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    color: 'grey',
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imageStar: {
    backgroundColor: COLOUR_GREEN,
    width: 22,
    height: 22,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 103,
    right: 1,
  },
  callMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
    marginTop: 15,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    width: width * 0.85,
    alignSelf: 'center',
  },
  infoView: {
    gap: 5,
    alignItems: 'center',
  },
  infoText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 28.13,
    textAlign: 'center',
    color: COLOUR_BLACK,
  },
  infoText2: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    textAlign: 'center',
    color: COLOUR_BLACK,
  },
  ratingReviewText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
  },

  viewAll: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    color: COLOUR_DARK_GREEN,
  },
  ratingName: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
  },
  ratingDesc: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    color: COLOUR_SECONDARY_GREY,
  },
  ratingTime: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    color: 'grey',
  },
  ratingViewAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingNameContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContentContainer: {
    borderColor: 'grey',
    paddingBottom: 10,
  },
});

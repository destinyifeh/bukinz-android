import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  TextInput as SearchInput,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NotificationSkeleton} from '../../../components/Skeletons';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_SECONDARY_GREY,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  MAX_ALLOWED_WIDTH,
} from '../../../constants/Styles';
import CustomerHeader from '../components/header';
import {CustomerSearchItems} from './components/search-items';
export default function CustomerSearchScreen() {
  const searchRef = React.useRef();
  const {height, width} = useWindowDimensions();
  const navigation = useNavigation();
  const [isSearching, setIsSearching] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(COLOUR_DARK_GREEN);
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  console.log(width, 'widthhh');
  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const onSearch = value => {
    console.log(value, 'search value...');
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };
  return (
    <View style={{flex: 1, backgroundColor: COLOUR_WHITE}}>
      <CustomerHeader title="Search" />
      <View
        style={[
          styles.contentContainer,
          {
            width: width > MAX_ALLOWED_WIDTH ? MAX_ALLOWED_WIDTH : width * 0.9,
          },
        ]}
        contentContainerStyle={{}}>
        <View style={styles.searchContainer}>
          <View style={{marginLeft: 10}}>
            <AntDesign name="search1" size={15} color="#666464" />
          </View>
          <SearchInput
            style={styles.searchInput}
            cursorColor={COLOUR_SECONDARY_GREY}
            placeholder="Search by location and service"
            onChangeText={onSearch}
            //   defaultValue={value}
            placeholderTextColor="grey"
            ref={searchRef}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.resultsText}>Results</Text>
        </View>
        <View style={{marginVertical: 20}}>
          {isSearching ? (
            <NotificationSkeleton />
          ) : (
            <>
              <CustomerSearchItems />
              <CustomerSearchItems />
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 30,
    flex: 1,
  },
  resultsText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    lineHeight: 16.41,
    fontWeight: '400',
    color: '#000000',
  },

  notificationDayText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 16,
    color: COLOUR_BLACK,
  },
  searchContainer: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOUR_SECONDARY_GREY,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#F1F0EE',
    alignSelf: 'center',
    height: 42,
  },
  searchInput: {
    width: '100%',
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 12,
    lineHeight: 14.06,
    fontWeight: '400',
    color: COLOUR_BLACK,
  },
});

import React, {useState} from 'react';
import {
  Keyboard,
  ScrollView,
  TextInput as SearchInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import {TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import Entypo from 'react-native-vector-icons/Entypo';
import {
  COLOUR_FORM_CONTROL_BACKGROUND,
  COLOUR_GREEN,
  COLOUR_SECONDARY_GREY,
  FONT_FAMILY_BODY,
  FONT_SIZE_TEXT_INPUT,
  LINE_HEIGHT_BIG,
} from '../constants/Styles';
const InputPicker2 = ({
  onSelect,
  value,
  label,
  onChangeText,
  data,
  isLoading,
}) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [businessTypes, setBusinessTypes] = useState(data);

  const [alternativeData, setAlternativeData] = useState(data);
  const [notFound, setNotFound] = useState(false);
  const [itemValue, setItemValue] = useState('');
  const sheetRef = React.useRef();
  const {height} = useWindowDimensions();
  React.useEffect(() => {
    // handleFocus();
  }, []);

  const onSelectData = item => {
    setSelectedItem(item);
    onSelect(item);
    sheetRef.current?.close();
  };

  const handleFocus = () => {
    Keyboard.dismiss();
  };

  const onSearch = searchValue => {
    setItemValue(searchValue);
    if (!searchValue || searchValue === '') {
      setBusinessTypes(alternativeData);
      setNotFound(false);
      return;
    }
    const filteredData = businessTypes?.filter(item =>
      item.label.toLowerCase().includes(searchValue.toLowerCase().trim()),
    );
    console.log(searchValue, 'vall22');

    if (filteredData.length > 0) {
      setBusinessTypes(filteredData);
      setNotFound(false);
    } else {
      setNotFound(true);
      setBusinessTypes([]);
    }
  };

  return (
    <View style={{marginTop: 10, flex: 1}}>
      <TextInput
        onFocus={handleFocus}
        onChangeText={onChangeText}
        mode="outlined"
        label={label}
        right={
          <TextInput.Icon
            icon={() => <AntDesign name="right" />}
            onPressOut={() => sheetRef.current?.open()}
          />
        }
        style={{
          backgroundColor: COLOUR_FORM_CONTROL_BACKGROUND,
          // marginTop: 10,
        }}
        outlineStyle={{
          borderRadius: 10,
          borderWidth: 0.5,
        }}
        contentStyle={{
          fontFamily: FONT_FAMILY_BODY,
        }}
        activeOutlineColor={COLOUR_GREEN}
        outlineColor={COLOUR_SECONDARY_GREY}
        //cursorColor={COLOUR_FORM_CONTROL_BACKGROUND}
        onPressOut={() => sheetRef.current?.open()}
        value={value}
        disabled={isLoading ? true : false}
      />

      <RBSheet
        ref={sheetRef}
        animationType="fade"
        closeOnDragDown={true}
        duration={300}
        height={height * 0.8}
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}>
        <View style={{paddingHorizontal: 15, flex: 1}}>
          <View style={styles.itemSearchContainer}>
            <View style={{marginLeft: 10}}>
              <AntDesign name="search1" size={20} />
            </View>
            <SearchInput
              style={{width: '100%', fontFamily: FONT_FAMILY_BODY}}
              cursorColor={'grey'}
              placeholder="Search"
              onChangeText={onSearch}
              //   defaultValue={value}
            />
          </View>
          <ScrollView
            style={{marginTop: 20, marginBottom: 20}}
            showsVerticalScrollIndicator={false}>
            {businessTypes?.map((item, idx) => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  key={idx}
                  onPress={() => onSelectData(item.label)}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              );
            })}
            {notFound && <Text style={styles.notFoundText}>No item found</Text>}
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_TEXT_INPUT,
    lineHeight: LINE_HEIGHT_BIG,
  },
  itemContainer: {
    backgroundColor: COLOUR_FORM_CONTROL_BACKGROUND,
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 5,
    borderColor: COLOUR_SECONDARY_GREY,
    alignItems: 'center',
  },
  itemSearchContainer: {
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOUR_SECONDARY_GREY,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: COLOUR_SECONDARY_GREY,
    alignSelf: 'center',
  },
  notFoundText: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY_BODY,
    marginVertical: 5,
  },
});

export default InputPicker2;

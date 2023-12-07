import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLOUR_SECONDARY_GREY} from '../constants/Styles';

const InputPicker = ({
  style,
  dropDownContainerStyle,
  modalProps,
  flatListProps,
  scrollViewProps,
  listMode,
  modalAnimationType,
  modalContentContainerStyle,
  modalTitle,
  modalTitleStyle,
  arrowIconContainerStyle,
  arrowIconStyle,
  closeIconContainerStyle,
  closeIconStyle,
  ArrowDownIconComponent,
  ArrowUpIconComponent,
  placeholder,
  data,
  onChangeValue,
  onSelectItem,
  placeholderStyle,
  searchable,
  listItemContainerStyle,
  disabled,
  labelStyle,
  value,
  setBusinessTypeValue,
}) => {
  const [open, setOpen] = useState(false);
  //const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);
  return (
    <View>
      <DropDownPicker
        // showArrowIcon={false}
        closeIconContainerStyle={closeIconContainerStyle}
        closeIconStyle={closeIconStyle}
        arrowIconStyle={arrowIconStyle}
        arrowIconContainerStyle={arrowIconContainerStyle}
        ArrowDownIconComponent={ArrowDownIconComponent}
        ArrowUpIconComponent={ArrowUpIconComponent}
        onSelectItem={onSelectItem}
        onChangeValue={onChangeValue}
        listMode={listMode}
        modalTitle={modalTitle}
        modalAnimationType={modalAnimationType}
        modalTitleStyle={modalTitleStyle}
        modalContentContainerStyle={modalContentContainerStyle}
        flatListProps={flatListProps}
        scrollViewProps={scrollViewProps}
        modalProps={{modalProps}}
        selectedItemContainerStyle={{backgroundColor: COLOUR_SECONDARY_GREY}}
        dropDownContainerStyle={dropDownContainerStyle}
        style={style}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        // setValue={setValue}
        setValue={newValue => {
          setBusinessTypeValue(newValue);
        }}
        setItems={setItems}
        placeholder={placeholder}
        placeholderStyle={placeholderStyle}
        searchable={searchable}
        listItemContainerStyle={listItemContainerStyle}
        disabled={disabled}
        labelStyle={labelStyle}
        // multiple={true}
        // multipleText="%d items have been selected."
        // min={0}
        // max={items.length}
        // containerStyle={{height: 40}}
        // mode="BADGE"
      />
    </View>
  );
};

export default InputPicker;

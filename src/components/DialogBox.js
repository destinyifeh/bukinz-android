import React from 'react';
import {Dimensions, View} from 'react-native';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const DialogBox = ({children, isVisible}) => {
  return (
    <Modal
      isVisible={isVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}>
      <View style={{flex: 1}}>{children}</View>
    </Modal>
  );
};

export default DialogBox;

import React from 'react';
import {HelperText} from 'react-native-paper';

const HintText = ({visible, children}) => {
  return (
    <HelperText
      type="error"
      visible={visible}
      // style={{color: COLOUR_TERRACOTTA}}
    >
      {children}
    </HelperText>
  );
};

export default HintText;

import {StyleSheet} from 'react-native';
import {
  COLOUR_BLACK,
  COLOUR_DARK_GREEN,
  COLOUR_GREEN,
  COLOUR_RED,
  COLOUR_TERRACOTTA,
  COLOUR_WHITE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_BOLD,
  FONT_SIZE_BIG,
  FONT_SIZE_BIGGER,
  FONT_SIZE_MID,
  FONT_SIZE_SMALL,
  FONT_SIZE_TITLE,
  LINE_HEIGHT_BIGGER,
  LINE_HEIGHT_MID,
  LINE_HEIGHT_SMALL,
  LINE_HEIGHT_SMALLER,
  LINE_HEIGHT_TITLE,
} from '../constants/Styles';
const GlobalStyles = StyleSheet.create({
  titleText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_BIG,
    lineHeight: LINE_HEIGHT_TITLE,
    color: COLOUR_DARK_GREEN,
    fontWeight: 'bold',
  },
  descText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_MID,
    lineHeight: LINE_HEIGHT_SMALL,
    color: COLOUR_BLACK,
    paddingTop: 10,
  },
  titleDescView: {
    marginVertical: 12,
  },
  inputLabel: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_MID,
    lineHeight: LINE_HEIGHT_SMALL,
    color: COLOUR_GREEN,
  },
  FormInputContainer: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 50,
  },

  inputText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_MID,
    lineHeight: LINE_HEIGHT_SMALL,
    color: COLOUR_BLACK,
  },
  inputErrorText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_SMALL,
    lineHeight: LINE_HEIGHT_SMALLER,
    color: COLOUR_TERRACOTTA,
  },
  verifyInput: {
    height: 55,
    width: 55,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: COLOUR_GREEN,
  },

  verifyInputText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontSize: FONT_SIZE_BIGGER,
    lineHeight: LINE_HEIGHT_BIGGER,
    color: COLOUR_DARK_GREEN,
  },
  verifyInputError: {
    height: 55,
    width: 55,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: COLOUR_RED,
  },
  verifyInputTextError: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontSize: FONT_SIZE_BIGGER,
    lineHeight: LINE_HEIGHT_BIGGER,
    color: COLOUR_RED,
  },
  button: {
    width: '100%',
    height: 43,
    borderRadius: 8,
    //backgroundColor: COLOUR_TERRACOTTA,
  },

  buttonText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_TITLE,
    lineHeight: LINE_HEIGHT_SMALL,
    color: COLOUR_WHITE,
    textAlign: 'center',
    marginTop: 16,
  },
  buttonOutlineText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_TITLE,
    lineHeight: LINE_HEIGHT_SMALL,
    color: COLOUR_DARK_GREEN,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 16,
  },
  button2: {
    width: '45%',
    height: 48,
    borderRadius: 8,
    backgroundColor: COLOUR_DARK_GREEN,
  },

  buttonOutline: {
    width: '45%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLOUR_DARK_GREEN,
    borderRadius: 8,
    height: 48,
  },
  bottomText: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_MID,
    lineHeight: LINE_HEIGHT_MID,
    color: 'grey',
  },
  bottomViewContainer: {
    marginTop: 25,
    alignSelf: 'center',
  },
  bottomText2: {
    fontFamily: FONT_FAMILY_BODY,
    fontSize: FONT_SIZE_MID,
    lineHeight: LINE_HEIGHT_MID,
    color: COLOUR_DARK_GREEN,
  },
  policyContainer: {
    marginVertical: 20,
  },
});

export default GlobalStyles;
